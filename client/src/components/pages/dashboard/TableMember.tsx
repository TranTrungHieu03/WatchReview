import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table.tsx"
import { useQuery } from "@tanstack/react-query"
import { getAllMembers } from "../../../libs/services/member.service.ts"

const TableMember = () => {
    const query = useQuery({
        queryKey: ["member-list"],
        queryFn: getAllMembers
    })
    const members = query.data?.members
    console.log(members)
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
                {members?.map((member, index) => (
                    <TableRow key={index}>
                        <TableCell className='font-medium'>{index + 1}</TableCell>
                        <TableCell>{member.membername}</TableCell>
                        <TableCell>{member.name}</TableCell>
                        <TableCell>{member.YOB}</TableCell>
                        <TableCell>{member.isAdmin ? "Admin" : "Member"}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
export default TableMember
