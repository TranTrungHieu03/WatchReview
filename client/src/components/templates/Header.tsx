import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className={"flex items-center h-20 w-full border-b-2 border-gray-200 justify-between "}>
            <div className={"ml-8 flex items-center"}>
                <p className={"text-4xl font-black  "}>IMA WATCH</p>
            </div>
            <div className={"flex gap-8 items-center "}>
                <div>
                    <Link to={"/home"}>
                        <div className={"cursor-pointer text-xl font-medium  "}>HOME</div>
                    </Link>
                </div>
                <div className={"flex gap-4 mr-6"}>
                    <Link to={"/login"}>
                        <div className={"rounded-md  font-light bg-backgroundTheme px-3 py-3 "}>Login</div>
                    </Link>
                    <Link to={"/sign-up"}>
                        <div className={"rounded-md  font-light bg-backgroundTheme px-3 py-3 "}>Sign up</div>
                    </Link>
                </div>
            </div>
        </header>
    )
}
export default Header
