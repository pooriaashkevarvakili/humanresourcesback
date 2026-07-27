import "reflect-metadata";
import "dotenv/config";

import app from "./app";
import { AppDataSource } from "./config/database";


const PORT = Number(process.env.PORT) || 3000;


const startServer = async () => {

  try {

    // Connect Database
    await AppDataSource.initialize();

    console.log("✅ Database connected");


    // Start Server
    const server = app.listen(PORT, "0.0.0.0", () => {

      console.log(`🚀 Server running on port ${PORT}`);

    });



    // Graceful shutdown function
    const shutdown = async () => {

      console.log("🛑 Shutdown signal received");


      server.close(async () => {

        try {

          if (AppDataSource.isInitialized) {

            await AppDataSource.destroy();

            console.log("✅ Database connection closed");

          }


          console.log("✅ Server closed");

          process.exit(0);


        } catch (error) {

          console.error("Shutdown error:", error);

          process.exit(1);

        }

      });

    };



    process.on("SIGTERM", shutdown);

    process.on("SIGINT", shutdown);



  } catch (error) {

    console.error("❌ Server startup error:", error);

    process.exit(1);

  }

};


startServer();