import { Router } from "express";
import { UserController } from "../controllers/UserController/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";


const router = Router();


/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Success
 */
router.get(
  "/",
  UserController.getUsers
);



/**
 * @swagger
 * /api/users/profile:
 *   get:
 *     summary: Get current user profile
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success
 */
router.get(
  "/profile",
  authMiddleware,
UserController.getProfile);


export default router;