export interface IMember {
    _id: string
    membername: string
    name: string
    YOB: number
    password: string
    isAdmin: boolean
}

export interface IAuth {
    membername: string
    isAdmin: boolean
    exp: number
}
