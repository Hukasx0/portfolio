"use client";

import Image from 'next/image';
import { experiences } from '@/const';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  return (
    <div className='mt-12 flex'>
    <VerticalTimeline
    lineColor='hsl(var(--secondary))'
    animate={true}>
      {experiences.map((experience) => (
        <VerticalTimelineElement
        contentArrowStyle={{
          color: 'hsl(var(--secondary))',
          borderRight: '7px solid'
        }}
        visible={true}
        key={experience.company_name}
        date={experience.date}
        icon={
          <div className='flex justify-center items-center w-full h-full'>
            <Image
              src={experience.icon}
              alt={experience.company_name}
              width={500}
              height={500}
              className='w-[60%] h-[60%] object-contain' 
            />
          </div>
        }
        iconStyle={{
          background: experience.iconBg
        }}
        contentStyle={{
          borderBottom: '8px',
          borderStyle: 'solid',
          borderBottomColor: experience.iconBg,
          boxShadow: 'none',
          background: 'hsl(var(--secondary))'
        }}
        >
          <div>
            <h3 className='text-xl font-semibold'>{experience.title}</h3>
            <p className='font-medium font-base' style={{margin: 0}}>
              {experience.company_name}
            </p>
            <ul className='my-5 list-disc ml-5 space-y-2'>
              {experience.points.map((point, index) => (
                <li key={`experience-point-${index}`} className='font-normal pl-1 text-small'>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
    </div>
  )
}

export default Experience;
