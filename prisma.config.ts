import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: "postgresql://project_dashboard_gk1z_user:61hfaDfadNapDaIL9EdMP9ii1i9nMf30@dpg-d919j8u7r5hc73cjfu60-a.oregon-postgres.render.com:5432/project_dashboard_gk1z",
  },
});