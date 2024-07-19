import Radio from "@/components/Radio"

type NutririonProps = {
    nutrition: { label: string }[]
}

export default function Nutrition({ nutrition }: NutririonProps) {
    return (
        <div>
            {
                nutrition.map((item, i) => <Radio label={item.label} key={i} className="md:mb-[16px] mb-[12px]" />)
            }
        </div>
    )
}