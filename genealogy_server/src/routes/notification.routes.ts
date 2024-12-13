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
import permission from "~/middleware/permission";
import { Role } from "~/utils/type";
import notificationController from "~/controllers/notification.controller";

const router = Router();

// router.use(authenticateJWT);

router
  /**
   *  @swagger
   *  /notification/create-notification:
   *    post:
   *      tags: [Notification]
   *      summary: Create notification
   *      requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                title:
   *                  type: string
   *                desc:
   *                  type: string
   *                type:
   *                  type: string
   *                screenId: 
   *                   type: string
   *      responses:
   *        200:
   *          description: OK
   */
  .post(
    "/create-notification",
    notificationController.createNotification
  )

  /**
   *  @swagger
   *  /notification/get-all-notification-by-user:
   *    get:
   *      tags: [Notification]
   *      summary: Get all notification by user
   *      parameters:
   *        - in: query
   *          name: page
   *          required: true
   *          description: Page number for pagination
   *          schema:
   *            type: integer
   *            example: 1
   *        - in: query
   *          name: limit
   *          required: true
   *          description: Number of items per page
   *          schema:
   *            type: integer
   *            example: 24
   *      responses:
   *        200:
   *          description: OK
   */
  .get(
    "/get-all-notification-by-user",
    authenticateJWT,
    notificationController.getAllNotificationByUser
  )

   /**
   *  @swagger
   *  /notification/update-is-read/${id}:
   *    put:
   *      tags: [Notification]
   *      summary: Get all notification by user
   *      parameters:
   *        - in: path
   *          name: id
   *          required: true
   *          description: Notification id
   *          schema:
   *            type: string

   *      responses:
   *        200:
   *          description: OK
   */
   .put(
    "/update-is-read/:id",
    authenticateJWT,
    notificationController.updateIsReadNotification
  )

  

export default router;
