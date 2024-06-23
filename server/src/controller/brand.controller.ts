import {Request, Response,} from "express";
import {deleteOneBrand, getAllBrand, getBrandById, getBrandByName , postOneBrand, putOneBrand} from "../services/brand.service";
import {IBrand} from "../interfaces/brand.interface";
import Brand from "../models/brand.model";

export const brandController = {
    getBrands: async (_req: Request, res: Response) => {
        try {
            const brands = await getAllBrand()
            return res.status(200).json({brands})
        } catch (e) {
            return res.status(500).json({error: e.message});
        }
    },
    getBrand: async (req: Request, res: Response) => {
        try {
            const {brandId} = req.params
            const brand = await getBrandById(brandId)
            return res.status(200).json({brand})
        } catch (e) {
            return res.status(500).json({error: e.message});
        }
    },
    insertBrand: async (req: Request, res: Response) => {
        try {
            const {brandName} = req.body
            const isExistingBrand = await getBrandByName(brandName)
            if (isExistingBrand) {
                return res.status(400).json({error: `${brandName} already exists`})
            }
            const brand = await postOneBrand(req.body)
            return res.status(201).json({brand, success: "Insert brand successfully"})
        } catch (e) {
            return res.status(500).json({error: e.message});
        }
    },
    deleteBrand: async (req: Request, res: Response) => {
        try {
            const {brandId} = req.params
            const brand = await deleteOneBrand(brandId)
            return res.status(202).json({success: `Delete ${brand.brandName} successfully`})
        } catch (e) {
            return res.status(500).json({error: e.message});
        }
    },
    updateBrand: async (req: Request, res: Response) => {
        try {
            const {brandId} = req.params
            const data = req.body
            const isExistingBrand = await getBrandById(brandId)
            if (!isExistingBrand) {
                return res.status(404).json({error: `${data.brandName} does not exist`})
            }
            const brand = await putOneBrand(brandId, data);
            return res.status(202).json({success: `Update ${brand.brandName} successfully`})
        } catch (e) {
            return res.status(500).json({error: e.message});
        }
    }
}