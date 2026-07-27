import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",

  datasource: {
    url: "postgresql://project_dashboard_gk1z_user:PASSWORD@HOST:5432/project_dashboard_gk1z",
  },
});