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
        // Connect Database
        await database_1.AppDataSource.initialize();
        console.log("✅ Database connected");
        // Start Server
        const server = app_1.default.listen(PORT, "0.0.0.0", () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
        // Graceful shutdown function
        const shutdown = async () => {
            console.log("🛑 Shutdown signal received");
            server.close(async () => {
                try {
                    if (database_1.AppDataSource.isInitialized) {
                        await database_1.AppDataSource.destroy();
                        console.log("✅ Database connection closed");
                    }
                    console.log("✅ Server closed");
                    process.exit(0);
                }
                catch (error) {
                    console.error("Shutdown error:", error);
                    process.exit(1);
                }
            });
        };
        process.on("SIGTERM", shutdown);
        process.on("SIGINT", shutdown);
    }
    catch (error) {
        console.error("❌ Server startup error:", error);
        process.exit(1);
    }
};
startServer();
