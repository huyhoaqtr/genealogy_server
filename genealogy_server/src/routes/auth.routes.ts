/**
 * Author: Jinn
 * Date: 2024-10-24
 */

import { Router } from "express";
import { authController } from "~/controllers";
import authenticateJWT from "~/middleware/authenticate-jwt";
import { upload } from "~/middleware/multer";

const router = Router();
router
  /**
   * @swagger
   * /auth/login:
   *   post:
   *     tags: [Auth]
   *     summary: Đăng nhập một người dùng
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               phoneNumber:
   *                 type: string
   *               password:
   *                 type: string
   *     responses:
   *       200:
   *         description: Login successful
   */
  .post("/login", authController.login)

  /**
   * @swagger
   * /auth/register:
   *   post:
   *     tags: [Auth]
   *     summary: Đăng ký một người dùng
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               phoneNumber:
   *                 type: string
   *               password:
   *                 type: string
   *               fullName:
   *                 type: string
   *               role:
   *                 type: enum
   *                 enum: [MEMBER, LEADER]
   *                 default: MEMBER
   *               tribeCode:
   *                 type: string
   *               tribeName:
   *                 type: string
   *     responses:
   *       200:
   *         description: Register successful
   */
  .post("/register", authController.register)

  /**
   * @swagger
   * /auth/me:
   *   get:
   *     tags: [Auth]
   *     summary: Lấy thông tin bản thân
   *     responses:
   *       200:
   *         description: Get me
   */
  .get("/me", authenticateJWT, authController.getMe)

  /**
   * @swagger
   * /auth/user/{id}:
   *   get:
   *     tags: [Auth]
   *     summary: Lấy thông tin user theo id
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: The user ID
   *     responses:
   *       200:
   *         description: Successful response
   */
  .get("/user/:id", authController.getUser)
  /**
   * @swagger
   * /auth/update-info:
   *   put:
   *     tags: [Auth]
   *     summary: Cập nhật thông tin người dùng
   *     requestBody:
   *       required: true
   *       content:
   *         multipart/form-data:
   *           schema:
   *             type: object
   *             properties:
   *               phoneNumber:
   *                 type: string
   *               fullName:
   *                 type: string
   *               address:
   *                 type: string
   *               avatar:
   *                 type: string
   *                 format: binary
   *               description:
   *                 type: string
   *     responses:
   *       200:
   *         description: Cập nhật thông tin thành công
   */
  .put(
    "/update-info",
    authenticateJWT,
    upload.single("avatar"),
    authController.updateUserInfo
  )

  /**
   * @swagger
   * /auth/update-password:
   *   put:
   *     tags: [Auth]
   *     summary: Cập nhật mật khẩu
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               oldPassword:
   *                 type: string
   *               newPassword:
   *                 type: string
   *     responses:
   *       200:
   *         description: Cập nhật mật khẩu thành công
   */
  .put("/update-password", authenticateJWT, authController.updatePassword)

  /**
   * @swagger
   * /auth/update-fcm:
   *   put:
   *     tags: [Auth]
   *     summary: Cập nhật fcm
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               newFcmKey:
   *                 type: string
   *     responses:
   *       200:
   *         description: Cập nhật fcm thành công
   */
  .put("/update-fcm", authenticateJWT, authController.updateFCM)

  /**
   * @swagger
   * /auth/logout:
   *   get:
   *     tags: [Auth]
   *     summary: Đăng xuất
   *     responses:
   *       200:
   *         description: Logout
   */
  .get("/logout", authenticateJWT, authController.logout)

  /**
   * @swagger
   * /auth/get-otp:
   *   post:
   *     tags: [Auth]
   *     summary: Get OTP
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               phoneNumber:
   *                 type: string
   *     responses:
   *       200:
   *         description: Get OTP
   */
  .post("/get-otp",  authController.getOTP)

  /**
   * @swagger
   * /auth/verify-otp:
   *   post:
   *     tags: [Auth]
   *     summary: Get OTP
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               phoneNumber:
   *                 type: string
   *               otp:
   *                 type: string
   *     responses:
   *       200:
   *         description: Get OTP
   */
  .post("/verify-otp",  authController.verifyOTP)

export default router;
