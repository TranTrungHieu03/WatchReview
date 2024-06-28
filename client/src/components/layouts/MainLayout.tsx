import Header from "../templates/Header.tsx"
import { Outlet } from "react-router-dom"
import Footer from "../templates/Footer.tsx"
import Banner from "../templates/Banner.tsx"

const MainLayout = () => {
    return (
        <div className={""}>
            <Header />
            <Banner />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout
