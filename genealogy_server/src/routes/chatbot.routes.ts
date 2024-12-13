/**
 * Author: Jinn
 * Date: 2024-10-31
 */

/**
 * Author: Jinn
 * Date: 2024-10-31
 */

import { Router } from "express";
import authenticateJWT from "../middleware/authenticate-jwt";
import chatbotController from "~/controllers/chatbot.controller";

const router = Router();

router.use(authenticateJWT);

router
  /**
   *  @swagger
   *  /chatbot/query:
   *    post:
   *      tags: [Chat bot]
   *      summary: Query chat bot
   *      requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                prompt:
   *                  type: string
   *      responses:
   *        200:
   *          description: OK
   */
  .post(
    "/query",
    chatbotController.query
  )


export default router;
