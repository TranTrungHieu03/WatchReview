import { IWatch } from "../../../libs/interfaces/watch.interface.ts"
import { Link } from "react-router-dom"

const Card = ({ watch }: { watch: IWatch }) => {
    return (
        <div>
            <div className='justify-center items-center flex rounded'>
                <Link to={`/watches/${watch._id}`} className='group'>
                    <div className='gap-4 group-hover:underline underline-offset-2'>
                        <div className='relative'>
                            <img src={watch.image} alt='Placeholder image' className='object-cover h-64 w-72' />
                            {watch.Automatic && (
                                <div className='absolute top-2 left-0 text-black font-black p-2 bg-gradient-to-r from-indigo-600 to-indigo-200 text-sm shadow-sm'>
                                    Automatic
                                </div>
                            )}
                        </div>
                        <div className='pb-4 pt-2 px-2 bg-gray-50'>
                            <div className='font-bold'>{watch.brand?.brandName}</div>
                            <div className='text-sm'>{watch.watchName}</div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Card
