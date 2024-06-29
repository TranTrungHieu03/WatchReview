import TableBrand from "../../components/pages/dashboard/TableBrand.tsx"
import { useQuery } from "@tanstack/react-query"
import { getAllBrands } from "../../libs/services/brand.service.ts"
import ModalAddBranch from "../../components/pages/dashboard/ModalAddBranch.tsx"

const BrandDashboard = () => {
    const query = useQuery({
        queryKey: ["brand-list"],
        queryFn: getAllBrands
    })
    return (
        <div className={"container mt-10"}>
            <ModalAddBranch query={query} />
            <TableBrand query={query} />
        </div>
    )
}
export default BrandDashboard
