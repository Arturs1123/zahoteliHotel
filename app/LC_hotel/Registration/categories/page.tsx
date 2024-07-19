'use client'
import CustomSwitch from "@/components/CustomSwitch";
import MapComponent from "@/components/MapComponent";
import { PlusOutlined } from "@ant-design/icons";
import { Card, Radio, Input, Checkbox } from "antd"
import Link from "next/link";
import { useState } from "react";
import InputAmount from "./InputAmount";

const HotelInfrastructureData = [
	{
		"value": "ATM",
		"text": "Банкомат",
	}, {
		"value": "Bicycles for rent",
		"text": "Вертолетная площадка",
	}, {
		"value": "SPA center",
		"text": "Водные виды спорта",
	}, {
		"value": "Helipad",
		"text": "Горные лыжи",
	}, {
		"value": "Aquapark",
		"text": "Каток",
	}, {
		"value": "Bowling",
		"text": "Лес рядом",
	}, {
		"value": "Water sports",
		"text": "Бильярдный клуб",
	}, {
		"value": "Theater",
		"text": "Парк аттракционов",
	},

]
export default function RoomCategories() {

	return (
		<div className="space-y-4">
			<p className="text-[30px] text-semibold sm:text-[44px] text-left">Room Categories</p>
			<div className="bg-white grid gap-y-8 p-6 rounded-2xl md:p-8">

				<p className="text-[30px]">Superior room</p>
				<div className="grid md:grid-cols-5 md:divide-x divide-gray-100 gap-y-4">
					<div className="grid md:pr-8">
						<label className="text-[#919494] text-base mb-5">Room size</label>
						<div>
							<Input placeholder="Укажите название объекта" />
						</div>
					</div>
					<InputAmount label="Number of rooms" />
					<InputAmount label="Number of adults" />
					<InputAmount label="Number of children's places" />
					<InputAmount label="Number of additional places" />
				</div>

				<p className="text-[24px] text-semibold">Accommodation</p>
				<div className="grid md:grid-cols-3 md:divide-x divide-gray-100 gap-y-4">

					<InputAmount label="Number of single beds" />
					<InputAmount label="Number of double beds" />
					<InputAmount label="Number of additional beds" />
				</div>
				<p className="text-[24px] text-semibold">Room amenities</p>


				<div className="grid md:grid-cols-3 gap-y-4">
					<div className="grid gap-y-3">
						<div ><img src="/icons/svg/LC_Hotel/Reseption.svg" className="inline w-4 md:w-5" /><span className="mx-2 font-semibold">Equipment</span> </div>
						{HotelInfrastructureData.map((c, i) =>
							<div key={i}>
								<Checkbox />
								<span className="ml-2 text-base">{c.text}</span>
							</div>
						)}

					</div>
					<div className="grid gap-y-3">
						<div ><img src="/icons/svg/LC_Hotel/Reseption.svg" className="inline w-4 md:w-5" /><span className="mx-2 font-semibold">Equipment</span> </div>

						{HotelInfrastructureData.map((c, i) =>
							<div key={i}>
								<Checkbox />
								<span className="ml-2 text-base">{c.text}</span>
							</div>
						)}
					</div>
					<div className="grid gap-y-3">
						<div ><img src="/icons/svg/LC_Hotel/Reseption.svg" className="inline w-4 md:w-5" /><span className="mx-2 font-semibold">Equipment</span> </div>

						{HotelInfrastructureData.map((c, i) =>
							<div key={i}>
								<Checkbox />
								<span className="ml-2 text-base">{c.text}</span>
							</div>
						)}
					</div>
				</div>
			</div>
			<div className="bg-white grid gap-y-8 p-6 rounded-2xl md:p-8">
				<p className="text-[#3C4EF2] font-bold">+ Add category</p>
			</div>

		</div>
	)
}

