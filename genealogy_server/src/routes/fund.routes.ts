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
import tribeFundController from "~/controllers/tribefund.controller";
import permission from "~/middleware/permission";
import { Role } from "~/utils/type";

const router = Router();

router.use(authenticateJWT);

router
  /**
   *  @swagger
   *  /fund/create-fund:
   *    post:
   *      tags: [Tribe Fund]
   *      summary: Create fund
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
   *                amount:
   *                  type: string
   *      responses:
   *        200:
   *          description: OK
   */
  .post(
    "/create-fund",
    authenticateJWT,
    permission([Role.LEADER, Role.ADMIN]),
    tribeFundController.createTribeFund
  )

  /**
   *  @swagger
   *  /fund/create-transaction:
   *    post:
   *      tags: [Tribe Fund]
   *      summary: Create transaction
   *      requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                fundId:
   *                  type: string
   *                type:
   *                  type: string
   *                desc:
   *                  type: string
   *                amount:
   *                  type: string
   *      responses:
   *        200:
   *          description: OK
   */
  .post(
    "/create-transaction",
    authenticateJWT,
    permission([Role.LEADER, Role.ADMIN]),
    tribeFundController.createFundTransaction
  )
 
   /**
   *  @swagger
   *  /fund/get-all-fund:
   *    get:
   *      tags: [Tribe Fund]
   *      summary: Get all fund
   *      responses:
   *        200:
   *          description: OK
   */
   .get(
    "/get-all-fund",
    authenticateJWT,
    permission([Role.LEADER, Role.ADMIN]),
    tribeFundController.getAllTribeFund
  )

  /**
   *  @swagger
   *  /fund/get-fund/{id}:
   *    get:
   *      tags: [Tribe Fund]
   *      summary: Get fund
   *      parameters:
   *        - in: path
   *          name: id
   *          required: true
   *          schema:
   *            type: string
   *            example: 1
   *      responses:
   *        200:
   *          description: OK
   */
  .get(
    "/get-fund/:id",
    authenticateJWT,
    permission([Role.LEADER, Role.ADMIN]),
    tribeFundController.getTribeFund
  )
  /**
   *  @swagger
   *  /fund/delete-fund/{id}:
   *    delete:
   *      tags: [Tribe Fund]
   *      summary: Delete fund
   *      parameters:
   *        - in: path
   *          name: id
   *          required: true
   *          schema:
   *            type: integer
   *            example: 1
   *      responses:
   *        200:
   *          description: OK
   */
  .delete(
    "/delete-fund/:id",
    tribeFundController.deleteTribeFund
  )

export default router;
