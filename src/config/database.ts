import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",

  url: process.env.DATABASE_URL,

  ssl: {
    rejectUnauthorized: false,
  },

  extra: {
    max: 5,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000,
  },

  entities: [
    User
  ],

  synchronize: true,
});