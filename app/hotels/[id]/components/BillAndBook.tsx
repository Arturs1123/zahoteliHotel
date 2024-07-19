import FullWidthBtn from "@/components/FullWidthBtn"
import { Input } from "antd"
import Image from "next/image"

type billAndBookProps = {
    discount?: number,
    total?: number,
    prepayment?: number,
    payment?: number,
}

export default function BillAndBook({
    discount = 0,
    total = 0,
    prepayment = 0,
    payment = 0
}: billAndBookProps) {
    return (
        <div>
            <div className="flex justify-between mb-[12px]">
                <div className="w-[148px] grow-none">
                    <span className="bg-[#3BA87E1A] text-[#3BA87E] px-[6px] py-[2px] mb-[8px] inline-block rounded">-{discount}%</span>
                    <p className="text-[14px] font-semibold leading-[20px] text-custom-gray">Итого за 6 ночей</p>
                </div>
                <div>
                    <p className="text-[16px] text-custom-gray leading-[24px] font-semibold mb-[8px]">92000₽</p>
                    <p className="text-[#3BA87E] text-[20px] leading-[27.32px font-[800]">{total}₽</p>
                </div>
            </div>
            <div className="flex justify-between mb-[12px]">
                <span className="text-[14px] font-semibold leading-[20px] text-custom-gray">Предоплата</span>
                <span className="text-[16px] leading-[24px] font-[800]">9000₽</span>
            </div>
            <div className="flex justify-between lg:mb-[53px] mb-[12px]">
                <span className="text-[14px] font-semibold leading-[20px] text-custom-gray">Предоплата</span>
                <span className="text-[16px] leading-[24px] font-semibold">76000₽</span>
            </div>
            <div className="text-custom-gray text-[14px] leading-[20px] font-semibold mb-[8px]">Ваш телефон для бронирования</div>
            <div>
                <Input className="p-[12px] w-full mb-[16px]" prefix={<Image src="/icons/svg/+7.svg" width={16} height={16} alt="prefix" />} />
                <FullWidthBtn caption="Забронировать" />
            </div>
        </div>
    )
}