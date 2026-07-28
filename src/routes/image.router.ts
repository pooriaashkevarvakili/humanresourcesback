import { Router } from "express";
import { getImageHumanresources } from "../controllers/portfolio.controller";

const router = Router();

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
router.get(
  "/image-humanresources",
  getImageHumanresources
);

export default router;