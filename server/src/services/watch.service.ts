import {IWatch} from "../interfaces/watch.interface";
import Watch from "../models/watch.model";
import {IComment} from "../interfaces/comment.interface";
import {UpdateWriteOpResult} from "mongoose";

export const getAllWatches = async (): Promise<IWatch[]> => {
    try {
        return await Watch.find({}).sort({createdAt: -1}).populate("brand").exec()
    } catch (e) {
        throw new Error("Failed to find watches: " + e);
    }
}
export const getOneWatch = async (id: string): Promise<IWatch> => {
    try {
        return await Watch.findById(id)
            .populate("brand")
            .populate({
                path: "comments",
                populate: {
                    path: "author",
                    select: "membername name"
                }
            }).exec()
    } catch (e) {
        throw new Error("Failed to find a watch: " + e);
    }
}
export const postOneWatch = async (data: IWatch): Promise<IWatch> => {
    try {
        const newData = new Watch(data)
        return await newData.save()
    } catch (e) {
        throw new Error("Failed to create a watch: " + e);
    }
}
export const putOneWatch = async (id: string, data: Partial<IWatch>): Promise<IWatch> => {
    try {
        return await Watch.findByIdAndUpdate(id, data).exec()
    } catch (e) {
        throw new Error("Failed to update a watch: " + e);
    }
}
export const deleteOneWatch = async (id: string): Promise<IWatch> => {
    try {
        return await Watch.findByIdAndDelete(id).exec()
    } catch (e) {
        throw new Error("Failed to delete a watch: " + e);
    }
}
export const pushCommentWatch = async (id: string, comment: IComment): Promise<boolean> => {
    try {
        const result: UpdateWriteOpResult = await Watch.updateOne(
            {_id: id},
            {$push: {comments: comment}}
        )
        return result.upsertedCount > 0
    } catch (e) {
        throw new Error("Failed to comment a watch: " + e);
    }
}
export const countGroupByBrand = async (): Promise<{ _id: string, brand: string, count: number }[]> => {
    try {
        return await Watch.aggregate([
            {
                $group:
                    {
                        _id: "$brand",
                        count: {$sum: 1}
                    }
            },
            {
                $lookup: {
                    from: "brands",
                    localField: "brand",
                    foreignField: "_id",
                    as: "brand"
                }
            },
            {
                $unwind: "$brand"
            },
            {
                $project: {
                    _id: 1,
                    brandName: "$brand.brandName",
                    count: 1
                }
            }
        ])
    } catch (e) {
        throw new Error("Failed to count watch by brand: " + e);
    }
}
export const haveComment = async (memberId: string, watchId: string): Promise<boolean> => {
    try {
        return await Watch.findOne({
            _id: watchId,
            "comments.author": memberId
        }, {
            "comments.$": 1
        }) !== null
    } catch (e) {
        throw new Error("Failed to comment a watch: " + e);
    }
}

export const getAllByBrands = async (brands: string[]): Promise<IWatch[]> => {
    try {
        return await Watch.find({brand: {$in: brands}})
    } catch (e) {
        throw new Error("Failed to comment a watch: " + e);
    }
}
