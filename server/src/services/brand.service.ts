import {IBrand} from "../interfaces/brand.interface";
import Brand from "../models/brand.model";

export const getAllBrand = async (): Promise<IBrand[]> => {
    try {
        return await Brand.find({}).sort({createdAt: -1}).exec()
    } catch (e) {
        throw new Error("Failed to find Brands: " + e);
    }
}
export const getBrandById  = async (id: string): Promise<IBrand> => {
    try {
        return await Brand.findOne({_id: id}).exec()
    } catch (e) {
        throw new Error("Failed to find a Brand: " + e);
    }
}
export const postOneBrand = async (data: IBrand): Promise<IBrand> => {
    try {
        const newData: IBrand = new Brand(data)
        return await newData.save()
    } catch (e) {
        throw new Error("Failed to create a new brand: " + e);
    }
}
export const putOneBrand = async (id: string, data: IBrand): Promise<IBrand> => {
    try {
        return await Brand.findByIdAndUpdate(id, data).exec()
    } catch (e) {
        throw new Error("Failed to update a brand: " + e);
    }
}
export const deleteOneBrand = async (id: string): Promise<IBrand> => {
    try {
        // @ts-ignore
        return await Brand.findOneAndDelete(id).exec()
    } catch (e) {
        throw new Error("Failed to delete a brand: " + e);
    }
}
export const getBrandByName  = async (name: string): Promise<IBrand> => {
    try {
        return await Brand.findOne({brandName: name}).exec()
    } catch (e) {
        throw new Error("Failed to find a Brand: " + e);
    }
}
