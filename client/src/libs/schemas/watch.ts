import z from "zod"

export const WatchSchema = z.object({
    watchName: z.string({
        required_error: "Watch name is required",
        invalid_type_error: "Watch name is invalid"
    }),
    brand: z.string({
        required_error: "Brand name is required",
        invalid_type_error: "Brand name is invalid"
    }),
    image: z
        .string({
            required_error: "Brand name is required"
        })
        .url({
            message: "Brand name is invalid"
        }),
    price: z.number({
        required_error: "Price is required",
        invalid_type_error: "Price is invalid"
    }),
    Automatic: z.boolean().optional(),
    watchDescription: z.string({
        required_error: "Watch description is required",
        invalid_type_error: "Watch description is invalid"
    })
})
export type WatchType = z.infer<typeof WatchSchema>
