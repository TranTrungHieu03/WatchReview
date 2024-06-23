import {IMember} from "./member.interface";
export interface IComment {
    rating: Number
    content: string
    author: IMember
    createdAt?: Date
    updatedAt?: Date
}