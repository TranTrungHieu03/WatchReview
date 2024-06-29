import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext.tsx"
import generateImage from "../../libs/utils/generateImage.ts"

const Header = () => {
    const { auth } = useAuth()
    return (
        <header className={"flex items-center h-20 w-full border-b-2 border-gray-200 justify-between "}>
            <div className={"ml-8 flex items-center"}>
                <button
                    className={
                        "px-3 py-2 rounded-lg bg-gray-50 text-4xl hover:bg-gray-100 text-blue-600 font-black  transition-all"
                    }
                >
                    IMA WATCH
                </button>
            </div>
            <div className={"flex gap-8 items-center "}>
                <div>
                    <Link to={"/home"}>
                        <div className={"cursor-pointer text-lg font-medium  "}>HOME</div>
                    </Link>
                </div>
                {auth?.user ? (
                    <div className={"flex gap-4 mr-6"}>
                        <Link to={"/logout"}>
                            <div className={"rounded-md  font-light bg-backgroundTheme px-3 py-2 "}>Logout</div>
                        </Link>
                        <img src={generateImage(auth?.user ?? "")} alt='' className={"w-10 h-10 rounded-md "} />
                    </div>
                ) : (
                    <div className={"flex gap-4 mr-6"}>
                        <Link to={"/login"}>
                            <div className={"rounded-md  font-light bg-backgroundTheme px-3 py-2 "}>Login</div>
                        </Link>
                        <Link to={"/sign-up"}>
                            <div className={"rounded-md  font-light bg-backgroundTheme px-3 py-2 "}>Sign up</div>
                        </Link>
                    </div>
                )}
            </div>
        </header>
    )
}
export default Header
