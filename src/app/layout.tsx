import type { Metadata } from "next";
import "@/app/styles/globals.css";
import localFont from 'next/font/local'
import { Fira_Mono } from 'next/font/google'
 
// Font files can be colocated inside of `pages`
export const airbeat = localFont({ src: '../../public/fonts/Airbeat.ttf' })
export const fira_mono = Fira_Mono({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "[/boot/dev/ArghyaSarkar]$ ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
