'use client'
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Table, Space } from "antd"
import type { TableProps } from 'antd';
import Image from "next/image";
import TariffDrawer from "./TariffDrawer";

interface TariffDataType {
	key: string;
	TariffName: string;
	TariffType: string;
	Nutrition: string;
	CancelReservation: string[];
	NumberOfRooms: number;
}

const columns: TableProps<TariffDataType>['columns'] = [
	{
		title: 'Tariff Name',
		dataIndex: 'TariffName',
		key: 'TariffName',
	},
	{
		title: 'Tariff type',
		dataIndex: 'TariffType',
		key: 'TariffType',
	},
	{
		title: 'Nutrition',
		dataIndex: 'Nutrition',
		key: 'Nutrition',
	},
	{
		title: 'Cancel Reservation',
		key: 'CancelReservation',
		dataIndex: 'CancelReservation',
	},
	{
		title: 'Number of rooms',
		key: 'NumberOfRooms',
		dataIndex: "NumberOfRooms",
	},
	{
		title: '',
		key: 'Actions',
		render: (_, record) => (
			<Space size="middle">
				<Image src="/icons/svg/Edit.svg" alt="search" title="search" width={24} height={24} />
				<Image src="/icons/svg/Delete.svg" alt="search" title="search" width={24} height={24} />
			</Space>
		),
	},
];

const data: TariffDataType[] = [
	{
		key: '1',
		TariffName: 'John Brown',
		TariffType: "Minimum number of nights",
		Nutrition: 'New York No. 1 Lake Park',
		CancelReservation: ['nice', 'developer'],
		NumberOfRooms: 3
	},
	{
		key: '1',
		TariffName: 'John Brown',
		TariffType: "Minimum number of nights",
		Nutrition: 'New York No. 1 Lake Park',
		CancelReservation: ['nice', 'developer'],
		NumberOfRooms: 5
	}

];
export default function Tariffs() {
	const [open, setOpen] = useState(false)
	const showDrawer = () => {
		setOpen(true)
	}
	const onClose = () => {
		setOpen(false)
	}

	return (
		<div className="space-y-4">
			<TariffDrawer onClose={onClose} open={open}/>

			<div className="flex flex-wrap md:justify-between space-y-4">
				<p className="text-[30px] text-semibold sm:text-[44px] text-left">Tariffs</p>
				<button className="w-full md:w-fit size-s outlined" onClick={showDrawer}><PlusOutlined style={{ fontSize: "2 0px" }} /> Add tariff</button>
			</div>
			<Table dataSource={data} columns={columns} />
		</div>
	)
}

