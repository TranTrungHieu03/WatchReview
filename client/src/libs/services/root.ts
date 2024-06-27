import axios, { AxiosError, AxiosResponse } from "axios"

const api = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        "Content-Type": "application/json"
    }
})

// api.interceptors.request.use(config => {
//     const accessToken = cookie.getItem("accessToken")
//     if (accessToken) {
//         config.headers.Authorization = `Bearer ${accessToken}`
//     }
//     return config
// })
const handleApiError = (error: AxiosError) => {
    const { response } = error
    console.log(response, error)
    throw error
}
export const get = async <T>(url: string): Promise<AxiosResponse<T>> => {
    try {
        return await api.get<T>(url)
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            handleApiError(error)
        }
        throw error
    }
}
export const post = async <T>(url: string, data: unknown): Promise<AxiosResponse<T>> => {
    try {
        return await api.post<T>(url, data)
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            handleApiError(error)
        }
        throw error
    }
}
export const put = async <T>(url: string, data: unknown): Promise<AxiosResponse<T>> => {
    try {
        return await api.put<T>(url, data)
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            handleApiError(error)
        }
        throw error
    }
}
export const del = async <T>(url: string): Promise<AxiosResponse<T>> => {
    try {
        return await api.delete<T>(url)
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            handleApiError(error)
        }
        throw error
    }
}
