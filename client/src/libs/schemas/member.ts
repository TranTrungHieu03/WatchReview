import z from "zod"

export const MemberSchema = z.object({
    membername: z.string({
        required_error: "Member name is required",
        invalid_type_error: "Member name must be a string"
    }),
    name: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string"
    }),
    YOB: z
        .number({
            required_error: "YOB is required",
            invalid_type_error: "YOB must be a number"
        })
        .int()
        .min(1900)
        .max(new Date().getFullYear())
})
export type MemberType = z.infer<typeof MemberSchema>
export const MemberChangePassSchema = z.object({
    password: z.string({
        required_error: "Password is required",
        invalid_type_error: "Password name must be a string"
    }),
    confirmPassword: z.string({
        required_error: "Password is required",
        invalid_type_error: "Confirm password name must be a string"
    })
})
export type MemberChangePasswordType = z.infer<typeof MemberSchema>
