"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const auth_router_1 = __importDefault(require("./routes/auth.router"));
const swagger_1 = require("./config/swagger");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: true,
    credentials: true,
}));
app.use((0, helmet_1.default)({
    contentSecurityPolicy: false,
}));
app.use((0, morgan_1.default)("dev"));
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.swaggerSpec));
app.use("/api/v1/auth", auth_router_1.default);
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "API is running 🚀",
        version: "v1",
    });
});
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
});
exports.default = app;
