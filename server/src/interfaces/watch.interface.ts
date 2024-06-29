import {IBrand} from "./brand.interface";
import {IComment} from "./comment.interface";
import {Document} from "mongoose";

export interface IWatch extends Document {
    _id: string;
    watchName: string
    price: Number
    image: string
    Automatic: boolean
    watchDescription: string
    brand: IBrand
    comments: IComment[]
}