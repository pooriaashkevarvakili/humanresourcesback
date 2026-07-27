import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",
     //  url:'postgresql://project_dashboard_gk1z_user:61hfaDfadNapDaIL9EdMP9ii1i9nMf30@dpg-d919j8u7r5hc73cjfu60-a/project_dashboard_gk1z',

  host: "localhost",
  port: 5432,

  username: "postgres",
  password: "13711373n",
  database: "humanresources",

  entities: [User],

  synchronize: false,
  logging: true,
});