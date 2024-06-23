import {Document} from "mongoose";
export interface IMember extends Document{
    membername: string
    name: string
    password: string
    isAdmin: boolean
    YOB: Date
}