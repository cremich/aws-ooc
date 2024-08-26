// components/Logout.tsx

"use client";

import { TopNavigation } from "@cloudscape-design/components";
import { signOut } from "aws-amplify/auth";
import { useRouter } from "next/navigation";

export default function TopNav() {
  const router = useRouter();

  return (
    <TopNavigation
      identity={{
        href: "/",
        title: "AWS OOC",
        logo: {
          src: "/images/amplify.svg",
          alt: "AWS Out of Console",
        },
      }}
      utilities={[
        {
          type: "button",
          text: "Sign Out",
          ariaLabel: "Sign out current user",
          onClick: async () => {
            await signOut();
            router.push("/login");
          },
        },
      ]}
    />
  );
}
