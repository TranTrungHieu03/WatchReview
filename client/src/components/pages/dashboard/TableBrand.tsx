import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table.tsx"
import { useQuery } from "@tanstack/react-query"
import { getAllBrands } from "../../../libs/services/brand.service.ts"
import BrandAction from "./BrandAction.tsx"

const TableBrand = () => {
    const query = useQuery({
        queryKey: ["brand-list"],
        queryFn: getAllBrands
    })
    const brands = query.data?.brands
    console.log(brands)
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
                            <BrandAction brand={brand} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
export default TableBrand
