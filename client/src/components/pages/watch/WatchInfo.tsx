import { IWatch } from "../../../libs/interfaces/watch.interface.ts"

const WatchInfo = ({ watch }: { watch: IWatch }) => {
    return (
        <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
            <div className='col-span-1'>
                <img src={watch.image} alt={watch.watchName} className='w-4/5 h-auto object-cover' />
            </div>
            <div className='col-span-1'>
                <div>
                    <div className='py-2'>
                        <div className='text-3xl font-black hover-underline w-fit'>{watch.brand.brandName}</div>
                        <div className='text-xl font-extrabold'>{watch.watchName}</div>
                    </div>

                    <div className='font-bold text-2xl flex justify-start gap-1 py-1'>
                        $<span className='font-bold text-4xl'>{watch.price} </span>
                    </div>

                    {watch.Automatic && (
                        <div className='inline-block'>
                            <span className='text-lg font-extrabold'>Special property:</span>
                            <p className='text-lg inline'>Automatic</p>
                        </div>
                    )}

                    <div>
                        <span className='font-extrabold text-lg'>Product's information:</span>
                        <p className='inline text-lg'>{watch.watchDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WatchInfo
