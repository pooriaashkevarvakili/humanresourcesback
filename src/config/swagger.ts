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
        url: "https://humanresourcesback.onrender.com",
        description: "Production",
      },
      {
        url: "http://localhost:3000",
        description: "Local",
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
    "./src/routes/**/*.ts",
    "./dist/routes/**/*.js",
  ],

});