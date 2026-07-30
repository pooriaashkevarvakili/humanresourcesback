"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: "postgresql://humanresources_project_user:Y2w4M1JwGVO24bODPQkdrcaDt8AO9CBO@dpg-d9lk99f10e5c73ds4g5g-a/humanresources_project",
    ssl: {
        rejectUnauthorized: false,
    },
    entities: [
        User_1.User
    ],
    synchronize: true,
    logging: true,
});
