"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const database_1 = require("../config/database");
const User_1 = require("../entities/User");
class AuthService {
    static { this.userRepository = database_1.AppDataSource.getRepository(User_1.User); }
    static async signup(username, email, password) {
        const existUser = await this.userRepository.findOne({
            where: {
                email,
            },
        });
        if (existUser) {
            throw new Error("Email already exists");
        }
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const user = this.userRepository.create({
            username,
            email,
            password: hashedPassword,
        });
        await this.userRepository.save(user);
        return {
            id: user.id,
            username: user.username,
            email: user.email,
        };
    }
    static async signin(email, password) {
        const user = await this.userRepository.findOne({
            where: {
                email,
            },
        });
        if (!user) {
            throw new Error("Invalid email or password");
        }
        const checkPassword = await bcrypt_1.default.compare(password, user.password);
        if (!checkPassword) {
            throw new Error("Invalid email or password");
        }
        const JWT_SECRET = "change-this-to-a-strong-secret";
        const accessToken = jsonwebtoken_1.default.sign({
            id: user.id,
            email: user.email,
        }, JWT_SECRET, {
            expiresIn: "1d",
        });
        return {
            accessToken,
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
            },
        };
    }
}
exports.AuthService = AuthService;
