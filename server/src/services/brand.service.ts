import {IBrand} from "../interfaces/brand.interface";
import Brand from "../models/brand.model";

export const getAll = async (): Promise<IBrand[]> => {
    try {
        return await Brand.find({}).exec()
    } catch (e) {
        throw new Error("Failed to find Brands: " + e);
    }
}
export const getById = async (id: string): Promise<IBrand> => {
    try {
        return await Brand.findOne({_id: id}).exec()
    } catch (e) {
        throw new Error("Failed to find a Brand: " + e);
    }
}
export const postOne = async (data: IBrand): Promise<IBrand> => {
    try {
        const newData: IBrand = new Brand(data)
        return await newData.save()
    } catch (e) {
        throw new Error("Failed to create a new brand: " + e);
    }
}
export const putOne = async (id: string, data: IBrand): Promise<IBrand> => {
    try {
        console.log(id,  typeof  id,  data)
        return await Brand.findByIdAndUpdate(id, data).exec()
    } catch (e) {
        throw new Error("Failed to update a brand: " + e);
    }
}
export const deleteOne = async (id: string): Promise<IBrand> => {
    try {
        // @ts-ignore
        return await Brand.findOneAndDelete(id).exec()
    } catch (e) {
        throw new Error("Failed to delete a brand: " + e);
    }
}
export const getByName = async (name: string): Promise<IBrand> => {
    try {
        return await Brand.findOne({brandName: name}).exec()
    } catch (e) {
        throw new Error("Failed to find a Brand: " + e);
    }
}
