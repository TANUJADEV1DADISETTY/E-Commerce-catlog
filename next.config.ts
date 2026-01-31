import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",

  migrate: {
    databaseUrl: process.env.DATABASE_URL,
  },

  migrations: {
    seed: "node prisma/seed.js",
  },
});
