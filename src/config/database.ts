import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "dpg-d919j8u7r5hc73cjfu60-a.oregon-postgres.render.com",
  port: 5432,
  username: "project_dashboard_gk1z_user",
  password: "PASSWORD",
  database: "project_dashboard_gk1z",
  ssl: {
    rejectUnauthorized: false,
  },
  entities: [User],
  synchronize: true,
});