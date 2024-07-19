import Image from "next/image"

const Panel = ({ icon = '', title = '', items = [], ...props }: { icon: string, title: string, items?: string[] } & React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={`w-[270px] ${props.className ? props.className : ''}`} >
            <div className="grid grid-flow-col gap-[8px] justify-start mb-[12px]">
                <Image src={icon} width={32} height={32} alt="icon" className="mr-[8px]" />
                <h6 className="text-h6">{title}</h6>
            </div>
            <ul className="list-disc pl-[26px]">
                {items?.map((item, i) => <li key={i} className="text-p3 pb-1">{item}</li>)}
            </ul>
        </div >
    )
}

type HotelOtherInfoProps = { infos: { type: string, title: string, items: string[] }[] }

export default function HotelOtherInfo({ infos }: HotelOtherInfoProps) {
    return (
        <div className="md:px-[120px] px-[16px] md:py-[40px] py-[16px] md:grid xl:grid-cols-4 md:grid-cols-2">
            <div>
                <Panel icon="/icons/svg/building-4.svg" title="Общее" items={infos.find(info => info.title === 'Общее')?.items} className="md:mb-[40px] mb-[20px]" />
                <Panel icon="/icons/svg/Like32.svg" title="Красота и здоровье" items={infos.find(info => info.title === 'Красота и здоровье')?.items} className="md:mb-[40px] mb-[20px]" />
            </div>
            <div>
                <Panel icon="/icons/svg/apple-one 1.svg" title="Питание и напитки" items={infos.find(info => info.title === 'Питание и напитки')?.items} className="md:mb-[40px] mb-[20px]" />
            </div>
            <div>
                <Panel icon="/icons/svg/wheelchair 1.svg" title="Доступность" items={infos.find(info => info.title === 'Доступность')?.items} className="md:mb-[40px] mb-[20px]" />
                <Panel icon="/icons/svg/people-speak 1.svg" title="Персонал говорит" items={infos.find(info => info.title === 'Персонал говорит')?.items} className="md:mb-[40px] mb-[20px]" />
            </div>
            <div>
                <Panel icon="/icons/svg/transport 1.svg" title="Услуги и удобства" items={infos.find(info => info.title === 'Услуги и удобства')?.items} className="md:mb-[40px] mb-[20px]" />
                <Panel icon="/icons/svg/car.svg" title="Транспорт" items={infos.find(info => info.title === 'Транспорт')?.items} className="md:mb-[40px] mb-[20px]" />
            </div>
        </div>
    )
}