import z from "zod"

export const BrandSchema = z.object({
    brandName: z.string({
        required_error: "Brand name is required",
        invalid_type_error: "Brand name is invalid"
    })
})
export type BrandType = z.infer<typeof BrandSchema>
