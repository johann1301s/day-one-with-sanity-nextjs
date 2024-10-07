import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "5mo4u4lk",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
