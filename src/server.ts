import "reflect-metadata";
import "dotenv/config";

import app from "./app";
import { AppDataSource } from "./config/database";


const PORT = Number(process.env.PORT) || 3000;


const startServer = async () => {

  try {

    await AppDataSource.initialize();

    console.log("✅ Database connected");


    const server = app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });



    // Graceful shutdown
    process.on("SIGTERM", async () => {

      console.log("SIGTERM received. Closing server...");


      server.close(async () => {

        await AppDataSource.destroy();

        console.log("Server closed");

        process.exit(0);

      });

    });



    process.on("SIGINT", async () => {

      console.log("SIGINT received. Closing server...");


      server.close(async () => {

        await AppDataSource.destroy();

        console.log("Server closed");

        process.exit(0);

      });

    });



  } catch (error) {

    console.error("❌ Server startup error:", error);

    process.exit(1);

  }

};


startServer();