import Sidebar from "../templates/Sidebar.tsx"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import Footer from "../templates/Footer.tsx"
import { RouterEndpoint } from "../../constants/RouterEndpoint.ts"
import { useAuth } from "../../context/AuthContext.tsx"

const AdminLayout = () => {
    const { auth } = useAuth()
    const location = useLocation()

    if (auth?.isAdmin) {
        return (
            <div className={"flex"}>
                <Sidebar />
                <div className={"flex flex-col w-full"}>
                    <main>
                        <Outlet />
                    </main>
                    <Footer />
                </div>
            </div>
        )
    }

    if (auth?.user) {
        return <Navigate to={RouterEndpoint.Unauthorized} state={{ from: location }} replace />
    }

    return <Navigate to={RouterEndpoint.Login} state={{ from: location }} replace />
}

export default AdminLayout
