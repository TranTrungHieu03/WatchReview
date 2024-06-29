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
import { Input } from "../../ui/input.tsx"
import { useMutation, useQueryClient, UseQueryResult } from "@tanstack/react-query"
import { addBrand, IBrandService } from "../../../libs/services/brand.service.ts"
import { useState } from "react"

const ModalEditBrand = ({ query }: { query: UseQueryResult<IBrandService, Error> }) => {
    const queryClient = useQueryClient()
    const [open, setOpen] = useState<boolean>(false)
    const [brandName, setBrandName] = useState<string>("")
    const updateFn = useMutation({
        mutationFn: () => addBrand({ brandName }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["brand-list"] })
        },
        onSettled: () => {
            query.refetch()
        }
    })
    return (
        <Dialog onOpenChange={setOpen} open={open}>
            <DialogTrigger asChild>
                <Button className={"my-3 justify-end"}>Add new</Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                    <DialogTitle>Add brand</DialogTitle>
                    <DialogDescription>Make changes to brand here. Click save when you're done.</DialogDescription>
                </DialogHeader>
                <div className='grid gap-4 py-4'>
                    <div className='grid grid-cols-4 items-center gap-4'>
                        <Label htmlFor='brandName' className='text-right'>
                            Name
                        </Label>
                        <Input
                            id='brandName'
                            className='col-span-3'
                            placeholder={"Enter brand name"}
                            autoFocus={true}
                            onChange={(e) => setBrandName(e.target.value)}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        type='submit'
                        onClick={() => {
                            setOpen((curr) => !curr)
                            updateFn.mutate()
                        }}
                    >
                        Save changes
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
export default ModalEditBrand
