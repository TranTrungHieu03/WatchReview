import WatchInfo from "../../components/pages/watch/WatchInfo.tsx"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getWatch } from "../../libs/services/watch.service.ts"
import ErrorPage from "../Error/ErrorPage.tsx"
import Comment from "../../components/pages/watch/Comment.tsx"

const WatchDetailPage = () => {
    const { watchId } = useParams()
    const query = useQuery({
        queryKey: [`watch-${watchId}`],
        queryFn: () => getWatch(watchId ?? "")
    })
    console.log(watchId)
    const watch = query.data?.watch
    if (!watch) {
        return <ErrorPage />
    }

    return (
        <div className={"mx-20"}>
            {watchId && (
                <div className={"flex flex-col gap-4"}>
                    <WatchInfo watch={watch} />
                    <Comment watch={watch} />
                </div>
            )}
        </div>
    )
}
export default WatchDetailPage
