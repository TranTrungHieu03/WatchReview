import Header from "../templates/Header.tsx"
import Sidebar from "../templates/Sidebar.tsx"
import { Outlet } from "react-router-dom"
import Footer from "../templates/Footer.tsx"

const AdminLayout = () => {
    return (
        <div>
            <Header />
            <Sidebar />
            <Outlet />
            <Footer />
        </div>
    )
}
export default AdminLayout
