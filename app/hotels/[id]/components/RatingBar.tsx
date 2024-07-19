import ratingFormatter from "@/helper/ratingFormatter";

type RatingBarProps = {
    label?: string,
    rating?: number,
}



const getColor = (rating: number): string => {
    const colors = {
        good: '#3BA87E' as string,
        normal: '#E6A600' as string,
        bad: '#FF0000' as string
    }
    if (rating >= 8.5) {
        return colors.good
    } else if (rating > 5.5) {
        return colors.normal
    } else {
        return colors.bad
    }
}

export default function RatingBar({ label = '', rating = 0 }: RatingBarProps) {
    return (
        <div>
            <div className="text-p3 flex justify-between mb-[8px]" >
                <span>{label}</span>
                <span style={{ color: getColor(rating) }}>{ratingFormatter(rating)}</span>
            </div>
            <div className="bg-[#EEEEEE] rounded-lg">
                <div className="h-[8px] rounded-lg" style={{ backgroundColor: getColor(rating), width: rating / 10 * 100 + '%', }}></div>
            </div>
        </div>
    )
}