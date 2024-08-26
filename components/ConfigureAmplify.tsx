// components/ConfigureAmplify.tsx
"use client";

import { Amplify } from "aws-amplify";

import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs, { ssr: true });

const currentConfig = Amplify.getConfig();
Amplify.configure({
  ...currentConfig,
  Predictions: outputs.custom.Predictions,
});

export default function ConfigureAmplifyClientSide() {
  return null;
}
