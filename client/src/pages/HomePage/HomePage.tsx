import ListWatch from "../../components/pages/home/ListWatch.tsx"
import ListBrand from "../../components/pages/home/ListBrand.tsx"
import { useState } from "react"
import { IWatch } from "../../libs/interfaces/watch.interface.ts"
import Banner from "../../components/templates/Banner.tsx"

const HomePage = () => {
    const [watches, setWatches] = useState<IWatch[]>([])
    return (
        <>
            <Banner />
            <div className={"mx-10 flex"}>
                <div className={"font-medium  py-4"}>
                    <div>Filter by brand</div>
                    <ListBrand setWatches={setWatches} />
                </div>
                <div>
                    <div className={"font-medium text-4xl py-4"}>List of watches</div>
                    <ListWatch setWatches={setWatches} watches={watches} />
                </div>
            </div>
        </>
    )
}
export default HomePage
