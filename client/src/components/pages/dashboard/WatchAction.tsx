import { EllipsisVerticalIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover.tsx"
import { Button } from "../../ui/button.tsx"
import { FC, useState } from "react"
import { useMutation, useQueryClient, UseQueryResult } from "@tanstack/react-query"
import { IWatch } from "../../../libs/interfaces/watch.interface.ts"
import ModalEditWatch from "./ModalEditWatch.tsx"
import { deleteWatch, IWatchService } from "../../../libs/services/watch.service.ts"
import { Link } from "react-router-dom"

interface ActionProps {
    watch: IWatch
    query: UseQueryResult<IWatchService, Error>
}

const WatchAction: FC<ActionProps> = ({ watch, query }) => {
    const queryClient = useQueryClient()
    const [open, setOpen] = useState<boolean>(false)
    const deleteFn = useMutation({
        mutationFn: () => deleteWatch(`${watch._id}`),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["watch-list", `watch-${watch._id}`] })
        },
        onSettled: () => {
            query.refetch()
        }
    })

    const handleDelete = () => {
        setOpen(false)
        deleteFn.mutate()
    }
    const closePopover = () => {
        setOpen(false)
    }
    return (
        <Popover onOpenChange={setOpen} open={open}>
            <PopoverTrigger asChild>
                <Button className={"bg-indigo-50 hover:bg-indigo-200"}>
                    <EllipsisVerticalIcon color={"blue"} />
                </Button>
            </PopoverTrigger>
            <PopoverContent
                className={
                    "w-32 cursor-pointer px-2 py-1 rounded-sm flex flex-col gap-1 text-center bg-indigo-50 *:rounded *:py-1"
                }
            >
                <Link to={`/watches/${watch._id}`}>
                    <div className={"bg-indigo-100 hover:bg-indigo-200"}>View</div>
                </Link>

                <ModalEditWatch watch={watch} query={query} closePopover={closePopover} />

                <div className={"bg-red-50 hover:bg-red-400"} onClick={handleDelete}>
                    Delete
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default WatchAction
