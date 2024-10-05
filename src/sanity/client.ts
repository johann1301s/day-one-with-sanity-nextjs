import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "z8gldu0c",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
