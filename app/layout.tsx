import Navbar from "@/components/base/Navbar";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import type { Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import bg from "@/assets/background/bg.png";
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
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body
        id="main-body"
        className="h-full select-auto color-scheme bg-[#d9cdbd]"
        style={style}
      >
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          <div>
            <Navbar />
          </div>
          <main>{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
