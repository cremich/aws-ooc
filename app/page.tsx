"use client";

import { useRouter } from "next/navigation";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Grid from "@cloudscape-design/components/grid";
import Translations from "@/components/service-cards/Translations";
import {
  AppLayout,
  BreadcrumbGroup,
  SideNavigation,
  HelpPanel,
  Header,
  Link,
} from "@cloudscape-design/components";

export default function App() {
  const router = useRouter();

  return (
    <AppLayout
      navigationHide={true}
      toolsHide={true}
      content={
        <ContentLayout
          header={
            <Header variant="h1" info={<Link variant="info">Info</Link>}>
              (Out of) Console Home
            </Header>
          }
        >
          <Grid
            gridDefinition={[
              { colspan: { default: 12, xxs: 4 } },
              { colspan: { default: 12, xxs: 4 } },
            ]}
          >
            <div>
              <Translations />
            </div>
            <div></div>
          </Grid>
        </ContentLayout>
      }
    />
  );
}
