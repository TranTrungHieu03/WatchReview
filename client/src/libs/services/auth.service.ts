import { AxiosResponse } from "axios"
import { post } from "./root.ts"
import { UserLoginType, UserSignupType } from "../schemas/auth.ts"

interface IAuthService {
    message?: string
}

export const signup = async (data: UserSignupType): Promise<AxiosResponse<IAuthService>> => {
    return await post<IAuthService>("/sign-up", data)
}
export const login = async (data: UserLoginType): Promise<AxiosResponse<IAuthService>> => {
    return await post<IAuthService>("/login", data)
}
