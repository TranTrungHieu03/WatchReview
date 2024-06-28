import { get } from "./root.ts"
import { IWatch } from "../interfaces/watch.interface.ts"
import { AxiosResponse } from "axios"

interface IWatchService {
    watches?: IWatch[]
    message?: string
}

export const getAllWatches = async (): Promise<AxiosResponse<IWatchService>> => {
    return await get<IWatchService>("/watches")
}
