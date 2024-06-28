import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from "../../ui/table.tsx"

const TableMember = () => {
    return (
        <Table>
            <TableCaption>A list of members</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>No.</TableHead>
                    <TableHead>Member name</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>YOB</TableHead>
                    <TableHead>Role</TableHead>
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
export default TableMember
