import ControlButton from "@/components/ControlButton"

type PersonAmountProps = {
    label?: string
    price?: number
    amount?: number
}

export default function PersonAmount({ label = '', price = 0, amount = 0, ...props }: PersonAmountProps & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={`${props.className ? props.className : ''}`}>
            <div className="flex">
                <div className="flex justify-between grow md:pr-[16px] pr-[8px]">
                    <p className="text-p3 text-custom-gray">{label}</p>
                    <p className="text-[16px] leading-[24px] font-[700]">{price} ₽</p>
                </div>
                <div className="flex items-center justify-between w-[107px]">
                    <ControlButton type="minus" className="mr-[8px]" />
                    <span className="text-p3 mr-[8px]">{amount}</span>
                    <ControlButton />
                </div>
            </div>
        </div>
    )
}