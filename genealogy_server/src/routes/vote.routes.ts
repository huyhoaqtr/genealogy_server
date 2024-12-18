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
import voteController from "~/controllers/vote.controller";

const router = Router();

router.use(authenticateJWT);

router
  /**
   *  @swagger
   *  /vote/create-vote-session:
   *    post:
   *      tags: [Tribe Vote]
   *      summary: Create vote
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
   *                options:
   *                  type: string
   *      responses:
   *        200:
   *          description: OK
   */
  .post(
    "/create-vote-session",
    permission([Role.LEADER, Role.ADMIN]),
    voteController.createVoteSession
  )

  /**
   *  @swagger
   *  /vote/get-vote-session:
   *    get:
   *      tags: [Tribe Vote]
   *      summary: get all vote by tribe
   *      responses:
   *        200:
   *          description: OK
   */
  .get(
    "/get-vote-session",
    voteController.getVoteSession
  )

  /**
   *  @swagger
   *  /vote/get-vote-session-by-id/:id:
   *    get:
   *      tags: [Tribe Vote]
   *      summary: get vote by 
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
  .get(
    "/get-vote-session-by-id/:id",
    voteController.getVoteSessionById
  )

  /**
   *  @swagger
   *  /vote/cast-vote:
   *    post:
   *      tags: [Tribe Vote]
   *      summary: get all vote by tribe
   *      requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                voteSessionId:
   *                  type: string
   *                oldOptionId:
   *                  type: string
   *                newOptionId:
   *                  type: string
   *      responses:
   *        200:
   *          description: OK
   */
  .post(
    "/cast-vote",
    voteController.castVote
  )
export default router;
