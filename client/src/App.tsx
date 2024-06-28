import "./App.css"
import { RouterProvider } from "react-router-dom"
import router from "./router.tsx"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient({
    // defaultOptions: {
    //     queries: {
    //         staleTime: 60 * 1000
    //     }
    // }
})

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ToastContainer />
        </QueryClientProvider>
    )
}

export default App
