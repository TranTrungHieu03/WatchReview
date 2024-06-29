import { ArrowRightIcon, UsersRoundIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form.tsx"
import { Input } from "../../ui/input.tsx"
import { UserSignup, UserSignupType } from "../../../libs/schemas/auth.ts"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../../ui/button.tsx"
import { signup } from "../../../libs/services/auth.service.ts"
import { useNavigate } from "react-router-dom"

const FormSignup = () => {
    const nav = useNavigate()
    const form = useForm<UserSignupType>({
        resolver: zodResolver(UserSignup)
    })
    const onSubmit = async (data: UserSignupType) => {
        await signup(data)
        nav("/login")
    }
    return (
        <div className={"grid grid-cols-5 mx-20"}>
            <div className={"col-span-2"}>
                <img src='' alt='' />
            </div>
            <div className={"col-span-3 flex flex-col gap-10 justify-center"}>
                <div>
                    <UsersRoundIcon size={40} />
                </div>
                <div className={"text-4xl tracking-wider font-bold"}>JOIN US</div>
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className={"grid grid-cols-2 *:col-span-1 gap-4 "}>
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
                                    name={"name"}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder='Enter name' {...field} />
                                            </FormControl>
                                            {/*<FormDescription>This is your public display name.</FormDescription>*/}
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name={"YOB"}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>YOB</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder='Enter YOB'
                                                    {...field}
                                                    type={"number"}
                                                    value={field.value ?? ""}
                                                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                                />
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
                                <FormField
                                    control={form.control}
                                    name={"confirmPassword"}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Confirm Password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder='Enter confirm password'
                                                    {...field}
                                                    type={"password"}
                                                />
                                            </FormControl>
                                            {/*<FormDescription>This is your public display name.</FormDescription>*/}
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className={"grid grid-cols-3 gap-4 py-10"}>
                                <div className={"col-span-2"}>Sign in with Google</div>
                                <Button className={"w-fit text-xl font-medium "} type='submit'>
                                    <div className={"col-span-1 flex ml-auto gap-4 px-3 py-3 text-lg uppercase"}>
                                        <span>
                                            <ArrowRightIcon size={30} />
                                        </span>
                                        <p>Continue</p>
                                    </div>
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}
export default FormSignup
