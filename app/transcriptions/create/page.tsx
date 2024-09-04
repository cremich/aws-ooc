"use client";
import {
  AppLayout,
  Box,
  BreadcrumbGroup,
  Button,
  ContentLayout,
  Header,
  Link,
  Pagination,
  SpaceBetween,
  Table,
  TextFilter,
} from "@cloudscape-design/components";
import { generateClient } from "aws-amplify/api";
import type { Schema } from "../../../amplify/data/resource"; // Path to your backend resource definition

const client = generateClient<Schema>();

export default function CreateTranscription() {
  return (
    <AppLayout
      navigationHide={true}
      toolsHide={true}
      breadcrumbs={
        <BreadcrumbGroup
          items={[
            { text: "AWS OOC", href: "/" },
            { text: "Transcriptions", href: "/transcriptions" },
            { text: "Create Transcription", href: "#" },
          ]}
          ariaLabel="Breadcrumbs"
        />
      }
      content={
        <ContentLayout
          header={
            <Header
              variant="h1"
              info={<Link variant="info">Info</Link>}
              description="Create a new Transcription Job"
            >
              New Transcription
            </Header>
          }
        >
          ...
        </ContentLayout>
      }
    />
  );
}
