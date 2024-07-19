import CustomSwitch from '@/components/CustomSwitch';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Switch, Radio } from 'antd';
const { Option } = Select;

interface TariffDrawerProps {
	open: boolean,
	onClose: () => void,
}

export default function TariffDrawer({ open, onClose }: TariffDrawerProps) {
	const title = <div className='text-[30px]'>New Tariff</div>
	return (
		<Drawer
			title={title}
			width={720}
			onClose={onClose}
			open={open}
			destroyOnClose
			styles={{
				body: {
					paddingBottom: 80,
				},
			}}
		>
			<Form layout="vertical" hideRequiredMark>
				<p className='text-[24px] mb-5 font-semibold'>Tariff name and type</p>
				<Row gutter={16}>
					<Col span={12}>
						<Form.Item
							name="name"
							rules={[{ required: true, message: 'Please enter user name' }]}
							extra="This name will only be visible to hotel staff"
						>
							<Input placeholder="Employee title" />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							name="url"
							rules={[{ required: true, message: 'Please enter url' }]}
							extra="This is the name guests will see"
						>
							<Input
								placeholder="Name for guests"
							/>
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={16}>
					<Col span={24}>
						<Form.Item
							name="owner"
							rules={[{ required: true, message: 'Please select an owner' }]}
						>
							<Select placeholder="Tariff type">
								<Option value="Minimum number of nights">Minimum number of nights</Option>
								<Option value="With board">With board</Option>
							</Select>
						</Form.Item>
					</Col>
				</Row>
				<div className="Wi-Fi-in-rooms space-y-4">
					<div>
						<span className='text-[24px] font-semibold'>Power included</span>
						<Switch />
					</div>
					<Radio.Group className="flex flex-col space-y-4">
						<Radio value="Included in the price">Breakfast only</Radio>
						<Radio value="Breakfast and dinner">Breakfast and dinner</Radio>
						<Radio value="Breakfast lunch and dinner">Breakfast lunch and dinner</Radio>
						<Radio value="All inclusive">All inclusive</Radio>
						<Radio value="Ultra all inclusive">Ultra all inclusive</Radio>
					</Radio.Group>
				</div>

				<div className='space-y-4 mt-4'>
					<span className='text-[24px] font-semibold'>Refund Rate</span>
					<div className="choose-time grid md:grid-cols-2 gap-4">
						<CustomSwitch className="" option1="Non-refundable" option2="Returnable" />
						<Input placeholder="Specify return conditions" />
					</div>
				</div>
				<div className='space-y-4 my-8'>
					<span className='text-[24px] font-semibold'>Link numbers to this tariff</span>
					<Form.Item
						name="owner"
						rules={[{ required: true, message: 'Please select an owner' }]}
					>
						<Select placeholder="Select from list">
							<Option value="one">1</Option>
							<Option value="two">2</Option>
							<Option value="three">3</Option>
							<Option value="four">4</Option>
							<Option value="five">5</Option>
							<Option value="six">6</Option>
						</Select>
					</Form.Item>

				</div>
				<hr/>
				<button className='w-full md:w-fit size-s primary my-8'>Add tariff</button>

			</Form>
		</Drawer>
	)
}