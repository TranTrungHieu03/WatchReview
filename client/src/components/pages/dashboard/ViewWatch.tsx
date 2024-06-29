import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getWatch } from "../../../libs/services/watch.service.ts"
import ErrorPage from "../../../pages/Error/ErrorPage.tsx"
import WatchInfo from "../watch/WatchInfo.tsx"
import Comment from "../watch/Comment.tsx"

const ViewWatch = () => {
    const { watchId } = useParams()
    const query = useQuery({
        queryKey: [`watch-${watchId}`],
        queryFn: () => getWatch(watchId ?? "")
    })
    console.log(watchId)
    const watch = query.data?.watch
    if (query.isLoading) {
        return <div>Loading</div>
    }
    if (query.isError || watch === undefined) {
        return <ErrorPage />
    }

    return (
        <div className={"mx-20"}>
            {query.isSuccess && (
                <div className={"flex flex-col gap-4"}>
                    <WatchInfo watch={watch} />
                    <Comment watch={watch} query={query} />
                </div>
            )}
        </div>
    )
}
export default ViewWatch
