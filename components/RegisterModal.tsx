import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Select, Form, Input, Modal } from 'antd';
import Link from 'next/link';
import FullWidthBtn from './FullWidthBtn';
import FillButton from './FillButton';
const { Option } = Select

interface SignupModalProps {
	isOpen?: boolean;
	onClose?: () => void;
}

const positions = [
	{ label: 'owner', value: 'owner' },
	{ label: 'moderator1', value: 'moderator1' },
	{ label: 'moderator2', value: 'moderator2' },
]

export default function RegisterModal({ isOpen = false, onClose = () => { } }: SignupModalProps) {
	const onFinish = (values: any) => {
		console.log('Received values of form: ', values);
	};
	const title = <img src="/icons/svg/Logo.svg" className="w-[180px]"></img>

	const handleSubmit = (values: { username: string; password: string; email: string }) => {
		console.log('Signup values:', values);
		onClose();
	};
	return (

		<Modal
			title={title}
			centered
			open={isOpen}
			footer={null}
			onCancel={onClose}
			destroyOnClose
		>
			<div className='px-[8px] py-[12px]'>
				<h4 className="text-h4 mb-[24px]">регистрация кабинета</h4>
				<Form
					name="register-form"
					className="login-form"
					initialValues={{ remember: true }}
					onFinish={onFinish}
					layout='vertical'
					requiredMark={false}
				>
					<label className='text-[24px] font-[600] mb-[20px] block'>Как вас зовут?</label>
					<Form.Item
						name="name"
						rules={[{ required: true, message: 'Пожалуйста, введите свое имя пользователя!' }]}
					>
						<Input placeholder="фио" className='p-[12px] text-[16px] rounded-[8px]' />
					</Form.Item>

					<label className='text-[24px] font-[600] mb-[20px] block'>Ваша должность?</label>
					<Form.Item
						name="position"
						rules={[{ required: true, message: 'Пожалуйста, выберите вашу позицию' }]}
					>
						<Select placeholder="Виберите из списка" className='customize-select' >
							<Option value="male">Male</Option>
							<Option value="female">Female</Option>
							<Option value="other">Other</Option>
						</Select>
					</Form.Item>

					<label className='text-[24px] font-[600] mb-[20px] block'>Контактные данные</label>
					<Form.Item required>
						<Form.Item
							name="email"
							rules={[{ required: true, message: "Введите адрес электронной почты, пожалуйста", type: 'email' }]}
							style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
						>
							<Input placeholder="почта" className='p-[12px] text-[16px] rounded-[8px]' />
						</Form.Item>

						<Form.Item
							name="telephone"
							rules={[{ required: true, message: "Введите номер телефона, пожалуйста" }]}
							style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
						>
							<Input placeholder="телефон" className='p-[12px] text-[16px] rounded-[8px]' />
						</Form.Item>
					</Form.Item>

					<label className='text-[24px] font-[600] mb-[20px] block'>Придумайте пароль</label>
					<Form.Item
						name="password"
						rules={[{ required: true, message: 'Пожалуйста, введите свой пароль!' }]}
					>
						<Input.Password placeholder="Пароль" className='p-[12px] text-[16px] rounded-[8px]' />
					</Form.Item>
					<Form.Item>
						<FillButton caption='зарегистрироваться' isFullWidth size='md' />
					</Form.Item>
				</Form>
			</div>
		</Modal>
	);
};
