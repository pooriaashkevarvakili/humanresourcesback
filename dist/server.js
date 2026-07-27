"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const app_1 = __importDefault(require("./app"));
const database_1 = require("./config/database");
const PORT = Number(process.env.PORT) || 3000;
const startServer = async () => {
    try {
        await database_1.AppDataSource.initialize();
        console.log("✅ Database connected");
        const server = app_1.default.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
        // Graceful shutdown
        process.on("SIGTERM", async () => {
            console.log("SIGTERM received. Closing server...");
            server.close(async () => {
                await database_1.AppDataSource.destroy();
                console.log("Server closed");
                process.exit(0);
            });
        });
        process.on("SIGINT", async () => {
            console.log("SIGINT received. Closing server...");
            server.close(async () => {
                await database_1.AppDataSource.destroy();
                console.log("Server closed");
                process.exit(0);
            });
        });
    }
    catch (error) {
        console.error("❌ Server startup error:", error);
        process.exit(1);
    }
};
startServer();
