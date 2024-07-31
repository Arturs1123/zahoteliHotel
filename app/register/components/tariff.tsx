import { useState } from "react";
import FillButton from "@/components/FillButton";
import GhostButton from "@/components/GhostButton";
import { Input, Drawer, Select, Radio } from "antd";
import Switch from "@/components/Switch";
import CustomSwitch from "@/components/CustomSwitch";
import type { RadioChangeEvent } from 'antd';
import { toast } from "react-toastify";
export type TariffItemType = {
    tariffName: string,
    tariffType: string,
    nutrition: string,
    cancelReservation: string,
    roomCategory: { title: string, amount: number, thumbs: string[] }
}

export default function Tariff({ onApply = () => { }, roomCategories = [] }: { onApply?: (tariffs: TariffItemType[]) => void, roomCategories?: { title: string, amount: number, thumbs: string[] }[] }) {

    const [tariffs, setTariffs] = useState<TariffItemType[] | []>([])

    const [open, setOpen] = useState(false);
    const { Option } = Select
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        onApply(tariffs)
    }

    const handleClickAdd = () => {
        showDrawer()
    }

    const tariffTypes = [
        { label: 'abc', value: 'abc1' },
        { label: 'abc', value: 'abc2' },
        { label: 'abc', value: 'abc3' },
        { label: 'abc', value: 'abc4' },
        { label: 'abc', value: 'abc5' },
    ]
    const [categoryTitle, setCategoryTitle] = useState<string>('')
    const handleCategoryLinkChange = (v: string) => {
        setCategoryTitle(v)
    }

    const [employeeTitle, setEmployeeTitle] = useState<string>('')
    const [nameForGuest, setNameForGuest] = useState<string>('')
    const [tariffType, setTariffType] = useState<string>('')
    const [powerIncluded, setPowerIncluded] = useState<boolean>(false)
    const [foodType, setFoodType] = useState<string>('')
    const [returnable, setReturnable] = useState<string>('')
    const [condition, setCondition] = useState<string>('')

    const handleEmployeeTitleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setEmployeeTitle(e.currentTarget.value)
    }

    const handleNameForGuestChange = (e: React.FormEvent<HTMLInputElement>) => {
        setNameForGuest(e.currentTarget.value)
    }

    const handleTypeChange = (v: string) => {
        setTariffType(v)
    }

    const handleSwitchChange = (switchValue: boolean) => {
        setPowerIncluded(switchValue)
    }

    const handleRadioChange = (e: RadioChangeEvent) => {
        setFoodType(e.target.value)
    }

    const handleReturnableChange = (v: string) => {
        setReturnable(v)
    }

    const handleConditionChange = (e: React.FormEvent<HTMLInputElement>) => {
        setCondition(e.currentTarget.value)
    }
    const handleApplyClick = () => {
        if (!employeeTitle || !nameForGuest || !tariffType || !categoryTitle) {
            return toast.error('input all fields')
        }
        const newTariff: TariffItemType = {
            tariffName: employeeTitle,
            tariffType: tariffType,
            nutrition: powerIncluded ? foodType : 'No power',
            cancelReservation: returnable ? condition : 'Non-refunable',
            roomCategory: roomCategories.find(c => c.title === categoryTitle) as { title: string, amount: number, thumbs: string[] }
        }
        console.log(newTariff)
        const _tariffs = [...tariffs]
        _tariffs.push(newTariff)
        setTariffs(_tariffs)
    }

    const handleDelete = (idx: number) => {
        const _tariffs = tariffs.filter((t, i) => i !== idx)
        setTariffs(_tariffs)
    }

    return (
        <div className="md:mt-[32px] mt-[48px]">
            <div className="flex items-end justify-between md:mb-[32px] mb-[20px]">
                <h3 className="md:text-h3 text-h4">Тарифы</h3>
                <GhostButton caption="Добавить тариф" onBtnClick={handleClickAdd} />
            </div>
            <div className="sm:block hidden mb-[32px] overflow-auto">
                <table className="w-full bg-[#FFFFFF] ">
                    <thead>
                        <tr>
                            <th className="p-[16px] text-p3 text-custom-gray bg-[#EEEEEE] text-left">Название тарифа</th>
                            <th className="p-[16px] text-p3 text-custom-gray bg-[#EEEEEE] text-left">Тип тарифа</th>
                            <th className="p-[16px] text-p3 text-custom-gray bg-[#EEEEEE] text-left">Питание</th>
                            <th className="p-[16px] text-p3 text-custom-gray bg-[#EEEEEE] text-left">Отмена бронирования</th>
                            <th className="p-[16px] text-p3 text-custom-gray bg-[#EEEEEE] text-left">Кол-во номеров</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tariffs.map((tariff, i) => (
                                <tr key={i}>
                                    <td className="text-p3 p-[16px] h-[56px]">{tariff.tariffName}</td>
                                    <td className="text-p3 p-[16px] h-[56px]">{tariff.tariffType}</td>
                                    <td className="text-p3 p-[16px] h-[56px]">{tariff.nutrition}</td>
                                    <td className="text-p3 p-[16px] h-[56px]">{tariff.cancelReservation}</td>
                                    <td className="text-p3 p-[16px] h-[56px]">
                                        <span className="flex items-center">
                                            <span className="w-[180px] flex items-center">
                                                <span className="text-p3 mr-[8px]">{tariff.roomCategory.amount}</span>
                                                <span className="relative w-[120px] block h-[40px]">
                                                    {
                                                        tariff.roomCategory.thumbs.map((thumb, i) => {
                                                            if (i > 5) return null
                                                            const left = `${i * 20}px`
                                                            const zindex = i * 10
                                                            const className = `border border-[#FFFFFF] rounded-[8px] absolute top-0 w-[40px] h-[40px] object-cover`
                                                            return <img key={i} src={thumb} className={className} style={{ left: left, zIndex: zindex }} />
                                                        })
                                                    }
                                                </span>
                                            </span>
                                            <span><img src="/icons/svg/Delete.svg" alt="delete" className="w-[24px] h-auto cursor-pointer" onClick={() => handleDelete(i)} /></span>
                                        </span>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="sm:hidden block">
                {
                    tariffs.map((tariff, i) => (
                        <div key={i} className="p-[16px] rounded-[16px] bg-[#FFFFFF] mb-[20px] shadow-sm">
                            <p className="text-btn mb-[16px]">{tariff.tariffName}</p>
                            <div className="flex items-center justify-between mb-[8px]">
                                <span className="text-p4 text-custom-gray">Тип тарифа</span>
                                <span className="text-p3">{tariff.tariffType}</span>
                            </div>
                            <div className="flex items-center justify-between mb-[8px]">
                                <span className="text-p4 text-custom-gray">Питание</span>
                                <span className="text-p3">{tariff.nutrition}</span>
                            </div>
                            <div className="flex items-center justify-between mb-[8px]">
                                <span className="text-p4 text-custom-gray">Отмена бронирования</span>
                                <span className="text-p3">{tariff.cancelReservation}</span>
                            </div>
                            <div className="flex items-center justify-between mb-[16px]">
                                <span className="text-p4 text-custom-gray">Кол-во номеров</span>
                                <span className="text-p3 flex items-center">
                                    <span className="mr-[8px]">{tariff.roomCategory.amount}</span>
                                    <span className="w-[120px] block relative h-[40px]">
                                        {
                                            tariff.roomCategory.thumbs.map((thumb, i) => {
                                                if (i > 5) return null
                                                const left = `${i * 20}px`
                                                const zindex = i * 10
                                                const className = `border border-[#FFFFFF] rounded-[8px] absolute top-0 w-[40px] h-[40px] object-cover`
                                                return <img key={i} src={thumb} className={className} style={{ left: left, zIndex: zindex }} />
                                            })
                                        }
                                    </span>
                                </span>
                            </div>
                            <GhostButton caption="Удалить" onBtnClick={() => handleDelete(i)} />
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-center">
                <FillButton caption="Сохранить и отправить заявку" size="sm" onBtnClick={handleSubmit} />
            </div>
            <Drawer title={<h4 className="md:text-h4 text-h5">Новый тариф</h4>} onClose={onClose} open={open} width={800}>
                <div className="px-[32px] ">
                    <h5 className="md:text-h5 text-h6 mb-[20px]">Название и тип тарифа</h5>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-[24px] mb-[20px]">
                        <div>
                            <Input placeholder="Название для сотрудников" className="p-[12px] mb-[4px]" value={employeeTitle} onChange={handleEmployeeTitleChange} />
                            <p className="md:text-p5 text-p6 text-custom-gray">Это название будут видеть только сотрудники отеля</p>
                        </div>
                        <div>
                            <Input placeholder="Название для сотрудников" className="p-[12px] mb-[4px]" value={nameForGuest} onChange={handleNameForGuestChange} />
                            <p className="md:text-p5 text-p6  text-custom-gray">Это название будут видеть только сотрудники отеля</p>
                        </div>
                    </div>
                    <Select placeholder="Тип тарифа" className='customize-select w-full mb-[32px]' onChange={handleTypeChange} >
                        {tariffTypes.map((option) => <Option value={option.value} key={option.value}>{option.label}</Option>)}
                    </Select>
                    <div>
                        <div className="flex mb-[24px] items-center">
                            <h5 className='md:text-h5 text-h6 mr-[16px]'>Питание включено</h5>
                            <Switch onSwitchChange={handleSwitchChange} />
                        </div>
                        <div className="mb-[32px]">
                            <Radio.Group className="grid grid-cols-1 gap-[16px]" disabled={!powerIncluded} onChange={handleRadioChange}>
                                <Radio value="Included in the price"><span className="text-p3">Только завтрак</span></Radio>
                                <Radio value="Breakfast and dinner"><span className="text-p3">Завтрак и ужин</span></Radio>
                                <Radio value="Breakfast lunch and dinner"><span className="text-p3">Завтрак, обед и ужин</span></Radio>
                                <Radio value="All inclusive"><span className="text-p3">Все включено</span></Radio>
                                <Radio value="Ultra all inclusive"><span className="text-p3">Ультра все включено</span></Radio>
                            </Radio.Group>
                        </div>
                        <h5 className="md:text-h5 text-h6 mb-[24px]">Тариф по возврату денег</h5>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-[24px] mb-[32px]">
                            <CustomSwitch option1="Невозвратный" option2="Возвратный" selectedValue="Возвратный" onSwitchChange={handleReturnableChange} />
                            <Input className="p-[12px]" placeholder="Укажите условия возврата" disabled={returnable !== 'Возвратный'} onChange={handleConditionChange} />
                        </div>
                        <h5 className="md:text-h5 text-h6 mb-[20px]">Привяжите номера к этому тарифу</h5>
                        <Select className="customize-select w-full" placeholder="Выбрать из списка" onChange={handleCategoryLinkChange}>
                            {roomCategories.map((option) => <Option value={option.title} key={option.title}>{option.title}</Option>)}
                        </Select>
                    </div>
                </div>
                <div className="p-[32px]">
                    <FillButton caption="Добавить тариф" size="sm" onBtnClick={handleApplyClick} />
                </div>
            </Drawer>
        </div>
    )
}