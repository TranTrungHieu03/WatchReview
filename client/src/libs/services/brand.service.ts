import { del, get, post, put } from "./root.ts"
import { IBrand } from "../interfaces/brand.interface.ts"
import { AxiosResponse } from "axios"
import { BrandType } from "../schemas/brand.ts"

export interface IBrandService {
    brands?: IBrand[]
    brand?: IBrand
    message?: string
}

export const getAllBrands = async () => {
    const response: AxiosResponse<IBrandService> = await get<IBrandService>("/brands")
    return response.data
}
export const deleteBrand = async (path: string) => {
    const response: AxiosResponse<IBrandService> = await del<IBrandService>(`/brands/${path}`)
    return response.data
}
export const addBrand = async (data: BrandType) => {
    const response: AxiosResponse<IBrandService> = await post<IBrandService>(`/brands`, data)
    return response.data
}
export const updateBrand = async (id: string, data: BrandType) => {
    const response: AxiosResponse<IBrandService> = await put<IBrandService>(`/brands/${id}`, data)
    return response.data
}
