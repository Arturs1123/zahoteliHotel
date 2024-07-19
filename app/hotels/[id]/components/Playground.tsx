import Image from "next/image"

export type PlaygroundProps = {
    thumbnail?: string,
    placeName?: string,
    reachMethod?: { goby: string, time?: number, distance?: number }
}

export default function Playground({
    thumbnail = '',
    placeName = 'placeName',
    reachMethod = { goby: 'foot', time: 0, distance: 0 },
    ...props
}: PlaygroundProps & React.HTMLAttributes<HTMLDivElement>) {
    const gobyIcons = {
        foot: '/icons/svg/Person Walking Light Skin Tone.svg',
        bus: '/icons/svg/Bus.svg'
    }
    const { goby, time, distance } = reachMethod

    return (
        <div className={`${props.className ? props.className : ''}`}>
            <div className="mb-[8px]">
                <img src={thumbnail} className="w-full h-[193px] rounded-lg" style={{ objectFit: 'cover' }} />
            </div>
            <p className="text-[18px] leading-[24px] font-bold mb-[8px]">{placeName}</p>
            <p className="text-[14px] leading-[20px] font-semibold flex items-center">
                <Image src='/icons/svg/Person Walking Light Skin Tone.svg' width={24} height={24} alt="go by icon" />
                <span className="ml-[8px]">{`${time}мин • ${distance}км`}</span>
            </p>
        </div>
    )
}