const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://tedfang-424.github.io/Garrett-Alexander-Ingram-Personal-Mobile-Mechanic";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Garrett Ingram Mobile Mechanic | Nashville, TN Mobile Auto Repair",
  description:
    "Garrett Ingram Mobile Mechanic provides mobile auto repair, diagnostics, and late-night roadside help across Nashville, Antioch, Murfreesboro, Franklin, Brentwood, Smyrna, and La Vergne.",
  keywords: [
    "mobile mechanic Nashville TN",
    "roadside assistance Nashville",
    "Antioch mobile mechanic",
    "mobile auto repair Nashville",
    "late night roadside help Nashville",
    "oil change mobile mechanic Nashville"
  ],
  openGraph: {
    title: "Garrett Ingram Mobile Mechanic | Fast Mobile Auto Repair in Nashville",
    description:
      "Fast mobile repairs, diagnostics, and late-night roadside assistance across the greater Nashville area.",
    images: ["/images/main-photo.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Garrett Ingram Mobile Mechanic | Nashville, TN",
    description:
      "Fast mobile auto repair and late-night roadside help in the Nashville area.",
    images: ["/images/main-photo.png"]
  }
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
