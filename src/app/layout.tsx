import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StarsBackground } from "./components/ui/stars-background";
import { ShootingStars } from "./components/ui/shooting-stars";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SpaceCorpDummy - Innovating Beyond the Stars",
  description:
    "Leading space technology company pushing the boundaries of innovation and exploration",
  keywords: "space, technology, innovation, aerospace, satellites, exploration",
  authors: [{ name: "SpaceCorpDummy" }],
  openGraph: {
    title: "SpaceCorpDummy - Innovating Beyond the Stars",
    description:
      "Leading space technology company pushing the boundaries of innovation and exploration",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen relative`}
        style={{
          fontFamily: "var(--font-nunito)",
        }}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <StarsBackground
            starDensity={0.00015}
            allStarsTwinkle={true}
            twinkleProbability={0.7}
            minTwinkleSpeed={0.5}
            maxTwinkleSpeed={1}
            className="fixed inset-0 z-0"
          />

          <ShootingStars
            minSpeed={10}
            maxSpeed={30}
            minDelay={1200}
            maxDelay={2200}
            starColor="#9E00FF"
            trailColor="#2EB9DF"
            starWidth={10}
            starHeight={1}
            className="fixed inset-0 z-0"
          />

          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
