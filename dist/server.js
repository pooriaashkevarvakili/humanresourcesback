"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = __importDefault(require("./app"));
const PORT = Number(process.env.PORT) || 3000;
const server = app_1.default.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
// Graceful shutdown
process.on("SIGTERM", () => {
    console.log("SIGTERM received. Closing server...");
    server.close(() => {
        console.log("Server closed");
        process.exit(0);
    });
});
process.on("SIGINT", () => {
    console.log("SIGINT received. Closing server...");
    server.close(() => {
        console.log("Server closed");
        process.exit(0);
    });
});
