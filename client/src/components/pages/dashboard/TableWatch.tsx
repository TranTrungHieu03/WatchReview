import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from "../../ui/table.tsx"

const TableWatch = () => {
    return (
        <Table>
            <TableCaption>A list of watches</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>No.</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Automatic</TableHead>
                    <TableHead>Image</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {/*{.map((invoice) => (*/}
                {/*    <TableRow key={invoice.invoice}>*/}
                {/*        <TableCell className="font-medium">{invoice.invoice}</TableCell>*/}
                {/*        <TableCell>{invoice.paymentStatus}</TableCell>*/}
                {/*        <TableCell>{invoice.paymentMethod}</TableCell>*/}
                {/*        <TableCell className="text-right">{invoice.totalAmount}</TableCell>*/}
                {/*    </TableRow>*/}
                {/*))}*/}
            </TableBody>
        </Table>
    )
}
export default TableWatch
