import express from 'express';
import {protectedRoute} from "../middleware/protedtedRoute";
import {memberController} from "../controller/member.controller";
import {isHasAdminRight, isOwner} from "../middleware/authHandler";

const router = express.Router();

router.get("/", protectedRoute, isHasAdminRight, memberController.getAllMembers)
router.post("/update", protectedRoute, isOwner, memberController.updateProfile)
router.get("/name/:membername", memberController.getProfileByMembername)
export default router;