import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table.tsx"
import { UseQueryResult } from "@tanstack/react-query"
import { IWatchService } from "../../../libs/services/watch.service.ts"
import WatchAction from "./WatchAction.tsx"

const TableWatch = ({ query }: { query: UseQueryResult<IWatchService, Error> }) => {
    const watches = query.data?.watches
    return (
        <Table>
            <TableCaption>A list of watches</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>No.</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Brand</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Automatic</TableHead>
                    <TableHead>Image</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {watches?.map((watch, index) => (
                    <TableRow key={index}>
                        <TableCell className='font-medium'>{index + 1}</TableCell>
                        <TableCell>{watch.watchName}</TableCell>
                        <TableCell>{watch.brand?.brandName}</TableCell>
                        <TableCell>{watch.price}</TableCell>
                        <TableCell>{watch.Automatic ? "True" : "False"}</TableCell>
                        <TableCell>
                            <img src={watch.image} className={"h-20 w-20"} />
                        </TableCell>
                        <TableCell>
                            <WatchAction watch={watch} query={query} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
export default TableWatch
