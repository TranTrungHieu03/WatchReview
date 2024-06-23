import express from 'express';
import {brandController} from "../controller/brand.controller";

const router = express.Router();

router.route("/")
    .get(brandController.getBrands)
    .post(brandController.insertBrand)
router.route("/:brandId")
    .get(brandController.getBrand)
    .put(brandController.updateBrand)
    .delete(brandController.deleteBrand)
export default router;