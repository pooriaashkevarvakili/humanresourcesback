"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const database_1 = require("../../config/database");
const User_1 = require("../../entities/User");
class UserController {
    static { this.userRepository = database_1.AppDataSource.getRepository(User_1.User); }
    /**
     * Get all users
     */
    static { this.getUsers = async (req, res) => {
        try {
            const users = await this.userRepository.find({
                select: {
                    id: true,
                    username: true,
                    email: true,
                    createdAt: true,
                    updatedAt: true
                }
            });
            return res.status(200).json({
                success: true,
                data: users
            });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    }; }
    /**
     * Get logged in user profile
     */
    static { this.getProfile = async (req, res) => {
        try {
            if (!req.user) {
                return res.status(401).json({
                    success: false,
                    message: "Unauthorized"
                });
            }
            const user = await this.userRepository.findOne({
                where: {
                    id: req.user.id
                },
                select: {
                    id: true,
                    username: true,
                    email: true,
                    createdAt: true,
                    updatedAt: true
                }
            });
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: "User not found"
                });
            }
            return res.status(200).json({
                success: true,
                data: user
            });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    }; }
}
exports.UserController = UserController;
