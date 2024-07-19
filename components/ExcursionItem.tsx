import CategoryLabels from "./CategoryLabels"
import Clamp from 'react-multiline-clamp';

type ExcursionItemProps = {
    title: string,
    categories: { icon: string, label: string }[],
    duration: string,
    rating: number,
    reviews: number,
    thumbnail: string,
    isInOurTown: boolean,
}

export default function ExcursionItem({
    title = 'title',
    categories = [],
    duration = '0',
    rating = 0,
    reviews = 0,
    thumbnail = '',
    isInOurTown = false
}: ExcursionItemProps) {
    return (
        <div className="md:grid md:grid-cols-4">
            <div className="md:rounded-l-xl rounded-l-none md:rouned-t-none rounded-t-xl p-[4px] border md:border-r-0 md:border-b border-b-0 relative">
                <img src={thumbnail} className="md:rounded-l-lg rounded-l-none md:rounded-t-none rounded-t-lg md:h-full h-[200px] w-full" title="thumbnail" alt="thumbnail" style={{ objectFit: 'cover' }} />
                <div className="w-[40px] h-[40px] p-[10px] rounded-full bg-[#FFFFFFCC] absolute top-[10px] left-[10px]">
                    <img src="/icons/svg/like.svg" alt="like" title="like" width={20} height={20} />
                </div>
                {
                    isInOurTown ? (
                        <span className="absolute bottom-[10px] left-[10px] text-[#FF6432] font-medium text-sm bg-[#FFFFFFCC] rounded-full px-[8px] py-[1px]">В Абхазии</span>
                    ) : null
                }
            </div>
            <div className="col-span-3 border md:border-l-0 md:border-t border-t-0 md:rounded-r-xl rounded-r-none p-[4px]">
                <div className="flex flex-row justify-content-between flex-none">
                    <div>
                        <Clamp withTooltip lines={2}>
                            <p className="font-medium text-xl mb-2 ">{title}</p>
                        </Clamp>
                        <div className="flex flex-row mb-2 text-base items-center">
                            <img src='/icons/png/duration icon.png' className="mr-1 w-auto h-[16px]" title="duration" alt="duration" />{duration} часа
                        </div>
                        <CategoryLabels categories={categories} />
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-lg w-[50px] text-center text-lg font-semibold text-white" style={{ backgroundImage: "url('/icons/png/rating middle.png')" }}>{rating}</span>
                        <span className="text-base text-accent">{reviews}&nbsp;отзывов</span>
                    </div>
                </div>
            </div>
        </div>
    )
}