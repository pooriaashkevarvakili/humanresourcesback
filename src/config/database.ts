import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",

  url: "postgresql://project_dashboard_gk1z_user:xxxxx@dpg-d919j8u7r5hc73cjfu60-a.oregon-postgres.render.com:5432/project_dashboard_gk1z",
  //username: "postgres",
  //password: "13711373n",
  database: "humanresources",
  ssl: {
    rejectUnauthorized: false,
  },

  entities: [User],

  synchronize: true,

  // logging: true,
});
