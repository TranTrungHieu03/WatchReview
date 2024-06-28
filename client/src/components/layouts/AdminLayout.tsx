import Sidebar from "../templates/Sidebar.tsx"
import { Outlet } from "react-router-dom"
import Footer from "../templates/Footer.tsx"

const AdminLayout = () => {
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
export default AdminLayout
