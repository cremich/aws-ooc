import {
  Container,
  SpaceBetween,
  Box,
  Button,
  Link,
} from "@cloudscape-design/components";
import { useRouter } from "next/navigation";

export default function Translations() {
  const router = useRouter();
  return (
    <Container
      media={{
        content: <img src="/images/Translate.svg" alt="placeholder" />,
        position: "side",
        width: "25%",
      }}
    >
      <SpaceBetween direction="vertical" size="s">
        <SpaceBetween direction="vertical" size="xxs">
          <Box variant="h2">
            <Link fontSize="heading-m" href="/translations">
              Translations
            </Link>
          </Box>
          <Box variant="small">powered by Amazon Translate</Box>
        </SpaceBetween>
        <Box variant="p">
          Fast, affordable, and quality translations for your multilingual
          needs.
        </Box>

        <Button onClick={() => router.push("/translations")}>
          Launch Translations
        </Button>
      </SpaceBetween>
    </Container>
  );
}
