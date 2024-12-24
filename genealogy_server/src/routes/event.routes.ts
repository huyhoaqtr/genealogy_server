/**
 * Author: Jinn
 * Date: 2024-10-31
 */

import { Router } from "express";
import { eventController } from "../controllers";
import authenticateJWT from "../middleware/authenticate-jwt";
import permission from "~/middleware/permission";
import { Role } from "~/utils/type";

const router = Router();

router.use(authenticateJWT);

router
  /**
   *  @swagger
   *  /event/create-event:
   *    post:
   *      tags: [Event]
   *      summary: Create event
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
   *                startDate:
   *                  type: string
   *                  format: date
   *                startTime:
   *                  type: string
   *      responses:
   *        200:
   *          description: OK
   */
  .post(
    "/create-event",
    permission([Role.LEADER, Role.ADMIN]),
    eventController.createEvent
  )

  /**
   *  @swagger
   *  /event/update-event/{id}:
   *    put:
   *      tags: [Event]
   *      summary: Update event
   *      parameters:
   *        - in: path
   *          name: id
   *          required: true
   *          schema:
   *            type: string
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
   *                startDate:
   *                  type: string
   *                  format: date
   *                startTime:
   *                  type: string
   *      responses:
   *        200:
   *          description: OK
   */
  .put(
    "/update-event/:id",
    permission([Role.LEADER, Role.ADMIN]),
    eventController.updateEvent
  )

  /**
   *  @swagger
   *  /event/get-event/{id}:
   *    get:
   *      tags: [Event]
   *      summary: Get event
   *      parameters:
   *        - in: path
   *          name: id
   *          required: true
   *          schema:
   *            type: string
   *      responses:
   *        200:
   *          description: OK
   */
  .get("/get-event/:id", eventController.getEvent)

  /**
   *  @swagger
   *  /event/get-all-event:
   *    get:
   *      tags: [Event]
   *      summary: Get all event
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
   *        - in: query
   *          name: startDate
   *          description: Start date of filter event
   *          schema:
   *            type: string
   *            format: date
   *        - in: query
   *          name: endDate
   *          description: End date of filter event
   *          schema:
   *            type: string
   *            format: date
   *      responses:
   *        200:
   *          description: OK
   */
  .get("/get-all-event", eventController.getAllEvent)

  /**
   *  @swagger
   *  /event/delete-event/{id}:
   *    delete:
   *      tags: [Event]
   *      summary: Delete event
   *      parameters:
   *        - in: path
   *          name: id
   *          required: true
   *          schema:
   *            type: string
   *      responses:
   *        200:
   *          description: OK
   */
  .delete(
    "/delete-event/:id",
    permission([Role.LEADER, Role.ADMIN]),
    eventController.deleteEvent
  );
export default router;
