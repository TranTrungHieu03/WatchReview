import { del, get } from "./root.ts"
import { IBrand } from "../interfaces/brand.interface.ts"
import { AxiosResponse } from "axios"

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
