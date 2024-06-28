import axios, { AxiosError, AxiosResponse } from "axios"
import { errorNotify, successNotify } from "../../components/atoms/Notify.tsx"

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
    const data = response?.data as { error: string }
    if (data.error) {
        errorNotify(data.error)
    } else {
        errorNotify("An unexpected error occurred")
    }
    throw error
}
export const get = async <T>(url: string): Promise<AxiosResponse<T>> => {
    try {
        const response = await api.get<T>(url)
        const data = response?.data as { success: string }
        if (data.success) {
            successNotify(data.success)
        }
        return response
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            handleApiError(error)
        }
        throw error
    }
}
export const post = async <T>(url: string, data: unknown): Promise<AxiosResponse<T>> => {
    try {
        const response = await api.post<T>(url, data)
        const dataRes = response?.data as { success: string }
        if (dataRes.success) {
            successNotify(dataRes.success)
        }
        return response
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            handleApiError(error)
        }
        throw error
    }
}
export const put = async <T>(url: string, data: unknown): Promise<AxiosResponse<T>> => {
    try {
        const response = await api.put<T>(url, data)
        const dataRes = response?.data as { success: string }
        if (dataRes.success) {
            successNotify(dataRes.success)
        }
        return response
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            handleApiError(error)
        }
        throw error
    }
}
export const del = async <T>(url: string): Promise<AxiosResponse<T>> => {
    try {
        const response = await api.delete<T>(url)
        const dataRes = response?.data as { success: string }
        if (dataRes.success) {
            successNotify(dataRes.success)
        }
        return response
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            handleApiError(error)
        }
        throw error
    }
}
