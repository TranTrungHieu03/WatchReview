import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table.tsx"
import { UseQueryResult } from "@tanstack/react-query"
import { IBrandService } from "../../../libs/services/brand.service.ts"
import BrandAction from "./BrandAction.tsx"

const TableBrand = ({ query }: { query: UseQueryResult<IBrandService, Error> }) => {
    const brands = query.data?.brands
    return (
        <Table>
            <TableCaption>A list of brands</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>No.</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {brands?.map((brand, index) => (
                    <TableRow key={index}>
                        <TableCell className='font-medium'>{index + 1}</TableCell>
                        <TableCell>{brand.brandName}</TableCell>
                        <TableCell>
                            <BrandAction brand={brand} query={query} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
export default TableBrand
