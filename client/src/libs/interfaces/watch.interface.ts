import { IBrand } from "./brand.interface.ts"
import { IComment } from "./comment.interface.ts"

export interface IWatch {
    _id: string
    watchName: string
    brand: IBrand
    image: string
    price: number
    Automatic: boolean
    watchDescription: string
    comments: IComment[]
}
