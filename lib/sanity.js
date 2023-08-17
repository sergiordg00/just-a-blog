import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "6atlxo30",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});