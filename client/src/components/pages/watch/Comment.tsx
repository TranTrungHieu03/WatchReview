import { IWatch } from "../../../libs/interfaces/watch.interface.ts"
import { useState } from "react"
import { IComment } from "../../../libs/interfaces/comment.interface.ts"
import { useAuth } from "../../../context/AuthContext.tsx"
import { getProfileByMemberName } from "../../../libs/services/member.service.ts"
import { useQuery } from "@tanstack/react-query"
import { StarIcon } from "lucide-react"

const Comment = ({ watch }: { watch: IWatch }) => {
    const [rating, setRating] = useState<number>(3)
    const [content, setContent] = useState<string>("")
    const { auth } = useAuth()
    const [comments, setComments] = useState<IComment[]>(watch.comments || [])
    const query = useQuery({
        queryKey: ["comment"],
        queryFn: () => getProfileByMemberName(auth?.user ?? "")
    })
    const author = query.data?.member?._id as string
    const handleStarClick = (value: number) => {
        setRating(value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const newComment: IComment = {
            author,
            rating,
            content
        }
        setContent("")
    }
    const isComment = true
    return (
        <div className='py-3 px-20'>
            <div className='font-black collapse text-2xl'>Product review</div>
            <div>
                {isComment && (
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
                )}
            </div>
        </div>
    )
}
export default Comment
