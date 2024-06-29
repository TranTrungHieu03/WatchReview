import "./App.css"
import { RouterProvider } from "react-router-dom"
import router from "./router.tsx"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useAuth } from "./context/AuthContext.tsx"
import { jwtDecode } from "jwt-decode"
import { useEffect } from "react"

const queryClient = new QueryClient({})

function App() {
    const { setAuth } = useAuth()
    const token = localStorage.getItem("accessToken")
    useEffect(() => {
        if (token) {
            const decodedToken = jwtDecode<{
                membername: string
                isAdmin: boolean
                id: string
            }>(token ?? "")
            setAuth({ user: decodedToken.membername, isAdmin: decodedToken.isAdmin, id: decodedToken.id })
        }
    }, [])

    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ToastContainer />
        </QueryClientProvider>
    )
}

export default App
