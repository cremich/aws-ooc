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
import type { Schema } from "../../amplify/data/resource"; // Path to your backend resource definition

const client = generateClient<Schema>();

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
          <Table
            renderAriaLive={({ firstIndex, lastIndex, totalItemsCount }) =>
              `Displaying items ${firstIndex} to ${lastIndex} of ${totalItemsCount}`
            }
            columnDefinitions={[
              {
                id: "transcriptionJobName",
                header: "Job Name",
                cell: (item: Schema["TranscriptionJob"]["type"]) =>
                  item.TranscriptionJobName,
                sortingField: "jobName",
                isRowHeader: true,
              },
              {
                id: "transcriptionJobStatus",
                header: "Job Status",
                cell: (item: Schema["TranscriptionJob"]["type"]) =>
                  item.TranscriptionJobStatus,
                sortingField: "jobStatus",
              },
            ]}
            enableKeyboardNavigation
            items={[]}
            loadingText="Loading resources"
            empty={
              <Box
                margin={{ vertical: "xs" }}
                textAlign="center"
                color="inherit"
              >
                <SpaceBetween size="m">
                  <b>No resources</b>
                  <Button>Transcribe your first video</Button>
                </SpaceBetween>
              </Box>
            }
            filter={
              <TextFilter
                filteringPlaceholder="Find transcription jobs"
                filteringText=""
              />
            }
            header={<Header>Transcription Jobs</Header>}
            pagination={<Pagination currentPageIndex={1} pagesCount={1} />}
          />
        </ContentLayout>
      }
    />
  );
}
