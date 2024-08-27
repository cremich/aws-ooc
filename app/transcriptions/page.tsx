"use client";
import {
  AppLayout,
  BreadcrumbGroup,
  ContentLayout,
  Header,
  Link,
  Tabs,
} from "@cloudscape-design/components";

export default function Transcriptions() {
  return (
    <AppLayout
      navigationHide={true}
      toolsHide={true}
      breadcrumbs={
        <BreadcrumbGroup
          items={[
            { text: "AWS OOC", href: "/" },
            { text: "Transcriptions", href: "#" },
          ]}
          ariaLabel="Breadcrumbs"
        />
      }
      content={
        <ContentLayout
          header={
            <Header variant="h1" info={<Link variant="info">Info</Link>}>
              Transcriptions
            </Header>
          }
        >
          Here we go...
        </ContentLayout>
      }
    />
  );
}
