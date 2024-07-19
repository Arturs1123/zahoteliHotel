import ratingFormatter from "@/helper/ratingFormatter";

type RatingBadgeProps = {
    size?: 'sm' | 'md' | 'mdd' | 'lg',
    rating?: number
}

export default function RatingBadge({ size = 'sm', rating = 0, ...props }: RatingBadgeProps & React.HTMLAttributes<HTMLDivElement>) {
    const sizes = {
        sm: { width: 50, height: 28, fontSize: '18px', lineHeight: '24px', fontWeight: 600 },
        md: { width: 62, height: 35, fontSize: '18px', lineHeight: '24px', fontWeight: 600 },
        mdd: { width: 72, height: 40, fontSize: '24px', lineHeight: '28.6px', fontWeight: 600 },
        lg: { width: 90, height: 50, fontSize: '30px', lineHeight: '36px', fontWeight: 600 },
    }
    const { width, height, fontSize, fontWeight, lineHeight } = sizes[size]

    return (
        <span className={`inline-block relative flex-none ${props.className ? props.className : ''}`} style={{ width, height }}>
            <img src="/icons/svg/rating badge.svg" alt="rating" style={{ width, height }} />
            <span style={{ fontSize: fontSize, fontWeight, lineHeight: lineHeight }} className="text-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-[40%]">{ratingFormatter(rating)}</span>
        </span>
    )
}