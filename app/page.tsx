"use client";

import { useState, useEffect } from "react";

import ContentLayout from "@cloudscape-design/components/content-layout";
import Box from "@cloudscape-design/components/box";
import Grid from "@cloudscape-design/components/grid";
import Container from "@cloudscape-design/components/container";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";

import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";

import "@cloudscape-design/global-styles/index.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  const [value, setValue] = useState("");

  return (
    <ContentLayout
      defaultPadding
      disableOverlap
      headerBackgroundStyle={(mode) =>
        `center center/cover url("/hero-header-${mode}.png")`
      }
      header={
        <Box padding={{ vertical: "xxxl" }}>
          <Grid gridDefinition={[{ colspan: { default: 12, s: 8 } }]}>
            <Container>
              <Box padding="s">
                <Box
                  fontSize="display-l"
                  fontWeight="bold"
                  variant="h1"
                  padding="n"
                >
                  AWS Out-Of-Console
                </Box>
                <Box fontSize="display-l" fontWeight="light">
                  The ultimate service experience
                </Box>
                <Box
                  variant="p"
                  color="text-body-secondary"
                  margin={{ top: "xs", bottom: "l" }}
                >
                  Get access to AWS service capabilities without touching the
                  AWS Management Console
                </Box>
                <SpaceBetween direction="horizontal" size="xs">
                  <Button variant="primary">Sign In</Button>
                  <Button>Create Account</Button>
                </SpaceBetween>
              </Box>
            </Container>
          </Grid>
        </Box>
      }
    />
  );
}
