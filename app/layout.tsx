import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "AWS OOC",
  description:
    "Get access to AWS service capabilities without touching the AWS Management Console",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
