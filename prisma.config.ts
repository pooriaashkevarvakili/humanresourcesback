import "dotenv/config";

console.log(process.env.DATABASE_URL);

import { defineConfig, env } from "prisma/config";


export default defineConfig({
  schema: "prisma/schema.prisma",

  datasource: {
    url: env("DATABASE_URL"),
  },
});