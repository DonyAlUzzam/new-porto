import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";

const TopProgressBar = dynamic(() => import("@/components/TopProgressbar"), {
  ssr: false,
});

export const metadata = {
  title: "Dony Al-Uzzam | Full Stack Developer",
  description:
    "Dony Al-Uzzam — Full Stack Developer with 10+ years of experience building production-ready web applications, APIs, data platforms, and AI-powered solutions.",
  authors: [{ name: "Dony Al-Uzzam" }],
  keywords: [
    "Dony Al-Uzzam",
    "Dony Aluzzam",
    "Full Stack Developer",
    "Laravel Developer",
    "Node.js Developer",
    "React Developer",
    "Next.js Developer",
    "PostgreSQL",
    "AI Developer",
  ],
  metadataBase: new URL("https://donyaluzzam.vercel.app"),
  openGraph: {
    type: "website",
    url: "https://donyaluzzam.vercel.app",
    title: "Dony Al-Uzzam | Full Stack Developer",
    description:
      "Full Stack Developer with 10+ years of experience building production-ready systems, APIs, dashboards, and AI-powered applications.",
    siteName: "Dony Al-Uzzam Portfolio",
    images: [
      {
        url: "/img/me.jpg",
        width: 1200,
        height: 1200,
        alt: "Dony Al-Uzzam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dony Al-Uzzam | Full Stack Developer",
    description:
      "Full Stack Developer with 10+ years of experience building production-ready systems and AI-powered applications.",
    images: ["/img/me.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopProgressBar />
        <Navbar />
        {children}
        <Chat />
        <Analytics />
      </body>
    </html>
  );
}
