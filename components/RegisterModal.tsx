import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Select, Form, Input, Modal } from 'antd';
import Link from 'next/link';
const { Option } = Select

interface SignupModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSwitchToLogin: () => void;
}
export default function RegisterModal({ isOpen, onClose, onSwitchToLogin }: SignupModalProps) {
	const onFinish = (values: any) => {
		console.log('Received values of form: ', values);
		onSwitchToLogin();
	};
	const title = <img src="/icons/svg/Logo.svg" className="w-[180px]"></img>

	const handleSubmit = (values: { username: string; password: string; email: string }) => {
		console.log('Signup values:', values);
		onClose();
	};
	return (

		<Modal
			className="m-[32px] RegisterModal"
			title={title}
			centered
			open={isOpen}
			width={600}
			footer={null}
			onCancel={onClose}
			destroyOnClose
		>
			<p className="w-full font-bold text-[30px] mb-3">регистрация кабинета</p>

			<Form
				name="register-form"
				className="login-form"
				initialValues={{ remember: true }}
				onFinish={onFinish}
				layout='vertical'
				requiredMark={false}
			>
				<Form.Item
					name="What is your name?"
					label="Как вас зовут"
					rules={[{ required: true, message: 'Пожалуйста, введите свое имя пользователя!' }]}
				>
					<Input placeholder="фио" />
				</Form.Item>

				<Form.Item
					name="Your position"
					label="Ваша должность?"
					rules={[{ required: true, message: 'Пожалуйста, выберите вашу позицию' }]}
				>
					<Select placeholder="Виберите из списка">
						<Option value="male">Male</Option>
						<Option value="female">Female</Option>
						<Option value="other">Other</Option>
					</Select>
				</Form.Item>

				{/* contact details */}
				<Form.Item label="Контактные данные" style={{ marginBottom: 0 }} required>
					{/* Mail */}
					<Form.Item
						name="почта"
						rules={[{ required: true, message: "Введите адрес электронной почты, пожалуйста", type: 'email' }]}
						style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
					>
						<Input placeholder="почта" />
					</Form.Item>

					{/* telephone */}
					<Form.Item
						name="телефон"
						rules={[{ required: true, message: "Введите номер телефона, пожалуйста" }]}
						style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
					>
						<Input placeholder="телефон" />
					</Form.Item>
				</Form.Item>

				<Form.Item
					name="password"
					label="Придумайте пароль"
					rules={[{ required: true, message: 'Пожалуйста, введите свой пароль!' }]}
				>
					<Input.Password
						placeholder="Пароль"
					/>
				</Form.Item>
				{/* forgot password */}
				<Link className="text-[16px] text-[#3C4EF2] font-medium block mb-[20px]" href="/LC_hotel">
					Не помню пароль
				</Link>

				{/* register button */}
				<Form.Item>
					<button className='primary size-m w-full mb-[20px]'>
						зарегистрироваться
					</button>
					или <a className="text-[16px] text-[#3C4EF2] font-medium" href="#" onClick={onSwitchToLogin}>Войти</a>
				</Form.Item>
			</Form>
		</Modal>
	);
};
