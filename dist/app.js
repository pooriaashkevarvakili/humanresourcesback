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
const image_router_1 = __importDefault(require("./routes/image.router"));
const auth_router_1 = __importDefault(require("./routes/auth.router"));
const swagger_1 = require("./config/swagger");
const app = (0, express_1.default)();
// =======================
// Middleware
// =======================
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:5173"
    ],
    credentials: true,
}));
app.use((0, helmet_1.default)({
    contentSecurityPolicy: false,
}));
app.use((0, morgan_1.default)("dev"));
// =======================
// Rate Limit
// =======================
// const limiter = rateLimit({
//   windowMs: 60 * 1000, // 1 minute
//   limit: 3,
//   standardHeaders: true,
//   legacyHeaders: false,
//   handler: (req, res) => {
//     console.log("🔥 RATE LIMIT BLOCK:", req.originalUrl);
//     return res.status(429).json({
//       success: false,
//       message: "Too many requests",
//     });
//   },
// });
// تست کنیم اصلا میرسه یا نه
app.use("/api", (req, res, next) => {
    console.log("MIDDLEWARE HIT:", req.method, req.originalUrl);
    next();
});
// app.use("/api", limiter);
// =======================
// Swagger
// =======================
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.swaggerSpec));
app.use("/image", image_router_1.default);
// =======================
// Routes
// =======================
app.use("/api/v1/auth", auth_router_1.default);
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "API running"
    });
});
exports.default = app;
