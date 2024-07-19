import RatingBadge from "@/components/RatingBadge"

type PersonRatingProps = {
    name?: string,
    rating?: number,
    goodMessage?: string,
    badMessage?: string,
    createdAt?: string,
    like?: number,
    dislike?: number,
}

export default function PersonRating({ name = '', rating = 0, goodMessage = '', badMessage = '', createdAt = '', like = 0, dislike = 0, ...props }: PersonRatingProps & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={`${props.className ? props.className : ''} border-b pb-[25px] md:mb-[24px] mb-[20px]`}>
            <div className="md:flex justify-between mb-[24px]">
                <div className="md:w-[248px] flex justify-between mb-[16px]">
                    <div>
                        <p className="text-h6 mb-[8px]">{name}</p>
                        <p className="text-p3 text-custom-gray">{createdAt}</p>
                    </div>
                    <RatingBadge rating={rating} size="sm" />
                </div>
                <div className="flex md:w-[430px]">
                    <img src="/icons/svg/smiling-face.svg" alt="smiling face" className="md:w-[24px] w-[24px] md:h-[24px] h-[24px] mr-[16px]" />
                    <p className="text-p3">{goodMessage}</p>
                </div>
                <span className="border-l"></span>
                <div className="flex md:w-[425px]">
                    <img src="/icons/svg/worried-face.svg" alt="worried face" className="md:w-[24px] w-[24px] md:h-[24px] h-[24px] mr-[16px]" />
                    <p className="text-p3">{badMessage}</p>
                </div>
            </div>
            <div className="flex justify-end">
                <img src="/icons/svg/thumb-up.svg" alt="like" className="w-[20px] h-[20px] mr-[8px]" />
                <span className="mr-[32px]">{like}</span>
                <img src="/icons/svg/thumb-down.svg" alt="like" className="w-[20px] h-[20px] mr-[8px]" />
                <span>{dislike}</span>
            </div>

        </div>
    )
}