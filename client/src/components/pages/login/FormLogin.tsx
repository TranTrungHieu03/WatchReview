import { useForm } from "react-hook-form"
import { UserLogin, UserLoginType } from "../../../libs/schemas/auth.ts"
import { zodResolver } from "@hookform/resolvers/zod"
import { login } from "../../../libs/services/auth.service.ts"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form.tsx"
import { Input } from "../../ui/input.tsx"
import { Button } from "../../ui/button.tsx"

const FormLogin = () => {
    const form = useForm<UserLoginType>({
        resolver: zodResolver(UserLogin)
    })
    const onSubmit = async (data: UserLoginType) => {
        console.log(data)
        const rs = await login(data)
        console.log(rs)
    }
    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div>
                        <FormField
                            control={form.control}
                            name={"membername"}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Member name</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Enter membername' {...field} />
                                    </FormControl>
                                    {/*<FormDescription>This is your public display name.</FormDescription>*/}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name={"password"}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Enter password' {...field} type={"password"} />
                                    </FormControl>
                                    {/*<FormDescription>This is your public display name.</FormDescription>*/}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div>
                        <Button type={"submit"}>Login</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}
export default FormLogin
