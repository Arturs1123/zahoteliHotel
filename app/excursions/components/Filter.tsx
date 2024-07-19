import PrimaryInput from "@/components/PrimaryInput";
import { Slider, Checkbox, Radio } from "antd";

type ExcursionsFilterProps = {}

const excursionTypes = [
    'Пешие',
    'Автобусные',
    'Автомобильные',
    'Джиппинг',
    'Обзорные',
    'Кемпинг',
    'Морские',
    'Можно с детьми',
]

const visitTypes = [
    'Индивидуальные',
    'Групповые',
    'Мини-группы',
]

const durations = [
    '1,5-3 часа',
    '3-5 часов',
    'Более 5 часов',
    'Однодневные',
]

export default function ExcursionsFilter({ ...props }: ExcursionsFilterProps & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={`p-1 ${props.className ? props.className : ''}`}>
            <p className="text-h6 mb-[16px]">Цена за билет</p>
            <Slider range min={0} max={90000} defaultValue={[0, 90000]} />
            <div className="grid grid-cols-2 gap-4 mt-[16px] mb-[24px]">
                <PrimaryInput placeholder="от 500 ₽" />
                <PrimaryInput placeholder="до 5 000+ ₽" />
            </div>
            <hr className="mb-[24px]" />
            <Checkbox><span className="text-p2">С гидом</span></Checkbox>
            <hr className="my-[24px]" />

            <p className="text-h6 mb-[16px]">Рейтинг</p>
            <Slider range min={0} max={90000} defaultValue={[0, 90000]} />
            <div className="grid grid-cols-2 gap-4 mt-[16px] mb-[24px]">
                <PrimaryInput placeholder="от 1" />
                <PrimaryInput placeholder="до 6" />
            </div>
            <p className="text-p2 text-accent cursor-pointer">Сбросить фильтр</p>
            <hr className="my-[24px]" />
            <div>
                <p className="text-h6 mb-[16px]">Рейтинг</p>
                {excursionTypes.map((type, i) => (
                    <div className="mb-[16px]" key={i}>
                        <Checkbox><span className="text-[18px]">{type}</span></Checkbox>
                    </div>
                ))}
                <p className="text-p2 text-accent cursor-pointer">Сбросить фильтр</p>
            </div>
            <hr className="my-[24px]" />
            <div>
                <p className="text-h6 mb-[16px]">Тип посещения</p>
                {visitTypes.map((type, i) => (
                    <div className="mb-[16px]" key={i}>
                        <Radio><span className="text-[18px]">{type}</span></Radio>
                    </div>
                ))}
                <p className="text-p2 text-accent cursor-pointer">Сбросить фильтр</p>
            </div>
            <hr className="my-[24px]" />
            <div className="mb-[-16px]">
                <p className="text-h6 mb-[16px]">Длительность</p>
                {durations.map((duration, i) => (
                    <div className="mb-[16px]" key={i}>
                        <Radio><span className="text-[18px]">{duration}</span></Radio>
                    </div>
                ))}
            </div>
        </div>
    )
}