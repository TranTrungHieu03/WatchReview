import Header from "../templates/Header.tsx"
import { Outlet } from "react-router-dom"
import Footer from "../templates/Footer.tsx"

const MainLayout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout
