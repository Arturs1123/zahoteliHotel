'use client'
import React from 'react';
import { Modal, Form, Input } from 'antd';
import Link from 'next/link';
import FillButton from './FillButton';
import { login } from '@/app/backend_apis';
interface LoginModalProps {
	isOpen?: boolean
	onClose?: () => void
	onClickGotoRegister?: () => void
}

export default function LoginModal({ isOpen = false, onClose = () => { }, onClickGotoRegister = () => { } }: LoginModalProps) {
	const onFinish = (values: any) => {
		const { mail, password } = values
		login({ mail, password })
	};

	const handleGotoRegister = () => {
		onClickGotoRegister()
	}

	const title = <img src="/icons/svg/Logo.svg" className="w-[180px]" />
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
			<h4 className="text-h4 mb-[24px]">Вход в кабинет</h4>
			<Form
				name="normal_login"
				className="login-form"
				initialValues={{ remember: true }}
				onFinish={onFinish}
				clearOnDestroy={true}
			>
				<Form.Item
					name="mail"
					rules={[{ required: true, message: 'Пожалуйста, введите свою почту!', type: "email" }]}
				>
					<Input placeholder="Почта" className='p-[12px] text-[16px] rounded-[8px]' />
				</Form.Item>
				<Form.Item
					name="password"
					rules={[{ required: true, message: 'Пожалуйста, введите свой пароль!' }]}
				>
					<Input
						type="password"
						placeholder="Пароль"
						className='p-[12px] text-[16px] rounded-[8px]'
					/>
				</Form.Item>
				<div className='flex justify-between'>
					<Link className="text-p3 text-accent block mb-[20px]" href="/reset-password">
						Не помню пароль
					</Link>
					<p className="text-p3 text-accent block mb-[20px] cursor-pointer" onClick={handleGotoRegister}>
						перейти к регистрации
					</p>
				</div>
				<FillButton caption='Войти' isFullWidth />
			</Form>
		</Modal>
	);
};
