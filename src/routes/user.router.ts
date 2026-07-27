import { Router } from "express";

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
router.get("/", (req, res) => {
  res.json([{ id: 1, name: "Pooria" }]);
});

export default router;