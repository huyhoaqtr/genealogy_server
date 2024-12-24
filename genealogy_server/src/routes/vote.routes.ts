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
   *      summary: Create vote session
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
   *  /vote/update-vote-session/{id}:
   *    put:
   *      tags: [Tribe Vote]
   *      summary: Update vote session by id
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
   *      responses:
   *        200:
   *          description: OK
   */
  .put(
    "/update-vote-session/:id",
    permission([Role.LEADER, Role.ADMIN]),
    voteController.updateVoteSession
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
  .get("/get-vote-session", voteController.getVoteSession)

  /**
   *  @swagger
   *  /vote/get-vote-session-by-id/{id}:
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
  .get("/get-vote-session-by-id/:id", voteController.getVoteSessionById)

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
  .post("/cast-vote", voteController.castVote)

  /**
   *  @swagger
   *  /vote/delete-vote-session-by-id/{id}:
   *    delete:
   *      tags: [Tribe Vote]
   *      summary: delete vote by
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
    "/delete-vote-session-by-id/:id",
    voteController.deleteVoteSessionById
  )

  /**
   *  @swagger
   *  /vote/add-option-to-vote/{id}:
   *    put:
   *      tags: [Tribe Vote]
   *      summary: add option to vote
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
   *                optionString:
   *                  type: string
   *      responses:
   *        200:
   *          description: OK
   */
  .put(
    "/add-option-to-vote/:id",
    voteController.addOptionToVote
  );
export default router;
