import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "../../context/AuthContext.tsx"
import { RouterEndpoint } from "../../constants/RouterEndpoint.ts"
import Header from "../templates/Header.tsx"
import Footer from "../templates/Footer.tsx"

const RequireAuth = () => {
    const { auth } = useAuth()
    const location = useLocation()

    return auth?.user ? (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    ) : (
        <Navigate to={RouterEndpoint.Login} state={{ from: location }} replace />
    )
}

export default RequireAuth
