"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const prisma_1 = require("../../config/prisma");
class UserController {
    /**
     * Get all users
     */
    static getUsers = async (req, res) => {
        try {
            const users = await prisma_1.prisma.user.findMany({
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
    };
    /**
     * Get logged in user profile
     */
    static getProfile = async (req, res) => {
        try {
            if (!req.user) {
                return res.status(401).json({
                    success: false,
                    message: "Unauthorized"
                });
            }
            const user = await prisma_1.prisma.user.findUnique({
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
    };
}
exports.UserController = UserController;
