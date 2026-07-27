"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const router = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: Authentication APIs
 */
/**
 * @swagger
 * /api/v1/auth/signup:
 *   post:
 *     summary: Create a new user account
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: pooria
 *               email:
 *                 type: string
 *                 example: pooria@gmail.com
 *               password:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request
 */
router.post("/signup", auth_controller_1.AuthController.signup);
/**
 * @swagger
 * /api/v1/auth/signin:
 *   post:
 *     summary: Login user
 *     tags:
 *       - Auth
 *
 *     requestBody:
 *       required: true
 *
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *
 *             required:
 *               - email
 *               - password
 *               - captchaToken
 *
 *             properties:
 *               email:
 *                 type: string
 *                 example: pooria@gmail.com
 *
 *               password:
 *                 type: string
 *                 example: "123456"
 *
 *               captchaToken:
 *                 type: string
 *                 example: "03AFcWeA..."
 *                 description: Google reCAPTCHA response token
 *
 *
 *     responses:
 *
 *       200:
 *         description: Login successful
 *
 *       400:
 *         description: Captcha token is missing
 *
 *       401:
 *         description: Invalid captcha or credentials
 */
router.post("/signin", auth_controller_1.AuthController.signin);
exports.default = router;
