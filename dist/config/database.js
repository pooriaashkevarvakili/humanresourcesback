"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: "postgresql://project_dashboard_gk1z_user:password@dpg-xxxxxxxx-a.oregon-postgres.render.com:5432/project_dashboard_gk1z",
    ssl: {
        rejectUnauthorized: false,
    },
    extra: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
    entities: [
        User_1.User
    ],
    synchronize: true,
});
