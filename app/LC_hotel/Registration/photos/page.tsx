'use client'
import CustomSwitch from "@/components/CustomSwitch";
import MapComponent from "@/components/MapComponent";
import { PlusOutlined } from "@ant-design/icons";
import { Card, Radio, Input, Button } from "antd"
import Link from "next/link";
import { useState } from "react";


export default function Photos() {

	return (
		<div className="space-y-4">

			<div className="flex flex-wrap md:justify-between space-y-4">
				<p className="text-[30px] text-semibold sm:text-[44px] text-left">Адрес</p>
				<button className="w-full md:w-fit size-s outlined"><PlusOutlined style={{fontSize:"2 0px"}} /> Добавить фото</button>
			</div>
			<div>Добавьте фотографии снаружи и внутри отеля, номеров или комнат, санузлов. Минимум — 3 фотографии</div>
			{/* How to take selling photos for a hotel */}   
			<Link className="text-[16px] text-[#3C4EF2] font-medium block mb-[20px]" href="/LC_hotel/Registration">Как снимать продающие фото для отеля</Link>
		</div>
	)
}

