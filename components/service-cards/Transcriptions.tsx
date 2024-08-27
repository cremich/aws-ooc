import Image from "next/image";

import { useRouter } from "next/navigation";
import {
  Container,
  SpaceBetween,
  Box,
  Button,
  Link,
} from "@cloudscape-design/components";

export default function Transcriptions() {
  const router = useRouter();

  return (
    <Container
      media={{
        content: (
          <img
            src="/images/Transcribe.svg"
            alt="Amazon Transcribe Service Icon"
          />
        ),
        position: "side",
        width: "25%",
      }}
    >
      <SpaceBetween direction="vertical" size="s">
        <SpaceBetween direction="vertical" size="xxs">
          <Box variant="h2">
            <Link fontSize="heading-m" href="/transcriptions">
              Transcriptions
            </Link>
          </Box>
          <Box variant="small">powered by Amazon Transcribe</Box>
        </SpaceBetween>
        <Box variant="p">
          High-quality and affordable speech-to-text transcription for a wide
          range of use cases.
        </Box>

        <Button onClick={() => router.push("/transcriptions")}>
          Launch Transcriptions
        </Button>
      </SpaceBetween>
    </Container>
  );
}
