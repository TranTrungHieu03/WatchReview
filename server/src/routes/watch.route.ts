import express from 'express';
import {watchController} from "../controller/watch.controller";

const router = express.Router();
router.route("/")
    .get(watchController.getWatches)
    .post(watchController.insertWatch)

router.route("/:watchId")
    .get(watchController.getWatch)
    .put(watchController.updateWatch)
    .delete(watchController.deleteWatch)
router.route("/filter")
    .post(watchController.filterWatches)
router.route("/:watchId/comments")
    .post(watchController.putComment)
export default router;