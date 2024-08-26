import { TranslateSupportedLanguages } from "@/app/lib/constants";
import { Predictions } from "@aws-amplify/predictions";

import {
  Grid,
  Textarea,
  Select,
  SpaceBetween,
  FormField,
  StatusIndicator,
  CopyToClipboard,
} from "@cloudscape-design/components";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

type LanguageState = {
  label: string;
  value: string;
};

const defaultSourceLanguage: LanguageState = {
  label: "Detect Language",
  value: "auto",
};

const defaultTargetLanguage: LanguageState = {
  label: "Spanish",
  value: "es",
};

export default function TranslateText() {
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState<LanguageState>(
    defaultSourceLanguage
  );
  const [targetLanguage, setTargetLanguage] = useState<LanguageState>(
    defaultTargetLanguage
  );
  const [isTranslating, setIsTranslating] = useState(false);
  const [debouncedText] = useDebounce(sourceText, 1000);

  useEffect(() => {
    const translateText = async () => {
      try {
        const result = await Predictions.convert({
          translateText: {
            source: {
              text: sourceText,
              language: sourceLanguage.value,
            },
            targetLanguage: targetLanguage.value,
          },
        });
        setTranslatedText(result.text);
      } finally {
        setIsTranslating(false);
      }
    };

    if (debouncedText) {
      setIsTranslating(true);
      translateText();
    }
  }, [debouncedText, sourceLanguage, targetLanguage]);

  return (
    <Grid
      gridDefinition={[
        { colspan: { default: 6 } },
        { colspan: { default: 6 } },
      ]}
    >
      <div>
        <SpaceBetween size="l">
          <FormField
            stretch
            description="The language code for the language of the source text."
            label={<span>Source Language</span>}
          >
            <Select
              selectedOption={sourceLanguage}
              filteringType="auto"
              onChange={({ detail }) => {
                detail.selectedOption.value && detail.selectedOption.label
                  ? setSourceLanguage({
                      label: detail.selectedOption.label,
                      value: detail.selectedOption.value,
                    })
                  : setSourceLanguage(defaultSourceLanguage);
              }}
              options={[
                {
                  label: "Detect Language",
                  value: "auto",
                },
                ...TranslateSupportedLanguages,
              ]}
            />
          </FormField>
          <FormField
            stretch
            description="Depending on your character set, the length of the text may be fewer than 10,000 characters."
            label={<span>Text to translate</span>}
          >
            <Textarea
              onChange={({ detail }) => setSourceText(detail.value)}
              value={sourceText}
              autoFocus
              placeholder="Type to translate."
              rows={20}
            />
          </FormField>
        </SpaceBetween>
      </div>
      <div>
        <SpaceBetween size="l">
          <FormField
            stretch
            description="The language code requested for the language of the target text."
            label={<span>Target Language</span>}
          >
            <Select
              selectedOption={targetLanguage}
              filteringType="auto"
              onChange={({ detail }) =>
                detail.selectedOption.value && detail.selectedOption.label
                  ? setTargetLanguage({
                      label: detail.selectedOption.label,
                      value: detail.selectedOption.value,
                    })
                  : setTargetLanguage(defaultTargetLanguage)
              }
              options={[...TranslateSupportedLanguages]}
            />
          </FormField>
          <FormField
            stretch
            description="The translated text in the selected target language."
            label={<span>Translated Text</span>}
          >
            <Textarea
              onChange={({ detail }) => setTranslatedText(detail.value)}
              value={translatedText}
              readOnly
              rows={20}
            />
          </FormField>
          {isTranslating && (
            <StatusIndicator type="loading">
              Translating text...
            </StatusIndicator>
          )}

          <CopyToClipboard
            copyButtonText="Copy to clipboard"
            copyErrorText="Translated text failed to copy"
            copySuccessText="Translated text copied"
            textToCopy={translatedText}
          />
        </SpaceBetween>
      </div>
    </Grid>
  );
}
