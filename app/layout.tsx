import type { Metadata } from "next";
import type { Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import bg from "@/assets/background/bg.png";
import { Providers } from "./components/parallax-provider";
export const metadata: Metadata = {
  title: "Sahil - Code",
  description: "Portfolio - Sahil",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  userScalable: false,
};

const style = {
  backgroundImage: `url(${bg.src})`,
  width: "100%",
  height: "100%",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body id="main-body" className=" bg-[#d9cdbd]" style={style}>
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
