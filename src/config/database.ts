import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",
    url: "postgresql://project_dashboard_gk1z_user:61hfaDfadNapDaIL9EdMP9ii1i9nMf30@dpg-d919j8u7r5hc73cjfu60-a.oregon-postgres.render.com:5432/project_dashboard_gk1z",

  port: 5432,
  username: "project_dashboard_gk1z_user",
  password: "PASSWORD",
  database: "project_dashboard_gk1z",
  ssl: {
    rejectUnauthorized: false,
  },
  entities: [User],
  synchronize: true,
  logging: true,
});