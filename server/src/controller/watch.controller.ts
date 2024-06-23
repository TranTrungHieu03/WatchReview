import {Request, Response} from "express";
import {deleteOneWatch, getAllWatches, getOneWatch, postOneWatch, putOneWatch} from "../services/watch.service"
import {getBrandById} from "../services/brand.service";

export const watchController = {
    getWatches: async (_req: Request, res: Response) => {
        try {
            const watches = await getAllWatches()
            return res.status(200).json(watches)
        } catch (e) {
            return res.status(500).json({error: e.message});
        }
    },
    getWatch: async (req: Request, res: Response) => {
        try {
            const watch = await getOneWatch(req.params.id)
            return res.status(200).json({watch})
        } catch (e) {
            return res.status(500).json({error: e.message});
        }
    },
    insertWatch: async (req: Request, res: Response) => {
        try {
            const {watchName, image, watchDescription, Automatic, price, brand} = req.body

            if (!watchName || !watchDescription || !price || !image) {
                return res.status(400).json({error: `All field is required`});
            }
            const brandObject = await getBrandById(brand)
            if (!brandObject) {
                return res.status(404).json({error: `Brand does not exist`})
            }
            const watch = await postOneWatch(req.body)

            return res.status(200).json({success: `Insert watch successfully`, watch})
        } catch (e) {
            return res.status(500).json({error: e.message});
        }
    },
    deleteWatch: async (req: Request, res: Response) => {
        try {
            const {watchId} = req.params
            const watch = await deleteOneWatch(watchId)
            return res.status(202).json({success: `Delete ${watch.watchName} successfully`})
        } catch (e) {
            return res.status(500).json({error: e.message});
        }
    },
    updateWatch: async (req: Request, res: Response) => {
        try {
            const {watchId} = req.params
            const {watchName, image, watchDescription, Automatic, price, brand} = req.body
            if (!watchName || !watchDescription || !price || !image) {
                return res.status(400).json({error: `All field is required`});
            }
            const brandObject = await getBrandById(brand)
            if (!brandObject) {
                return res.status(404).json({error: `Brand does not exist`})
            }
            const watch = await putOneWatch(watchId, req.body)
            return res.status(202).json({success: `Update ${watch.watchName} successfully`})
        } catch (e) {
            return res.status(500).json({error: e.message});
        }
    }
}
