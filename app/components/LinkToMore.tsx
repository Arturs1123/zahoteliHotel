import Image from "next/image"
import Link from "next/link"

type LinkToMoreProps = {
    caption?: string
    linkURL?: string
}

export default function LinkToMore({ caption = "", linkURL = "", ...props }: LinkToMoreProps & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <Link href={linkURL} target="_blank" className={`${props.className ? props.className : ''}`}>
            <span className="border border-accent px-[24px] py-[12px] rounded-[8px] inline-block w-fit">
                <span className="flex items-center overflow-hidden">
                    <span className="mr-[8px] text-p2 text-accent flex-none">{caption}</span>
                    <Image src="icons/svg/arrow-right.svg" width={24} height={24} alt="more" className="flex-none" />
                </span>
            </span>
        </Link>
    )
}