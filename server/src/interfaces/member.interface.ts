import {Document} from "mongoose";

export interface IMember extends Document {
    _id: string;
    membername: string
    name: string
    password: string
    isAdmin: boolean
    YOB: Date
}