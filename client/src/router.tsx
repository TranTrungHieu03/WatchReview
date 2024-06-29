import { createBrowserRouter, Navigate } from "react-router-dom"
import MainLayout from "./components/layouts/MainLayout.tsx"
import HomePage from "./pages/HomePage/HomePage.tsx"
import { RouterEndpoint } from "./constants/RouterEndpoint.ts"
import AdminLayout from "./components/layouts/AdminLayout.tsx"
import BrandDashboard from "./pages/Dashboard/BrandDashboard.tsx"
import Login from "./pages/Login/Login.tsx"
import Signup from "./pages/Signup/Signup.tsx"
import ErrorPage from "./pages/Error/ErrorPage.tsx"
import WatchDashboard from "./pages/Dashboard/WatchDashboard.tsx"
import MemberDashboard from "./pages/Dashboard/MemberDashboard.tsx"
import WatchDetailPage from "./pages/WatchDetail/WatchDetailPage.tsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Navigate to={RouterEndpoint.Home} />
            },
            {
                path: RouterEndpoint.Home,
                element: <HomePage />
            },
            {
                path: RouterEndpoint.GetWatch,
                element: <WatchDetailPage />
            }
        ]
    },
    {
        path: "/",
        element: <AdminLayout />,
        children: [
            {
                path: RouterEndpoint.BrandDashboard,
                element: <BrandDashboard />
            },
            {
                path: RouterEndpoint.WatchDashboard,
                element: <WatchDashboard />
            },
            {
                path: RouterEndpoint.MemberDashboard,
                element: <MemberDashboard />
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
