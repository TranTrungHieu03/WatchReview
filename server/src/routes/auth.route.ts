import express from 'express';
import {authController} from "../controller/auth.controller";

const router = express.Router();

router.post("/sign-up", authController.register)
router.post("/login", authController.login)
router.get("/logout", authController.logout)

export default router;