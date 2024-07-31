import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import NextTopLoader from 'nextjs-toploader'; // for toploader on page load

const IBMPlex = IBM_Plex_Sans({
   subsets: ["latin"],
   weight:["400","500",'600','700'],
   variable:'--font-ibm-plex'
   });
   const APP_NAME = "ImageAi";
   const APP_DEFAULT_TITLE = "ImageAi";
   const APP_TITLE_TEMPLATE = "%s - ImageAi App";
   const APP_DESCRIPTION = "Best ImageAi app in the world!";
export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: "Image ai playground.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables:{colorPrimary:'#6C47FF'}
    }}>
    <html lang="en">
      <body className={cn("font-IBMPlex antialiased",IBMPlex.variable)}>
      <NextTopLoader
        color="#5f49ff"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
