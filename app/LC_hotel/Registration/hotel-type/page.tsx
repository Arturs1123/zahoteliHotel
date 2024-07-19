'use client'
import { Card, Radio, Input, Button } from "antd"
import { useState } from "react";
import clsx from "clsx";

const data = [
	{
		value: "Hotel",
		name: "Отель",
		src: "/LC_hotel/hotel_types/Hotel.png",
	}, {
		value: "Apartments",
		name: "Апартаменты",
		src: "/LC_hotel/hotel_types/Apartments.png",
	}, {
		value: "House,cottage",
		name: "Дом, коттедж",
		src: "/LC_hotel/hotel_types/House,cottage.png",
	}, {
		value: "Hostel",
		name: "Хостел",
		src: "/LC_hotel/hotel_types/Hostel.png",
	},
]

export default function ChooseHotelType() {
	const [selectedValue, setSelectedValue] = useState('Hotel');

	const handleChange = (e: any) => {
		setSelectedValue(e.target.value);
	};
	return (
		<div className="choose-hoteltype space-y-4">
			<p className="text-[30px] text-semibold sm:text-[44px] text-left">Что хотите сдавать?</p>
			<Radio.Group className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" onChange={handleChange} value={selectedValue}>
				{
					data.map((c, i) =>
						<Card
							key={i}
							className={clsx(
								"my-[12px] min-w-[240px] p-6 border-x",
								{
									'border-[#3C4EF2]' : c.value == selectedValue,
								},
							)}
							hoverable
							cover={<img alt="example" src={c.src} />}
						>
							<div className="flex justify-between">
								<span className="text-extrabold text-[20px]">{c.name}</span>
								<Radio value={c.value}></Radio>
							</div>
						</Card>
					)
				}
			</Radio.Group>
			<div className="flex flex-col mx-auto max-w-[588px]">
				<Input placeholder="Укажите название объекта" />
			</div>
		</div>
	)
}

