"use client";

import TopNav from "@/components/TopNav";

import { useRouter } from "next/router";

export default function HomeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <TopNav />
      <section>{children}</section>
    </div>
  );
}
