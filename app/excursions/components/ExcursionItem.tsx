'use client'
import ChooseButton from "@/components/ChooseButton"
import RatingBadge from "@/components/RatingBadge"
import Tag from "@/components/Tag"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Rate } from "antd";
import Link from "next/link";

export type ExcursionItemProps = {
    thumbnail: string,
    houseType: string,
    star: number,
    isMyFavorite: boolean,
    rating: { number: number, label: string },
    commentAmount: number,
    excursionName: string,
    address: string,
    services: { icon: string, label: string }[],
    bonus: { label: string, color: string }[],
    price: number,
    capacity: string,
    description: string,
}
export default function ExcursionItem({
    thumbnail = '',
    houseType = '',
    star = 0,
    isMyFavorite = false,
    rating = { number: 0, label: '' },
    commentAmount = 0,
    excursionName = '',
    address = '',
    services = [],
    bonus = [],
    price = 0,
    capacity = '',
    description = '',
    ...props
}: ExcursionItemProps & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={`lg:flex rounded-xl border ${props.className ? props.className : ''} align-items-stretch`}>
            <div className="p-[4px] relative lg:w-[284px] flex-none">
                <img src={thumbnail} className="lg:h-full h-[200px] w-full lg:rounded-bl-lg rounded-tl-lg lg:rounded-tr-none rounded-tr-lg" title="thumbnail" alt="thumbnail" style={{ objectFit: 'cover' }} />
                <div className="w-[40px] h-[40px] p-[10px] rounded-full bg-[#FFFFFFCC] absolute top-[12px] left-[12px]">
                    {
                        isMyFavorite ? <img src="/icons/svg/heart.svg" alt="like" title="like" width={20} height={20} /> :
                            <img src="/icons/svg/like.svg" alt="like" title="like" width={20} height={20} />
                    }
                </div>
            </div>
            <div className="p-[16px] middle:grow">
                <div className="flex mb-[8px]">
                    <p className="text-h6 grow">{excursionName}</p>
                    <div className="lg:flex hidden flex-none items-center">
                        <RatingBadge size="md" rating={rating.number} />
                        <span className="ml-[8px] lg:block hidden">
                            <p className="text-base font-bold leading-[24px]">{rating.label}</p>
                            <p className="text-p4 text-custom-gray">{commentAmount}отзывов</p>
                        </span>
                    </div>
                </div>
                <p className="text-p4 h-[40px] lg:block hidden mb-[16px] text-custom-gray overflow-hidden text-ellipsis">{description}</p>
                <div className="flex items-center overflow-hidden lg:mb-[16px] mb-[12px]">
                    {services.map((service, i) => (
                        <span key={i} className="flex mr-[16px] items-center flex-none">
                            <img src={service.icon} alt="service icon" className="w-[20px] h-[20px]" />
                            <span className="text-p4 ml-[6px]">{service.label}</span>
                        </span>))}
                </div>
                <div className="flex flex-wrap">
                    {bonus.map((item, i) => (
                        <Tag text={item.label} color={item.color} key={i} className="mr-[8px] lg:mb-[14px] mb-[12px]" />
                    ))}
                </div>
                <hr className="lg:mb-[14px] md-[12px]" />
                <div className="flex justify-between items-end">
                    <div className="flex items-end">
                        <span className="lg:mr-[16px]">
                            <p className="text-h5 lg:mb-[4px] mb-[2px]">{price}&nbsp;₽</p>
                            <p className="text-p4 text-custom-gray">за человека</p>
                        </span>
                        <span className="px-[20px] py-[10px] border border-accent rounded-lg lg:mr-[8px] text-accent text-p4 lg:block hidden">
                            7 марта, 11:00
                        </span>
                        <span className="px-[20px] py-[10px] border border-accent rounded-lg lg:mr-[8px] text-accent text-p4 lg:block hidden">
                            7 марта, 15:00
                        </span>
                    </div>
                    <div className="flex-none flex items-end">
                        <span className="px-[20px] py-[10px] border border-accent rounded-lg mr-[8px] text-accent text-p4 lg:hidden block">
                            7 марта, 11:00
                        </span>
                        <Link href="/excursions/123"><ChooseButton className="lg:hidden block" caption="" /><ChooseButton className="lg:block hidden" caption="Подробнее" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}