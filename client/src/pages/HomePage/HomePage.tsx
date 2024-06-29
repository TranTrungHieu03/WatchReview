import ListWatch from "../../components/pages/home/ListWatch.tsx"
import ListBrand from "../../components/pages/home/ListBrand.tsx"
import { useCallback, useEffect, useState } from "react"
import { IWatch } from "../../libs/interfaces/watch.interface.ts"
import Banner from "../../components/templates/Banner.tsx"
import { useQuery } from "@tanstack/react-query"
import { getAllWatches } from "../../libs/services/watch.service.ts"

const HomePage = () => {
    const [watches, setWatches] = useState<IWatch[]>([])
    const [watchesFilter, setWatchesFilter] = useState<IWatch[]>([])
    const [isFiltered, setIsFiltered] = useState<boolean>(false)
    const closeFilter = useCallback(() => {
        setIsFiltered(false)
    }, [])
    const openFilter = useCallback(() => {
        setIsFiltered(true)
    }, [])

    const query = useQuery({
        queryKey: ["watch-list"],
        queryFn: getAllWatches
    })
    // if (query.data?.watches) {
    //     setWatches(query.data?.watches)
    // }
    console.log(isFiltered)
    useEffect(() => {
        if (isFiltered) {
            console.log(watchesFilter)
            setWatches(watchesFilter)
        } else {
            if (query.data?.watches) {
                setWatches(query.data?.watches)
            }
        }
    }, [isFiltered, watchesFilter, query.data?.watches])
    return (
        <>
            <Banner />
            <div className={"mx-10 flex"}>
                <div className={"font-medium  py-4"}>
                    <div>Filter by brand</div>
                    <ListBrand setWatchesFilter={setWatchesFilter} openFilter={openFilter} closeFilter={closeFilter} />
                </div>
                <div>
                    <div className={"font-medium text-4xl py-4"}>List of watches</div>
                    <ListWatch watches={watches} />
                </div>
            </div>
        </>
    )
}
export default HomePage
