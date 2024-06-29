import { del, get, post, put } from "./root.ts"
import { IWatch } from "../interfaces/watch.interface.ts"
import { AxiosResponse } from "axios"
import { WatchType } from "../schemas/watch.ts"
import { IComment } from "../interfaces/comment.interface.ts"

export interface IWatchService {
    watches?: IWatch[]
    message?: string
    watch?: IWatch
}

export const getAllWatches = async () => {
    const response: AxiosResponse<IWatchService> = await get<IWatchService>("/watches")
    return response.data
}
export const updateWatch = async (id: string, data: WatchType) => {
    const response: AxiosResponse<IWatchService> = await put<IWatchService>(`/watches/${id}`, data)
    return response.data
}
export const addWatch = async (data: WatchType) => {
    const response: AxiosResponse<IWatchService> = await post<IWatchService>(`/watches`, data)
    return response.data
}
export const deleteWatch = async (id: string) => {
    const response: AxiosResponse<IWatchService> = await del<IWatchService>(`/watches/${id}`)
    return response.data
}
export const filerWatches = async (data: string[]) => {
    const response: AxiosResponse<IWatchService> = await post<IWatchService>(`/watches/filter`, data)
    return response.data
}
export const getWatch = async (id: string) => {
    const response: AxiosResponse<IWatchService> = await get<IWatchService>(`/watches/${id}`)
    return response.data
}
export const comment = async (id: string, data: IComment) => {
    const response: AxiosResponse<IWatchService> = await post<IWatchService>(`/watches/${id}/comments/`, data)
    return response.data
}
