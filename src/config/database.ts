import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",

url:"postgresql://project_dashboard_gk1z_user:password@dpg-xxxxxxxx-a.oregon-postgres.render.com:5432/project_dashboard_gk1z",
  ssl: {
    rejectUnauthorized: false,
  },

  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },

  entities: [
    User
  ],

  synchronize: true,
});