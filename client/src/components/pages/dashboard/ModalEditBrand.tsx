import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "../../ui/dialog.tsx"
import { Label } from "../../ui/label.tsx"
import { Button } from "../../ui/button.tsx"
import { IBrand } from "../../../libs/interfaces/brand.interface.ts"
import { Input } from "../../ui/input.tsx"

const ModalEditBrand = ({ brand }: { brand: IBrand }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div>Edit</div>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                    <DialogTitle>Edit brand</DialogTitle>
                    <DialogDescription>Make changes to brand here. Click save when you're done.</DialogDescription>
                </DialogHeader>
                <div className='grid gap-4 py-4'>
                    <div className='grid grid-cols-4 items-center gap-4'>
                        <Label htmlFor='brandName' className='text-right'>
                            Name
                        </Label>
                        <Input id='brandName' defaultValue={brand.brandName} className='col-span-3' autoFocus={true} />
                    </div>
                </div>
                <DialogFooter>
                    <Button type='submit'>Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
export default ModalEditBrand
