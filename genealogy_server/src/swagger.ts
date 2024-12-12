/**
 * Author: Jinn
 * Date: 2024-10-24
 */


import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import express from "express";
import envConfig from "~/configs/environment";

const app = express();

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Genealogy App API Documentation",
      version: "1.0.0",
      description: "API documentation for your project",
    },
    servers: [
      {
        url: `${envConfig.HOST}:${envConfig.PORT}/api`,
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          description: "Please enter your JWT token",
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },

  apis: ["./src/routes/*.ts"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default app;
