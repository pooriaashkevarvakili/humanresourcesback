import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import imageRoutes from "./routes/image.router";
import authRoutes from "./routes/auth.router";
import { swaggerSpec } from "./config/swagger";
import {getImageHumanresources} from './controllers/portfolio.controller'
import path from "path";

const app = express();




app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:5173"
    ],
    credentials: true,
  })
);

app.use(helmet({
  contentSecurityPolicy: false,
}));

app.use(morgan("dev"));



const limiter = rateLimit({

  windowMs: 60 * 1000,
  limit: 3,

  standardHeaders: true,
  legacyHeaders: false,

  handler: (req, res) => {

    console.log("🔥 RATE LIMIT BLOCK:", req.originalUrl);

    return res.status(429).json({
      success: false,
      message: "Too many requests",
    });

  },

});


app.use("/api", (req, res, next) => {

  console.log(
    "MIDDLEWARE HIT:",
    req.method,
    req.originalUrl
  );

  next();

});


 app.use("/api", limiter);





app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);
app.use(
  "/api/v1/image",
  imageRoutes
);




app.use(
  "/api/v1/auth",
  authRoutes
);



app.get("/", (req,res)=>{

  res.json({
    success:true,
    message:"API running"
  });

});


export default app;