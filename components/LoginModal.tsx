'use client'
import React from 'react';
import { Modal, Form, Input } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import FillButton from './FillButton';
interface LoginModalProps {
	isOpen?: boolean;
	onClose?: () => void;
}

export default function LoginModal({ isOpen = false, onClose = () => { } }: LoginModalProps) {
	const router = useRouter();
	const onFinish = (values: any) => {
	};

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
					name="email"
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
				<Link className="text-p3 text-accent block mb-[20px]" href="/LC_hotel">
					Не помню пароль
				</Link>
				<FillButton caption='Войти' isFullWidth />
			</Form>
		</Modal>
	);
};
