import { Slider, Input, Button, Rate, Checkbox } from "antd";
import CustomSwitch from "@/components/CustomSwitch";

type HotelFilterProps = {

}

export default function HotelFilter({ ...props }: HotelFilterProps & React.HTMLAttributes<HTMLDivElement>) {
    const houseTypes = ['Отели', 'Апартаменты', 'Гостевые дома', 'Дома и коттеджи', 'Хостелы', 'Виллы', 'Базы отдыха']
    const seaDistances = ['менее 500 м', 'менее 1 км', 'менее 3 км', 'более 3 км']
    const cityCenterDistances = ['менее 500 м', 'менее 1 км', 'менее 3 км', 'более 3 км']

    return (
        <div className={`${props.className ? props.className : ''}`}>
            <p className="text-[20px] font-[800] mb-[16px]">Цена</p>
            <CustomSwitch option1="За ночь" option2="За  5 ночей" className="mb-[16px]" />
            <Slider range min={0} max={90000} defaultValue={[0, 90000]} />
            <div className="grid grid-cols-2 gap-4 mt-[16px] mb-[24px]">
                <Input placeholder="от 1 000 ₽" />
                <Input placeholder="до 90 000+ ₽" />
            </div>
            <hr className="mb-[24px]" />
            <div>
                <p className="text-[24px] font-[800] mb-[16px]">Рейтинг</p>
                <Slider range min={0} max={90000} defaultValue={[0, 70000]} />
                <div className="grid grid-cols-2 gap-4 mt-[16px] mb-[16px]">
                    <Input placeholder="от 1" />
                    <Input placeholder="от 6" />
                </div>
                <Button type="primary" ghost className="mb-[24px]">Сбросить фильтр</Button>
            </div>
            <hr className="mb-[24px]" />
            <p className="text-[20px] font-[800] mb-[16px]">Звездность</p>
            <div className="flex items-center mb-[16px]">
                <Checkbox />&nbsp;&nbsp;<Rate disabled defaultValue={5} />
            </div>
            <div className="flex items-center mb-[16px]">
                <Checkbox />&nbsp;&nbsp;<Rate disabled defaultValue={4} count={4} />
            </div>
            <div className="flex items-center mb-[16px]">
                <Checkbox />&nbsp;&nbsp;<Rate disabled defaultValue={3} count={3} />
            </div>
            <div className="flex items-center mb-[16px]">
                <Checkbox />&nbsp;&nbsp;<Rate disabled defaultValue={2} count={2} />
            </div>
            <div className="flex items-center mb-[16px]">
                <Checkbox />&nbsp;&nbsp;<Rate disabled defaultValue={1} count={1} />
            </div>
            <div className="flex items-center mb-[16px]">
                <Checkbox />&nbsp;&nbsp;<span className="text-[18px]">без рейтинга</span>
            </div>
            <hr className="mb-[24px] mt-[24px]" />
            <div className="mb-[8px]">
                <p className="text-[20px] font-[800] mb-[16px]">Тип жилья</p>
                {houseTypes.map((houseType, i) => (
                    <div className="mb-[16px]" key={i}>
                        <Checkbox><span className="text-[18px]">{houseType}</span></Checkbox>
                    </div>
                ))}
            </div>
            <hr className="mb-[24px]" />
            <div className="mb-[24px]">
                <p className="text-[20px] font-[800] mb-[16px]">Удаленность от моря</p>
                {seaDistances.map((distance, i) => (
                    <div className="mb-[16px]" key={i}>
                        <Checkbox><span className="text-[18px]">{distance}</span></Checkbox>
                    </div>
                ))}
                <Button type="primary" ghost>Сбросить фильтр</Button>
            </div>
            <hr className="mb-[24px]" />
            <div className="mb-[-16px]">
                <p className="text-[20px] font-[800] mb-[16px]">Удаленность от моря</p>
                {cityCenterDistances.map((distance, i) => (
                    <div className="mb-[16px]" key={i}>
                        <Checkbox><span className="text-[18px]">{distance}</span></Checkbox>
                    </div>
                ))}
            </div>
        </div >
    )
}