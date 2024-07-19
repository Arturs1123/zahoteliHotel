import ExtraBed from "./ExtraBed"
export type AccommodationType = 'SINGLE' | 'DOUBLE' | 'EXTRA'

type AccommodationSelectProps = {
    accommodations: { label: string, type: AccommodationType, amount: number, icon: string }[],
}

export default function AccommodationSelect(props: AccommodationSelectProps) {
    const { accommodations } = props
    return (
        <div>
            {
                accommodations.map((item, i) => {
                    if (item.amount <= 0) return null
                    else if (item.type === 'EXTRA') return <ExtraBed key={i} />
                    else {
                        return <div className="flex items-center md:mb-[16px] mb-[12px]" key={i}>
                            {[0, item.amount - 1].map((i) => {
                                return <img src={item.icon} className="md:w-[24] w-[20] md:h-[24] h-[20] mr-[6px]" alt="bed icon" key={i} />
                            })}
                            <span className="md:text-[16px] text-[14px] md:leading-[24px] leading-[20px] font-semibold">{item.amount}&nbsp;{item.label}</span>
                        </div>
                    }
                })
            }
        </div>
    )
}