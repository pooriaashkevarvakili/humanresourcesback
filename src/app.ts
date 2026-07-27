import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import userRoutes from "./routes/user.router";

import { swaggerSpec } from "./config/swagger";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running 🚀",
  });
});

export default app;