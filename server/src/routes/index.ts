import express from 'express';
import watchRouter from "./watch.route"
import accountRouter from "./member.route"
import brandRouter from "./brand.route"
import authRouter from "./auth.route"
import commentRouter from "./comment.route"

const router = express.Router();

router.use("/", authRouter)
router.use("/watches", watchRouter)
router.use("/accounts", accountRouter)
router.use("/brands", brandRouter)
router.use("/comments", commentRouter)
export default router