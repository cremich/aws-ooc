import ConfigureAmplifyClientSide from "@/components/ConfigureAmplify";
import type { Metadata, Viewport } from "next";
import "@cloudscape-design/global-styles/index.css";
import TopNav from "@/components/TopNav";
import {
  AppLayout,
  BreadcrumbGroup,
  SideNavigation,
  HelpPanel,
} from "@cloudscape-design/components";

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
      <body>
        <ConfigureAmplifyClientSide />
        <TopNav />
        {children}
      </body>
    </html>
  );
}
