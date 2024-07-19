type TagProps = {
    color?: string,
    text?: string,
    bgColor?: string,
}

const TAG_COLORS = [
    { background: '#FF2D2D1A', color: '#E13914' },
    { background: '#3BA87E1A', color: '#3BA87E' },
    { background: '#DAA0091A', color: '#DAA009' },
    { background: '#3C4EF21A', color: '#3C4EF2' },
]

export default function Tag({ ...props }: TagProps & React.HTMLAttributes<HTMLDivElement>) {
    const rand = Math.floor(Math.random() * TAG_COLORS.length)
    return (
        <span
            className={`px-[6px] py-[2px] text-[14px] font-semibold leading-[20px] rounded ${props.className ? props.className : ''}`}
            style={{ color: props.color ? props.color : TAG_COLORS[rand].color, backgroundColor: props.bgColor ? props.bgColor : TAG_COLORS[rand].background }}
        >
            {props.text}
        </span>
    )
}