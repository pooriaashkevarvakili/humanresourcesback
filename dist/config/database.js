"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "dpg-d919j8u7r5hc73cjfu60-a.oregon-postgres.render.com",
    port: 5432,
    username: "project_dashboard_gk1z_user",
    password: "PASSWORD",
    database: "project_dashboard_gk1z",
    ssl: {
        rejectUnauthorized: false,
    },
    entities: [User_1.User],
    synchronize: true,
});
