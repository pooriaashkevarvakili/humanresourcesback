import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.router";
import authRoutes from "./routes/auth.router";

import { swaggerSpec } from "./config/swagger";


const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://dashboard-project-front-lgddw3jqf-pooriavakilis-projects.vercel.app",
    ],
    
    credentials: true,
  })
);

app.use(helmet());

app.use(morgan("dev"));




app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);




app.use(
  "/api/v1/users",
  userRoutes
);


app.use(
  "/api/v1/auth",
  authRoutes
);




app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is running 🚀",
    version: "v1",
  });
});



app.use((req, res) => {

  res.status(404).json({
    success:false,
    message:"Route not found"
  });

});




app.use(
  (
    err:Error,
    req:express.Request,
    res:express.Response,
    next:express.NextFunction
  )=>{

    console.error(err);

    res.status(500).json({
      success:false,
      message:err.message || "Internal Server Error"
    });

  }
);


export default app;