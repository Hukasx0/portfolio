"use client";
import { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Object3DNode, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "../data/globe.json";

extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const aspect = 1.2;
const cameraZ = 300;

var Position = {
  order: 'number',
  startLat: 'number',
  startLng: 'number',
  endLat: 'number',
  endLng: 'number',
  arcAlt: 'number',
  color: 'string'
};

var GlobeConfig = {
  pointSize: 'number',
  globeColor: 'string',
  showAtmosphere: 'boolean',
  atmosphereColor: 'string',
  atmosphereAltitude: 'number',
  emissive: 'string',
  emissiveIntensity: 'number',
  shininess: 'number',
  polygonColor: 'string',
  ambientLight: 'string',
  directionalLeftLight: 'string',
  directionalTopLight: 'string',
  pointLight: 'string',
  arcTime: 'number',
  arcLength: 'number',
  rings: 'number',
  maxRings: 'number',
  initialPosition: {
    lat: 'number',
    lng: 'number'
  },
  autoRotate: 'boolean',
  autoRotateSpeed: 'number'
};

var WorldProps = {
  globeConfig: GlobeConfig,
  data: {
    type: Array,
    itemType: Position
  }
};

let numbersOfRings = [0];

/**
 * Renders a 3D globe with the provided configuration and data.
 *
 * @param {WorldProps} globeConfig - The configuration for the globe.
 * @param {object} data - The data to render on the globe.
 * @return {JSX.Element} The rendered 3D globe component.
 */
export function Globe({ globeConfig, data }) {
  const [globeData, setGlobeData] = useState(null);

  const globeRef = useRef(null);

  const defaultProps = {
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ...globeConfig,
  };

  useEffect(() => {
    if (globeRef.current) {
      _buildData();
      _buildMaterial();
    }
  }, [globeRef.current]);

  /**
   * @description Builds the material of the globe.
   */
  const _buildMaterial = () => {
    if (!globeRef.current) return;

    /**
     * @type {{
     *   color: Color;
     *   emissive: Color;
     *   emissiveIntensity: number;
     *   shininess: number;
     * }}
     */
    const globeMaterial = globeRef.current.globeMaterial();
    globeMaterial.color = new Color(globeConfig.globeColor);
    globeMaterial.emissive = new Color(globeConfig.emissive);
    globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || 0.1;
    globeMaterial.shininess = globeConfig.shininess || 0.9;
  };

  const _buildData = () => {
    const arcs = data;
    let points = [];
    for (let i = 0; i < arcs.length; i++) {
      const arc = arcs[i];
      const rgb = hexToRgb(arc.color);
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: t => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.startLat,
        lng: arc.startLng,
      });
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: t => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.endLat,
        lng: arc.endLng,
      });
    }


    // remove duplicates for same lat and lng
    const filteredPoints = points.filter(function (v, i, a) {
      return (
        a.findIndex(function (v2) {
          return ["lat", "lng"].every(function (k) {
            return v2[k] === v[k];
          });
        }) === i
      );
    });

    setGlobeData(filteredPoints);
  };

  useEffect(() => {
    if (globeRef.current && globeData) {
      globeRef.current
        .hexPolygonsData(countries.features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.7)
        .showAtmosphere(defaultProps.showAtmosphere)
        .atmosphereColor(defaultProps.atmosphereColor)
        .atmosphereAltitude(defaultProps.atmosphereAltitude)
        .hexPolygonColor((e) => {
          return String(defaultProps.polygonColor);
        });
      startAnimation();
    }
  }, [globeData]);

  const startAnimation = () => {
    if (!globeRef.current || !globeData) return;

    globeRef.current
      .arcsData(data)
      .arcStartLat(d => d.startLat)
      .arcStartLng(d => d.startLng)
      .arcEndLat(d => d.endLat)
      .arcEndLng(d => d.endLng)
      .arcColor(e => e.color)
      .arcAltitude(e => e.arcAlt)
      .arcStroke(e => [0.32, 0.28, 0.3][Math.round(Math.random() * 2)])
      .arcDashLength(defaultProps.arcLength)
      .arcDashInitialGap(e => e.order)
      .arcDashGap(15)
      .arcDashAnimateTime(e => defaultProps.arcTime);

    globeRef.current
      .pointsData(globeData)
      .pointColor(e => e.color)
      .pointsMerge(true)
      .pointAltitude(0.0)
      .pointRadius(2);

    globeRef.current
      .ringsData([])
      .ringColor(e => t => e.color(t))
      .ringMaxRadius(defaultProps.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod(defaultProps.arcTime * defaultProps.arcLength / defaultProps.rings);
  };


  useEffect(() => {
    if (!globeRef.current || !globeData) return;

    const interval = setInterval(() => {
      if (!globeRef.current || !globeData) return;
      numbersOfRings = genRandomNumbers(
        0,
        data.length,
        Math.floor((data.length * 4) / 5)
      );

      globeRef.current.ringsData(
        globeData.filter((d, i) => numbersOfRings.includes(i))
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [globeRef.current, globeData]);

  return (
    <>
      <threeGlobe ref={globeRef} />
    </>
  );
}

export function WebGLRendererConfig() {
  const { gl, size } = useThree();

  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0xffaaff, 0);
  }, []);

  return null;
}

/**
 * @param {{globeConfig: GlobeConfig}} props
 */
export function World(props) {
  const { globeConfig } = props;
  const scene = new Scene();
  scene.fog = new Fog(0xffffff, 400, 2000);
  return (
    <Canvas
      scene={scene}
      camera={new PerspectiveCamera(50, aspect, 180, 1800)}
    >
      <WebGLRendererConfig />
      <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
      <directionalLight
        color={globeConfig.directionalLeftLight}
        position={new Vector3(-400, 100, 400)}
      />
      <directionalLight
        color={globeConfig.directionalTopLight}
        position={new Vector3(-200, 500, 200)}
      />
      <pointLight
        color={globeConfig.pointLight}
        position={new Vector3(-200, 500, 200)}
        intensity={0.8}
      />
      <Globe {...props} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotateSpeed={1}
        autoRotate={true}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}

/**
 * Converts a hex color code to an RGB object
 * @param {string} hex The hex color code
 * @returns {object|null} The rgb values in an object, or null if the input is invalid
 */
export function hexToRgb(hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
    : null;
}

/**
 * @param {number} min The minimum value of the range.
 * @param {number} max The maximum value of the range.
 * @param {number} count The number of random numbers to generate.
 * @returns {number[]} An array of random numbers.
 */
export function genRandomNumbers(min, max, count) {
  const arr = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  return arr;
}