"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const portfolio_controller_1 = require("../controllers/portfolio.controller");
const router = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   name: Images
 *   description: Image APIs
 */
/**
 * @swagger
 * /api/v1/image/image-humanresources:
 *   get:
 *     summary: Get human resources image
 *     tags: [Images]
 *     responses:
 *       200:
 *         description: Image file
 *         content:
 *           image/png:
 *             schema:
 *               type: string
 *               format: binary
 *       404:
 *         description: Image not found
 */
router.get("/image-humanresources", portfolio_controller_1.getImageHumanresources);
exports.default = router;
