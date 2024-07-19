'use client'
import CustomSwitch from "@/components/CustomSwitch";
import MapComponent from "@/components/MapComponent";
import { Card, Radio, Input, Button } from "antd"
import { useState } from "react";

export default function Address() {

	return (
		<div className="md:grid md:grid-cols-2 md:gap-4 space-y-4">

			<div className="address-input-form">
				<p className="text-[30px] text-semibold text-[#292D32] md:text-[44px]">Адрес</p>
				<div className="bg-white rounded-lg w-full p-2 md:p-6 space-y-4">
					<p className="a-country font-medium text-base text-gray-400">Страна</p>
					<CustomSwitch option1="Россия" option2="Абхазия" />
					<div className=" grid grid-cols-2 gap-4 md:grid-cols-4">
						<Input name="Region, region, edge" placeholder="Регион, область, край" className="col-span-2 my-1 md:col-span-2" />
						<Input name="City, town" placeholder="Город, поселок" className="col-span-2 my-1 md:col-span-2" />
						<Input name="Street" placeholder="Улица" className="col-span-2 my-1 md:col-span-2" />
						<Input name="House" placeholder="Дом" className="col-span my-1" />
						<Input name="Housing" placeholder="Корпус" className="col-span my-1" />
					</div>
				</div>
			</div>
			<MapComponent />
		</div>
	)
}

