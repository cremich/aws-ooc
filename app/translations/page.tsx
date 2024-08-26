"use client";

import { useRouter } from "next/navigation";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Grid from "@cloudscape-design/components/grid";
import {
  AppLayout,
  BreadcrumbGroup,
  SideNavigation,
  HelpPanel,
  Header,
  Link,
  Tabs,
} from "@cloudscape-design/components";
import TranslateText from "@/components/translations/TranslateText";

export default function Translations() {
  const router = useRouter();

  return (
    <AppLayout
      navigationHide={true}
      toolsHide={true}
      breadcrumbs={
        <BreadcrumbGroup
          items={[
            { text: "AWS OOC", href: "/" },
            { text: "Translations", href: "#" },
          ]}
          ariaLabel="Breadcrumbs"
        />
      }
      content={
        <ContentLayout
          header={
            <Header variant="h1" info={<Link variant="info">Info</Link>}>
              Translations
            </Header>
          }
        >
          <Tabs
            tabs={[
              {
                label: "Translate Text",
                id: "first",
                content: <TranslateText />,
              },
              {
                label: "Translate Documents",
                id: "second",
                content: "Second tab content area",
                disabled: true,
              },
            ]}
          />
        </ContentLayout>
      }
    />
  );
}
