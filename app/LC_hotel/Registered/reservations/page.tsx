'use client'
import { Table, Space, Input, ConfigProvider } from "antd"
import type { TableProps } from 'antd';
import Image from "next/image";
import Search from "./Search";
import { SearchOutlined } from '@ant-design/icons';
import Empty from "../Empty";

interface BookingDataType {
	key: string;
	Booking: any;
	BookingDate: any;
	Guests: any;
	DatesOfStay: any;
	Prepayment: any;
	PaymentUponArrival: any;
}

const columns: TableProps<BookingDataType>['columns'] = [
	{
		title: 'Бронирование',
		dataIndex: 'Booking',
		key: 'Booking',
		render: (_, record) => (
			<div className="font-medium">
				<div className="text-base text-[#3C4EF2]">ID 4738</div>
				<div className="text-sm text-[#919494]">SUPERIOR</div>
			</div>
		),
	},
	{
		title: 'Дата бронирования',
		dataIndex: 'BookingDate',
		key: 'BookingDate',
		render: (_, record) => (
			<div className="font-medium">
				<div className="text-base text-[#292D32]">12 марта 2024, 15:30</div>
				{
					record.BookingDate.confirmed ?
						<div className="text-sm text-[#3BA87E]">Подтверждён</div> :
						<div className="text-sm text-[#E13914]">Отменён</div>
				}
			</div>
		)
	},
	{
		title: 'Гости',
		dataIndex: 'Guests',
		key: 'Guests',
		render: (_, record) => (
			<div className="font-medium">
				<div className="text-base text-[#292D32]">12 марта 2024, 15:30</div>
				<div className="text-sm text-[#919494]">2 взрослых, 1 ребенок</div>
			</div>
		)
	},
	{
		title: 'Даты проживания',
		key: 'DatesOfStay',
		dataIndex: 'DatesOfStay',
		render: (_, record) => (
			<div className="font-medium">
				<div className="text-base text-[#292D32]">12.08. 2024– 20.08.2024</div>
				<div className="text-sm text-[#919494]">7 ночей</div>
			</div>
		)
	},
	{
		title: 'Предоплата',
		key: 'Prepayment',
		dataIndex: "Prepayment",
		render: (_, record) => (
			<div className="font-medium">
				<div className="text-base text-[#292D32]">9 000 ₽ </div>
				{record.Prepayment.paid ?
					<div className="text-sm text-[#3BA87E]">Оплачено</div>
					:
					<div className="text-sm text-[#919494]">Не оплачено</div>
				}
			</div>
		)
	},
	{
		title: 'Оплата при заселении',
		key: 'Actions',
		render: (_, record) => (
			<div className="font-medium">
				<div className="text-base text-[#292D32]">76 000 ₽ </div>
			</div>
		)
	},
];

const data: BookingDataType[] = [
	{
		key: "1",
		Booking: { id: "4738", role: "SUPERIOR" },
		BookingDate: { date: "12 марта 2024, 15:30", confirmed: true },
		Guests: { registeredname: "Лермонтов М.Ю.", people: { adults: 2, children: 1 } },
		DatesOfStay: { from: "12.08. 2024", until: "20.08.2024", nights: 7 },
		Prepayment: { price: 9000, paid: true },
		PaymentUponArrival: 76000,
	},
	{
		key: "2",
		Booking: { id: "4738", role: "SUPERIOR" },
		BookingDate: { date: "12 марта 2024, 15:30", status: false },
		Guests: { registeredname: "Лермонтов М.Ю.", people: { adults: 2, children: 1 } },
		DatesOfStay: { from: "12.08. 2024", until: "20.08.2024", nights: 7 },
		Prepayment: { price: 9000, paid: false },
		PaymentUponArrival: 76000,
	},
];

export default function Reservations() {
	return (
		data.length ?
			<div className="space-y-4 md:pt-[40px] md:pb-[80px] space-y-6">
				<div className="flex flex-wrap md:justify-between space-y-4">
					<div className="text-[24px] text-semibold md:text-[30px] font-semibold">Бронирования</div>
					<Input
						placeholder="Поиск"
						className="float-right w-full md:max-w-[300px] !mt-0 !py-0"
						suffix={
							<SearchOutlined className="text-[24px] text-[#B5B5B5]" />
						}
					/>
				</div>
				<ConfigProvider
					theme={{
						components: {
							Table: {
								/* here is your component tokens */
								headerBg: "#EEEEEE",
								headerColor: "#919494"
							},
						},
					}}
				>
					<Table dataSource={data} pagination={false} columns={columns} loading={false} />
				</ConfigProvider>
			</div> :
			<Empty emptyText="Пока здесь пусто" />
	)
}