import { useQuery } from "@tanstack/react-query"
import { getAllWatches } from "../../../libs/services/watch.service.ts"
import Card from "./Card.tsx"
import { IWatch } from "../../../libs/interfaces/watch.interface.ts"
import React from "react"

const ListWatch = ({
    watches
    // setWatches
}: {
    watches: IWatch[]
    // setWatches: React.Dispatch<React.SetStateAction<IWatch[]>>
}) => {
    // const query = useQuery({
    //     queryKey: ["watch-list"],
    //     queryFn: getAllWatches
    // })
    // if (query.data?.watches) {
    //     setWatches(query.data?.watches)
    // }

    return (
        <div className={"grid grid-cols-3 gap-8 py-4 "}>
            {watches?.map((watch, index) => <Card key={index} watch={watch} />)}
        </div>
    )
}
export default ListWatch
