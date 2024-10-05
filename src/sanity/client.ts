import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "3n9xuhjh",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
