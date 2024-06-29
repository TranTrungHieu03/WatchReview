import TableWatch from "../../components/pages/dashboard/TableWatch.tsx"
import { useQuery } from "@tanstack/react-query"
import { getAllWatches } from "../../libs/services/watch.service.ts"
import ModalAddWatch from "../../components/pages/dashboard/ModalAddWatch.tsx"

const WatchDashboard = () => {
    const query = useQuery({
        queryKey: ["watch-list"],
        queryFn: getAllWatches
    })

    return (
        <div className={"container mt-10"}>
            <ModalAddWatch query={query} />
            <TableWatch query={query} />
        </div>
    )
}
export default WatchDashboard
