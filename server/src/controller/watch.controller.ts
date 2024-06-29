import {Request, Response} from "express";
import {
    deleteOneWatch,
    getAllByBrands,
    getAllWatches,
    getOneWatch,
    haveComment,
    postOneWatch,
    pushCommentWatch,
    putOneWatch
} from "../services/watch.service"
import {getBrandById} from "../services/brand.service";
import {getMemberById, getMemberByMemberName} from "../services/member.service";

export const watchController = {
    getWatches: async (_req: Request, res: Response) => {
        try {
            const watches = await getAllWatches()
            return res.status(200).json({watches})
        } catch (e) {
            return res.status(500).json({message: e.message});
        }
    },
    getWatch: async (req: Request, res: Response) => {
        try {
            const watch = await getOneWatch(req.params.watchId)
            const watchExisting = await getOneWatch(req.params.watchId)
            if (!watchExisting) {
                return res.status(404).json({message: `Watch with ID ${req.params.watchId} not found`})
            }
            return res.status(200).json({watch})
        } catch (e) {
            return res.status(500).json({message: e.message});
        }
    },
    insertWatch: async (req: Request, res: Response) => {
        try {
            const {watchName, image, watchDescription, Automatic, price, brand} = req.body
            if (!watchName || !watchDescription || !price || !image) {
                return res.status(400).json({message: `All field is required`});
            }
            const brandObject = await getBrandById(brand)
            if (!brandObject) {
                return res.status(404).json({message: `Brand does not exist`})
            }
            const watch = await postOneWatch(req.body)

            return res.status(200).json({message: `Insert watch successfully`, watch})
        } catch (e) {
            return res.status(500).json({message: e.message});
        }
    },
    deleteWatch: async (req: Request, res: Response) => {
        try {
            const {watchId} = req.params
            const watch = await deleteOneWatch(watchId)
            // const watchExisting = await getOneWatch(watchId)
            // if (!watchExisting) {
            //     console.log(watchExisting)
            //     return res.status(404).json({message: `Watch with ID ${watchId} not found`})
            // }
            return res.status(202).json({message: `Delete ${watch.watchName} successfully`})
        } catch (e) {
            return res.status(500).json({message: e.message});
        }
    },
    updateWatch: async (req: Request, res: Response) => {
        try {
            const {watchId} = req.params
            const watchExisting = await getOneWatch(watchId)
            if (!watchExisting) {
                return res.status(404).json({message: `Watch with ID ${watchId} not found`})
            }
            const {watchName, image, watchDescription, Automatic, price, brand} = req.body
            if (!watchName || !watchDescription || !price || !image) {
                return res.status(400).json({message: `All field is required`});
            }
            const brandObject = await getBrandById(brand)
            if (!brandObject) {
                return res.status(404).json({message: `Brand does not exist`})
            }
            const watch = await putOneWatch(watchId, req.body)
            return res.status(202).json({message: `Update ${watch.watchName} successfully`})
        } catch (e) {
            return res.status(500).json({message: e.message});
        }
    },
    putComment: async (req: Request, res: Response) => {
        try {
            const {watchId} = req.params
            const {author, content, rating} = req.body
            const watchExisting = await getOneWatch(watchId)
            if (!watchExisting) {
                return res.status(404).json({message: `Watch with ID ${watchId} not found`})
            }
            const userInfo = await getMemberById(author);
            if (!userInfo){
                return res.status(404).json({message: `User not found`})
            } 
            const isCommented = await haveComment(author, watchId);
            if (isCommented) {
                return res.status(404).json({message: `You are already a comment   `})
            }
            console.log(req.body)
            await pushCommentWatch(watchId, {content, rating, author})
            return res.status(200).json({message: `Comment successfully `})
        } catch (e) {
            return res.status(500).json({message: e.message});
        }
    },
    filterWatches: async (req: Request, res: Response) => {
        try {
            const brandIds = req.body
            const watches = await getAllByBrands(brandIds)
            console.log(watches)
            return res.status(200).json({watches})

        } catch (e) {
            return res.status(500).json({message: e.message});
        }
    }

}
