import { IWatch } from "../../../libs/interfaces/watch.interface.ts"
import { useState } from "react"
import { IComment } from "../../../libs/interfaces/comment.interface.ts"
import { useAuth } from "../../../context/AuthContext.tsx"
import { useMutation, useQueryClient, UseQueryResult } from "@tanstack/react-query"
import { StarIcon } from "lucide-react"
import { comment, IWatchService } from "../../../libs/services/watch.service.ts"
import GenerateImage from "../../../libs/utils/generateImage.ts"
import { useTime } from "../../../libs/utils/useTime.ts"
import { useLocation, useNavigate } from "react-router-dom"
import { RouterEndpoint } from "../../../constants/RouterEndpoint.ts"

const Comment = ({ watch, query }: { watch: IWatch; query: UseQueryResult<IWatchService, Error> }) => {
    const [rating, setRating] = useState<number>(3)
    const [content, setContent] = useState<string>("")
    const navigate = useNavigate()
    const location = useLocation()
    const { auth } = useAuth()

    const author = auth.id as string
    console.log(author)
    const handleStarClick = (value: number) => {
        setRating(value)
    }

    const queryClient = useQueryClient()
    const cmt = useMutation({
        mutationFn: (data: IComment) => comment(watch._id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [`watch-${watch._id}`] })
        },
        onSettled: () => {
            query.refetch()
        }
    })
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (auth.id === null) {
            navigate({ pathname: RouterEndpoint.Login, state: { from: location } })
        }

        const newComment: IComment = {
            author,
            rating,
            content
        }
        cmt.mutate(newComment)

        setContent("")
    }

    return (
        <div className='py-3 px-20'>
            <div className='font-black collapse text-2xl'>Product review</div>
            <div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-2 w-full'>
                    <div className='flex gap-2 items-center'>
                        <div id='rating' className='flex space-x-2'>
                            {[1, 2, 3].map((i) => (
                                <StarIcon
                                    key={i}
                                    data-value={i}
                                    className={`cursor-pointer text-2xl ${
                                        rating >= i ? "text-yellow-500" : "text-gray-400"
                                    }`}
                                    onClick={() => handleStarClick(i)}
                                />
                            ))}
                        </div>
                        <input type='hidden' name='rating' value={rating} />
                    </div>
                    <input
                        name='content'
                        type='text'
                        placeholder='Comment here'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className='border-input placeholder:text-muted-foreground rounded focus-visible:ring-ring flex h-9 w-full border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50'
                    />
                    <button
                        type='submit'
                        id='send'
                        className='bg-gray-900 font-bold px-3 text-center text-white w-fit py-2 justify-center items-center flex rounded cursor-pointer'
                    >
                        Send
                    </button>
                </form>
            </div>
            <div className={"flex flex-col py-8 gap-4"}>
                {watch.comments.length > 0 &&
                    watch.comments.map((cmt, index) => (
                        <div className={"flex gap-4 items-center"} key={index}>
                            <img
                                src={GenerateImage((cmt.author?.membername as string) ?? "")}
                                className={"h-10 w-10 rounded-md"}
                            />
                            <div className={"flex gap-3 flex-col"}>
                                <div className='flex gap-2 items-center'>
                                    <div id='cmt.rating' className='flex space-x-2'>
                                        {[1, 2, 3].map((i) => (
                                            <StarIcon
                                                key={i}
                                                data-value={i}
                                                className={`cursor-pointer text-2xl ${
                                                    rating >= i ? "text-yellow-500" : "text-gray-400"
                                                }`}
                                            />
                                        ))}
                                    </div>
                                    <input type='hidden' name='rating' value={cmt.rating} />
                                </div>
                                <input
                                    name='content'
                                    type='text'
                                    disabled
                                    value={cmt.content}
                                    className='border-input placeholder:text-muted-foreground rounded focus-visible:ring-ring flex h-9 w-full border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50'
                                />
                            </div>
                            <p className={"font-bold text-sm"}>{useTime(cmt?.createdAt ?? "")}</p>
                        </div>
                    ))}
            </div>
        </div>
    )
}
export default Comment
