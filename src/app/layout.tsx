import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ErrorWrapper } from "./error-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <ThemeProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
           <header className=" flex justify-center ">
          <p>
            This is the <span className=" italic font-bold">header</span>
          </p>
          </header>
          <ErrorWrapper>
          {children}
          </ErrorWrapper>
        
          <footer className=" flex justify-center ">
          <p>
            This is the <span className=" italic font-bold">footer</span>
          </p>
        </footer>
        </body>
      </ThemeProvider>      
    </html>
  );
}
