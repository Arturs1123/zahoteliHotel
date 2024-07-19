import RatingBadge from "@/components/RatingBadge"
import PersonRating from "./PersonRating"
import GhostBtn from "@/components/OutlineButton"

type RatingsProps = {
    rating?: number,
    label?: string,
    ratingAmount?: number,
    ratings: { name: string, goodMessage: string, badMessage: string }[]
}

export default function Ratings({ rating = 0, label = '', ratingAmount = 0, ratings = [], ...props }: RatingsProps & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={`${props.className ? props.className : ''}`}>
            <div className="flex items-center md:mb-[32px] mb-[20px]">
                <RatingBadge rating={rating} size="lg" className="md:block hidden" />
                <RatingBadge rating={rating} size="mdd" className="md:hidden block" />
                <span className="ml-[16px]">
                    <h4 className="mb-[4px] text-h4">{label}&nbsp;отель</h4>
                    <p className="text-p3">Рейтинг на основе {ratingAmount} оценок</p>
                </span>
            </div>
            <div>
                {ratings.map((rating, i) => (
                    <PersonRating {...rating} key={i} />
                ))}
            </div>
            <div className="text-center md:mt-[24px] mt-[20px]">
                <GhostBtn caption="Показать еще" />
            </div>
        </div>
    )
}