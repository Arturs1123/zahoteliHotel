'use client'
import React from 'react';
import { Button, Modal, Form, Input } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

interface LoginModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSwitchToSignup: () => void;
}

export default function LoginModal({ isOpen, onClose, onSwitchToSignup }: LoginModalProps) {
	const router = useRouter();
	const onFinish = (values: any) => {
		console.log('Received values of form: ', values);
		router.push('LC_hotel/Registration')
	};
	const title = <img src="/icons/svg/Logo.svg" className="w-[180px]"></img>

	return (
		<Modal
			className="m-[32px] loginModal"
			title={title}
			centered
			open={isOpen}
			width={600}
			footer={null}
			onCancel={onClose}
			destroyOnClose
		>
			<p className="w-full font-bold text-[30px] mb-3">Вход в кабинет</p>
			<Form
				name="normal_login"
				className="login-form"
				initialValues={{ remember: true }}
				onFinish={onFinish}
				clearOnDestroy={true}
			>
				<Form.Item
					name="email"
					rules={[{ required: true, message: 'Пожалуйста, введите свою почту!', type: "email" }]}
				>
					<Input
						placeholder="Почта" />
				</Form.Item>
				<Form.Item
					name="password"
					rules={[{ required: true, message: 'Пожалуйста, введите свой пароль!' }]}
				>
					<Input
						type="password"
						placeholder="Пароль"
					/>
				</Form.Item>
				<Link className="text-[16px] text-[#3C4EF2] font-medium block mb-[20px]" href="/LC_hotel">
					Не помню пароль
				</Link>

				<Form.Item>
					<button className='primary size-m text-lg h-[50px] w-full mb-[20px]'>
						Войти
					</button>
					или <a className="text-[16px] text-[#3C4EF2] font-medium" href="#" onClick={onSwitchToSignup}>зарегистрироваться</a>
				</Form.Item>
			</Form>
		</Modal>
	);
};
