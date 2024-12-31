import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ToasterComponent from "@/components/global/toast";
import LoadingIndicatorComponent from "@/components/global/loading-indicator";
import AppProvider from "@/provider/app-provider";

const geistSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
    <html lang="vi" suppressHydrationWarning >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProvider >
          {children}
          <ToasterComponent />
          <LoadingIndicatorComponent />
        </AppProvider>
      </body>
    </html>
  );
}
