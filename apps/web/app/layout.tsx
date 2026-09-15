import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Meeting Delegate",
  description: "A disclosed AI representative for supervised meeting participation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
