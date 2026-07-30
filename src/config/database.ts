import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",

  url: "postgresql://USER:PASSWORD@HOST:5432/DATABASE",

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