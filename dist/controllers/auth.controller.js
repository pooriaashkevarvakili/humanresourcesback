"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_service_1 = require("../services/auth.service");
const captcha_service_1 = require("../services/captcha.service");
class AuthController {
    static { this.signup = async (req, res) => {
        try {
            const { username, email, password } = req.body;
            const user = await auth_service_1.AuthService.signup(username, email, password);
            return res.status(201).json({
                success: true,
                message: "User created successfully",
                user
            });
        }
        catch (error) {
            return res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }; }
    static { this.signin = async (req, res) => {
        try {
            const { email, password, captchaToken } = req.body;
            // Verify captcha first
            await captcha_service_1.CaptchaService.verify(captchaToken);
            const result = await auth_service_1.AuthService.signin(email, password);
            res.cookie("accessToken", result.accessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                maxAge: 15 * 60 * 1000,
            });
            return res.status(200).json({
                success: true,
                message: "Login successful",
                user: result.user
            });
        }
        catch (error) {
            return res.status(401).json({
                success: false,
                message: error.message
            });
        }
    }; }
}
exports.AuthController = AuthController;
