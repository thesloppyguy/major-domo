import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import type { Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import bg from "@/assets/background/bg.png";
import Background from "./components/background";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body id="main-body" className="select-auto color-scheme bg-white">
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
