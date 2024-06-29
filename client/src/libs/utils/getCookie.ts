import Cookies from "js-cookie"

export const getCookie = (name: string): string | undefined => {
    console.log(Cookies.get(name))
    return Cookies.get(name)
}
