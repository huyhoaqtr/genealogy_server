/**
 * Author: Jinn
 * Date: 2024-10-31
 */

import { Router } from "express";
import authenticateJWT from "../middleware/authenticate-jwt";
import { upload } from "~/middleware/multer";
import feedController from "~/controllers/feed.controller";

const router = Router();

router.use(authenticateJWT);

router
  /**
   *  @swagger
   *  /feed/create-feed:
   *    post:
   *      tags: [Feed]
   *      summary: Create feed
   *      requestBody:
   *        required: true
   *        content:
   *          multipart/form-data:
   *            schema:
   *              type: object
   *              properties:
   *                content:
   *                  type: string
   *                images:
   *                  type: array
   *                  items:
   *                    type: string
   *                    format: binary
   *      responses:
   *        200:
   *          description: OK
   */
  .post("/create-feed", upload.array("images"), feedController.createNewFeed)

  /**
   *  @swagger
   *  /feed/create-comment:
   *    post:
   *      tags: [Feed]
   *      summary: Create comment
   *      requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                content:
   *                  type: string
   *                parentCommentId:
   *                  type: string
   *                feedId:
   *                  type: string
   *      responses:
   *        200:
   *          description: OK
   */
  .post("/create-comment", feedController.commentFeed)

  /**
   *  @swagger
   *  /feed/delete-feed/{id}:
   *    delete:
   *      tags: [Feed]
   *      summary: Delete feed
   *      parameters:
   *        - in: path
   *          name: id
   *          required: true
   *          description: Feed id
   *          schema:
   *            type: string
   *      responses:
   *        200:
   *          description: OK
   */
  .delete("/delete-feed/:id", feedController.deleteFeed)

  /**
   *  @swagger
   *  /feed/update-feed/{id}:
   *    put:
   *      tags: [Feed]
   *      summary: Create feed
   *      requestBody:
   *        required: true
   *        content:
   *          multipart/form-data:
   *            schema:
   *              type: object
   *              properties:
   *                content:
   *                  type: string
   *                images:
   *                  type: array
   *                  items:
   *                    type: string
   *                    format: binary
   *      responses:
   *        200:
   *          description: OK
   */
  .put("/update-feed/:id", upload.array("images"), feedController.updateFeed)

  /**
   *  @swagger
   *  /feed/toggle-like-feed:
   *    put:
   *      tags: [Feed]
   *      summary: Toggle like feed
   *      requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                feedId:
   *                  type: string
   *      responses:
   *        200:
   *          description: OK
   */
  .put("/toggle-like-feed", feedController.toggleLikeFeed)

  /**
   *  @swagger
   *  /feed/get-feed/{id}:
   *    get:
   *      tags: [Feed]
   *      summary: Get feed
   *      parameters:
   *        - in: path
   *          name: id
   *          required: true
   *          description: Feed id
   *          schema:
   *            type: string
   *      responses:
   *        200:
   *          description: OK
   */
  .get("/get-feed/:id", feedController.getFeed)

  /**
   *  @swagger
   *  /feed/create-new-comment:
   *    post:
   *      tags: [Feed]
   *      summary: Create new comment
   *      requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                feedId:
   *                  type: string
   *                parentCommentId:
   *                  type: string
   *                content:
   *                  type: string
   *      responses:
   *        200:
   *          description: OK
   */
  .post("/create-new-comment", feedController.commentFeed)

  /**
   *  @swagger
   *  /feed/toggle-like-comment:
   *    put:
   *      tags: [Feed]
   *      summary: Toggle like comment
   *      requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                commentId:
   *                  type: string
   *      responses:
   *        200:
   *          description: OK
   */
  .put("/toggle-like-comment", feedController.toggleLikeComment)

  /**
   *  @swagger
   *  /feed/get-all-feed:
   *    get:
   *      tags: [Feed]
   *      summary: Toggle like comment
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
  .get("/get-all-feed", feedController.getAllFeed)

  /**
   *  @swagger
   *  /feed/get-all-feed-by-user:
   *    get:
   *      tags: [Feed]
   *      summary: Toggle like comment
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
  .get("/get-all-feed-by-user", feedController.getAllFeedByUser)

  /**
   *  @swagger
   *  /feed/get-all-comment:
   *    get:
   *      tags: [Feed]
   *      summary: Get all comment by feed
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
   *          name: feedId
   *          required: true
   *          description: feed id
   *          schema:
   *            type: string
   *      responses:
   *        200:
   *          description: OK
   */
  .get("/get-all-comment", feedController.getAllComment);

export default router;
