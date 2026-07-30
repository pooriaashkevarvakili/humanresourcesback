"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: "postgresql://USER:PASSWORD:HOST:PORT/DATABASE",
    ssl: {
        rejectUnauthorized: false,
    },
    entities: [
        User_1.User
    ],
    synchronize: true,
});
