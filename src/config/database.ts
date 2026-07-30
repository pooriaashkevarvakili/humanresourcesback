import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",

  url: "postgresql://humanresources_project_user:Y2w4M1JwGVO24bODPQkdrcaDt8AO9CBO@dpg-d9lk99f10e5c73ds4g5g-a/humanresources_project",

  ssl: {
    rejectUnauthorized: false,
  },

  entities: [
    User
  ],

  synchronize: true,

  logging: true,
});