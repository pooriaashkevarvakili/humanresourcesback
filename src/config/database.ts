import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",

  url: process.env.DATABASE_URL,

  ssl: true,

  entities: [
    User
  ],

  synchronize: true,

  logging: true,
});