/**
 * Author: Jinn
 * Date: 2024-10-30
 */

import { Router } from "express";
import { tribeController } from "../controllers";
import authenticateJWT from "../middleware/authenticate-jwt";
import permission from "../middleware/permission";
import { Role } from "../utils/type";
import { upload } from "~/middleware/multer";

const router = Router();

router.use(authenticateJWT);

router
  /**
   *  @swagger
   *  /tribe/get-tribe/{id}:
   *    get:
   *      tags: [Tribe]
   *      summary: Get all tribes
   *      parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: The user ID
   *      responses:
   *        200:
   *          description: OK
   */
  .get("/get-tribe/:id", authenticateJWT, tribeController.getTribe)

  /**
   *  @swagger
   *  /tribe/get-my-tribe:
   *    get:
   *      tags: [Tribe]
   *      summary: Get my tribes
   *      responses:
   *        200:
   *          description: OK
   */
  .get("/get-my-tribe", authenticateJWT, tribeController.getMyTribe)

  /**
   *  @swagger
   *  /tribe/update-tribe:
   *    put:
   *      tags: [Tribe]
   *      summary: Update tribe info
   *      requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                name:
   *                    type: string
   *                address:
   *                    type: string
   *                description:
   *                    type: string
   *      responses:
   *        200:
   *          description: OK
   */
  .put(
    "/update-tribe",
    permission([Role.LEADER]),
    tribeController.updateTribe
  )

  /**
   *  @swagger
   *  /tribe/get-all-member:
   *    get:
   *      tags: [Tribe]
   *      summary: Get all member
   *      responses:
   *        200:
   *          description: OK
   */
  .get("/get-all-member", tribeController.getAllMember)

  /**
   *  @swagger
   *  /tribe/update-permission:
   *    put:
   *      tags: [Tribe]
   *      summary: Update member permission
   *      requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                role:
   *                    type: string
   *                    enum:
   *                        - MEMBER
   *                        - ADMIN
   *                memberId:
   *                    type: string
   *      responses:
   *        200:
   *          description: OK
   */
  .put(
    "/update-permission",
    permission([Role.LEADER]),
    tribeController.updatePermission
  )

  /**
   *  @swagger
   *  /tribe/create-tribe-tree:
   *    post:
   *      tags: [Tribe]
   *      summary: Create tribe tree
   *      requestBody:
   *        required: true
   *        content:
   *          multipart/form-data:
   *            schema:
   *              type: object
   *              properties:
   *                fullName:
   *                  type: string
   *                title:
   *                  type: string
   *                positionX:
   *                  type: number
   *                positionY:
   *                  type: number
   *                address:
   *                  type: string
   *                gender:
   *                  type: string
   *                  enum:
   *                    - MALE
   *                    - FEMALE
   *                    - OTHER
   *                dateOfBirth:
   *                  type: string
   *                  format: date
   *                dateOfDeath:
   *                  type: string
   *                  format: date
   *                description:
   *                  type: string
   *                parent:
   *                  type: string
   *                phoneNumber:
   *                  type: string
   *                couple:
   *                  type: string
   *                avatar:
   *                  type: string
   *                  format: binary
   *      responses:
   *        200:
   *          description: OK
   */
  .post(
    "/create-tribe-tree",
    authenticateJWT,
    permission([Role.LEADER, Role.ADMIN]),
    upload.single("avatar"),
    tribeController.createTribeTree
  )

  /**
   *  @swagger
   *  /tribe/update-tribe-tree-member/{id}:
   *    put:
   *      tags: [Tribe]
   *      summary: Update tribe tree member
   *      parameters:
   *        - in: path
   *          name: id
   *          required: true
   *          schema:
   *            type: string
   *      requestBody:
   *        required: true
   *        content:
   *          multipart/form-data:
   *            schema:
   *              type: object
   *              properties:
   *                fullName:
   *                  type: string
   *                address:
   *                  type: string
   *                gender:
   *                  type: string
   *                  enum:
   *                    - MALE
   *                    - FEMALE
   *                    - OTHER
   *                dateOfBirth:
   *                  type: string
   *                  format: date
   *                dateOfDeath:
   *                  type: string
   *                  format: date
   *                description:
   *                  type: string
   *                avatar:
   *                  type: string
   *                  format: binary
   *      responses:
   *        200:
   *          description: "Cập nhật thành công"
   */
  .put(
    "/update-tribe-tree-member/:id",
    authenticateJWT,
    permission([Role.LEADER, Role.ADMIN]),
    upload.single("avatar"),
    tribeController.updateTribeTreeMember
  )

  .put(
    "/update-all-tribe-position",
    authenticateJWT,
    permission([Role.LEADER, Role.ADMIN]),
    tribeController.updateAllTribePosition
  )

  /**
   *  @swagger
   *  /tribe/get-tribe-tree:
   *    get:
   *      tags: [Tribe]
   *      summary: Retrieve the entire tribe tree structure from ancestor to descendants
   *      responses:
   *        200:
   *          description: Successfully retrieved tribe tree
   */
  .get("/get-tribe-tree", authenticateJWT, tribeController.getTribeTree)

  /**
   *  @swagger
   *  /tribe/delete-tree-member/{id}:
   *    delete:
   *      tags: [Tribe]
   *      summary: Delete tree member
   *      parameters:
   *        - in: path
   *          name: id
   *          required: true
   *          schema:
   *            type: string
   *      responses:
   *        200:
   *          description: Successfully retrieved tribe tree
   */
  .delete(
    "/delete-tree-member/:id",
    permission([Role.LEADER, Role.ADMIN]),
    authenticateJWT,
    tribeController.deleteTreeMember
  );

router
  /**
   *  @swagger
   *  /tribe/get-tribe-genealogy:
   *    get:
   *      tags: [Tribe]
   *      summary: Get get-tribe-genealogy
   *      responses:
   *        200:
   *          description: OK
   */
  .get(
    "/get-tribe-genealogy",
    authenticateJWT,
    tribeController.generateGenealogyData
  );

router
  /**
   *  @swagger
   *  /tribe/add-tribe-genealogy:
   *    post:
   *      tags: [Tribe]
   *      summary: add-tribe-genealogy
   *      requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                title:
   *                  type: string
   *                text:
   *                  type: string
   *                id:
   *                  type: string
   *      responses:
   *        200:
   *          description: OK
   */
  .post(
    "/add-tribe-genealogy",
    authenticateJWT,
    permission([Role.LEADER, Role.ADMIN]),
    tribeController.addTribeGenealogy
  );

router
  /**
   *  @swagger
   *  /tribe/update-tribe-genealogy:
   *    put:
   *      tags: [Tribe]
   *      summary: update-tribe-genealogy
   *      requestBody:
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                title:
   *                  type: string
   *                text:
   *                  type: string
   *                genealogyId:
   *                  type: string
   *                pageDataId:
   *                  type: string
   *      responses:
   *        200:
   *          description: OK
   */
  .put(
    "/update-tribe-genealogy",
    authenticateJWT,
    permission([Role.LEADER, Role.ADMIN]),
    tribeController.updateTribeGenealogy
  )

  /**
   *  @swagger
   *  /tribe/delete-tribe-genealogy/{genealogyId}/{pageDataId}:
   *    delete:
   *      tags: [Tribe]
   *      summary: Delete page data
   *      parameters:
   *        - in: path
   *          name: genealogyId
   *          required: true
   *          schema:
   *            type: string
   *        - in: path
   *          name: pageDataId
   *          required: true
   *          schema:
   *            type: string
   *      responses:
   *        200:
   *          description: Successfully retrieved tribe tree
   */
  .delete(
    "/delete-tribe-genealogy/:genealogyId/:pageDataId",
    permission([Role.LEADER, Role.ADMIN]),
    authenticateJWT,
    tribeController.deleteTribeGenealogy
  );

export default router;
