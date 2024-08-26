import { defineBackend } from "@aws-amplify/backend";
import { PolicyStatement } from "aws-cdk-lib/aws-iam";
import { Stack } from "aws-cdk-lib";

import { auth } from "./auth/resource.js";
// import { data } from "./data/resource.js";

const backend = defineBackend({
  auth,
  // data,
});

// apply the policy giving access to translate text to the authenticated roles
backend.auth.resources.authenticatedUserIamRole.addToPrincipalPolicy(
  new PolicyStatement({
    actions: ["translate:TranslateText", "comprehend:DetectDominantLanguage"],
    resources: ["*"],
  })
);
backend.addOutput({
  custom: {
    Predictions: {
      convert: {
        translateText: {
          defaults: {
            sourceLanguage: "auto",
            targetLanguage: "es",
          },
          proxy: false,
          region: Stack.of(backend.auth.resources.authenticatedUserIamRole)
            .region,
        },
      },
    },
  },
});
