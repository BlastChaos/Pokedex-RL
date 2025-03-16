import "dotenv/config";
import { defineConfig } from "drizzle-kit";
import { config } from "./src/config";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/database/model",
  dialect: "postgresql",
  dbCredentials: {
    url: config.databaseUrl,
  },
});
