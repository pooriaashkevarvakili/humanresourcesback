"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = require("../config/prisma");
class AuthService {
    static async signup(username, email, password) {
        const existUser = await prisma_1.prisma.user.findUnique({
            where: {
                email
            }
        });
        if (existUser) {
            throw new Error("Email already exists");
        }
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const user = await prisma_1.prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword
            }
        });
        return {
            id: user.id,
            username: user.username,
            email: user.email
        };
    }
    static async signin(email, password) {
        const user = await prisma_1.prisma.user.findUnique({
            where: {
                email
            }
        });
        if (!user) {
            throw new Error("Invalid email or password");
        }
        const checkPassword = await bcrypt_1.default.compare(password, user.password);
        if (!checkPassword) {
            throw new Error("Invalid email or password");
        }
        const accessToken = jsonwebtoken_1.default.sign({
            id: user.id,
            email: user.email
        }, process.env.JWT_SECRET, {
            expiresIn: "1d"
        });
        return {
            accessToken,
            user: {
                id: user.id,
                username: user.username,
                email: user.email
            }
        };
    }
}
exports.AuthService = AuthService;
