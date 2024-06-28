import { Bounce, toast, ToastOptions } from "react-toastify"

const notifyOptions: ToastOptions = {
    position: "top-right",
    autoClose: 3000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
    transition: Bounce
}
export const successNotify = (msg: string) => {
    return toast.success(msg, notifyOptions)
}
export const errorNotify = (msg: string) => {
    return toast.error(msg, notifyOptions)
}
