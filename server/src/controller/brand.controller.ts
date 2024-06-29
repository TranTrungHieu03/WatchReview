import {Request, Response,} from "express";
import {
    deleteOneBrand,
    getAllBrand,
    getBrandById,
    getBrandByName,
    postOneBrand,
    putOneBrand
} from "../services/brand.service";
import {getAllByBrands} from "../services/watch.service";

export const brandController = {
    getBrands: async (_req: Request, res: Response) => {
        try {
            const brands = await getAllBrand()
            return res.status(200).json({brands})
        } catch (e) {
            return res.status(500).json({message: e.message});
        }
    },
    getBrand: async (req: Request, res: Response) => {
        try {
            const {brandId} = req.params
            const brand = await getBrandById(brandId)
            return res.status(200).json({brand})
        } catch (e) {
            return res.status(500).json({message: e.message});
        }
    },
    insertBrand: async (req: Request, res: Response) => {
        try {
            const {brandName} = req.body
            const isExistingBrand = await getBrandByName(brandName)
            if (isExistingBrand) {
                return res.status(400).json({message: `${brandName} already exists`})
            }
            const brand = await postOneBrand(req.body)
            return res.status(201).json({brand, message: "Insert brand successfully"})
        } catch (e) {
            return res.status(500).json({message: e.message});
        }
    },
    deleteBrand: async (req: Request, res: Response) => {
        try {
            const {brandId} = req.params
            const brands = [brandId]
            const watches = await getAllByBrands(brands)
            if (watches.length > 0) {
                return res.status(404).json({message: `Cannot delete brand`})
            }
            const brand = await deleteOneBrand(brandId)
            return res.status(202).json({message: `Delete ${brand.brandName} successfully`})
        } catch (e) {
            return res.status(500).json({message: e.message});
        }
    },
    updateBrand: async (req: Request, res: Response) => {
        try {
            const {brandId} = req.params
            const data = req.body
            const isExistingBrand = await getBrandById(brandId)
            if (!isExistingBrand) {
                return res.status(404).json({message: `${data.brandName} does not exist`})
            }
            const brand = await putOneBrand(brandId, data);
            return res.status(202).json({message: `Update ${brand.brandName} successfully`})
        } catch (e) {
            return res.status(500).json({message: e.message});
        }
    }
}