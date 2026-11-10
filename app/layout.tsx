import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const jakarta = localFont({
  src: [
    { path: "./fonts/PlusJakartaSans-400.ttf", weight: "400", style: "normal" },
    { path: "./fonts/PlusJakartaSans-500.ttf", weight: "500", style: "normal" },
    { path: "./fonts/PlusJakartaSans-600.ttf", weight: "600", style: "normal" },
    { path: "./fonts/PlusJakartaSans-700.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://syumul.com"),
  title: "Syumul — App induk untuk kehidupan Muslim",
  description:
    "Syumul menghimpunkan waktu solat, kiblat, al-Quran dan semakan halal dalam satu app, serta menggerakkan app berjenama untuk masjid, institusi dan perniagaan.",
  openGraph: {
    title: "Syumul — Satu app. Seluruh kehidupan Muslim.",
    description:
      "Muslim super app dan platform app berjenama (white-label) untuk organisasi.",
    url: "https://syumul.com",
    siteName: "Syumul",
    locale: "ms_MY",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ms" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
