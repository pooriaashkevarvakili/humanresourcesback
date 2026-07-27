import swaggerJsdoc from "swagger-jsdoc";

export const swaggerSpec = swaggerJsdoc({

  definition: {
    openapi: "3.0.0",

    info: {
      title: "Human Resources API",
      version: "1.0.0",
      description: "HR Management API",
    },

    servers: [
      {
        url: "http://localhost:3000",
        description: "Local server",
      },
      {
        url: "https://YOUR-RENDER-URL.onrender.com",
        description: "Production server",
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },

  apis: [
    "./src/routes/*.ts",
    "./dist/routes/*.js",
  ],

});