import Link from "next/link"

export default function GotoHotel({ ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={`${props.className ? props.className : ''}`}>
            <Link href="/hotels/123">
                <span className="flex items-center">
                    <img src="/icons/svg/BackArrow.svg" alt="back arrow" className="md:w-[24px] md:h-[24px] w-[20px] h-[20px] mr-[8px]" />
                    <span className="md:text-p2 text-p3 text-custom-gray">К списку отелей</span>
                </span>
            </Link>
        </div >
    )
}