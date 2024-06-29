import { AxiosResponse } from "axios"
import { get, put } from "./root.ts"
import { IMember } from "../interfaces/member.interface.ts"
import { MemberChangePasswordType, MemberType } from "../schemas/member.ts"

export interface IMemberService {
    members?: IMember[]
    member?: IMember
    message?: string
}

export const getAllMembers = async () => {
    const response: AxiosResponse<IMemberService> = await get<IMemberService>("/accounts")
    return response.data
}
export const getProfile = async (id: string) => {
    const response: AxiosResponse<IMemberService> = await get<IMemberService>(`/accounts/${id}`)
    return response.data
}
export const updateProfile = async (id: string, data: MemberType) => {
    const response: AxiosResponse<IMemberService> = await put<IMemberService>(`/accounts/${id}`, data)
    return response.data
}
export const changePassword = async (id: string, data: MemberChangePasswordType) => {
    const response: AxiosResponse<IMemberService> = await put<IMemberService>(`/accounts/${id}`, data)
    return response.data
}
export const getProfileByMemberName = async (membername: string) => {
    const response: AxiosResponse<IMemberService> = await get<IMemberService>(`/accounts/name/${membername}`)
    return response.data
}
