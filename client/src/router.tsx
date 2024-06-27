import { createBrowserRouter } from "react-router-dom"
import MainLayout from "./components/layouts/MainLayout.tsx"
import HomePage from "./pages/HomePage/HomePage.tsx"
import { RouterEndpoint } from "./constants/RouterEndpoint.ts"
import AdminLayout from "./components/layouts/AdminLayout.tsx"
import BrandDashboard from "./pages/Dashboard/BrandDashboard.tsx"
import Login from "./pages/Login/Login.tsx"
import Signup from "./pages/Signup/Signup.tsx"
import ErrorPage from "./pages/Error/ErrorPage.tsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: RouterEndpoint.Home,
                element: <HomePage />
            }
        ]
    },
    {
        path: RouterEndpoint.Admin,
        element: <AdminLayout />,
        children: [
            {
                path: RouterEndpoint.Brand,
                element: <BrandDashboard />
            }
        ]
    },
    {
        path: RouterEndpoint.Login,
        element: <Login />
    },
    {
        path: RouterEndpoint.Signup,
        element: <Signup />
    },
    {
        path: "*",
        element: <ErrorPage />
    }
])

export default router
