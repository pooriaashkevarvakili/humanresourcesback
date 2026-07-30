"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: "postgresql://project_dashboard_gk1z_user:61hfaDfadNapDaIL9EdMP9ii1i9nMf30@dpg-d919j8u7r5hc73cjfu60-a/project_dashboard_gk1z",
    //username: "postgres",
    //password: "13711373n",
    database: "humanresources",
    ssl: {
        rejectUnauthorized: false,
    },
    entities: [
        User_1.User
    ],
    synchronize: true,
    // logging: true,
});
