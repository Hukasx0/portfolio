import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

const isGitHubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === 'true';

export const metadata: Metadata = {
  title: "Hubert Kasperek's portfolio website",
  description: "Hubert Kasperek's portfolio website",
  icons: [{ rel: "icon", url: `${isGitHubPages ? '/portfolio' : ''}/icon.png` }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {/*<div className="hidden xl:block h-screen w-screen absolute z-[-1] backdrop-blur-sm isolate overflow-hidden"></div>*/}
              <div vaul-drawer-wrapper="">
                {children}
              </div>
              <Toaster />
          </ThemeProvider>
      </body>
    </html>
  );
}
