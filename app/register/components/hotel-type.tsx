import { Input } from "antd"
import { useEffect, useState } from "react";
import HotelTypeItem from "./hotel-type-item";
import { getHotelTypesData } from '../../backend_apis';
import FillButton from "@/components/FillButton";
import { toast } from "react-toastify"

export default function ChooseHotelType({ onChoose = () => { }, onNext = () => { }, onInputHotelNameChange = () => { } }: { onChoose?: (type: string) => void, onNext?: () => void, onInputHotelNameChange?: (v: string) => void }) {
	const [hotelTypesData, setHotelTypesData] = useState<{ thumb: string, label: string }[]>([])
	const [selectedType, setSelectedType] = useState<string | undefined>(undefined);
	const [hotelName, setHotelName] = useState('')

	const handleSelect = (type: string) => {
		setSelectedType(type);
		onChoose(type)
	};

	useEffect(() => {
		getHotelTypesData()
			.then(res => setHotelTypesData(res))
	}, [])

	const handleNextClick = () => {
		if (!selectedType || !hotelName) {
			return toast.error('select hotel type and input hotel name')
		}
		onNext()
	}

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		setHotelName(e.currentTarget.value)
		onInputHotelNameChange(e.currentTarget.value)
	}

	return (
		<div className="md:mt-[32px] mt-[24px]">
			<h3 className="md:text-h3 text-h4 md:mb-[32px] mb-[20px]">Что хотите сдавать?</h3>
			<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[16px] md:mb-[32px] mb-[20px]">
				{
					hotelTypesData.map((type, i) =>
						<HotelTypeItem thumb={type.thumb} label={type.label} selected={selectedType === type.label} key={i} onSelect={handleSelect} />
					)
				}
			</div>
			<div className="text-center md:mb-[32px] mb-[20px]">
				<Input placeholder="Укажите название объекта" value={hotelName} className="p-[12px] md:max-w-[588px]" onChange={handleChange} />
			</div>
			<div className="flex justify-center">
				<FillButton caption="Далее" withArrow onBtnClick={handleNextClick} />
			</div>
		</div>
	)
}

