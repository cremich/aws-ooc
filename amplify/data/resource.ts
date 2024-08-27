import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a
  .schema({
    TranscriptionJob: a
      .model({
        TranscriptionJobName: a.string().required(),
        TranscriptionJobStatus: a.string(),
        LanguageCode: a.string(),
        CreationTime: a.string(),
        CompletionTime: a.string(),
      })
      .identifier(["TranscriptionJobName"]),
  })
  .authorization((allow) => [allow.authenticated()]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  name: "aws-ooc",
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});
