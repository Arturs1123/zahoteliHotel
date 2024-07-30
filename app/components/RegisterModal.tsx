import { Select, Form, Input, Modal } from 'antd';
import FillButton from '../../components/FillButton';
import { CredentialType, signup } from '../backend_apis';
import { toast } from "react-toastify"
const { Option } = Select

interface SignupModalProps {
	isOpen?: boolean
	onClose?: () => void
	onSignup?: (credential: CredentialType) => void
}

const positions = [
	{ label: 'owner', value: 'owner' },
	{ label: 'moderator1', value: 'moderator1' },
	{ label: 'moderator2', value: 'moderator2' },
]

export default function RegisterModal({ isOpen = false, onClose = () => { }, onSignup = () => { } }: SignupModalProps) {
	const onFinish = (values: any) => {
		const { mail, name, password, phoneNumber, position } = values
		signup({ mail, name, password, phoneNumber, position })
	};
	const title = <img src="/icons/svg/Logo.svg" className="w-[180px]"></img>

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
							{positions.map((position) => <Option value={position.value} key={position.value}>{position.label}</Option>)}
						</Select>
					</Form.Item>

					<label className='text-[24px] font-[600] mb-[20px] block'>Контактные данные</label>
					<Form.Item required>
						<Form.Item
							name="mail"
							rules={[{ required: true, message: "Введите адрес электронной почты, пожалуйста", type: 'email' }]}
							style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
						>
							<Input placeholder="почта" className='p-[12px] text-[16px] rounded-[8px]' />
						</Form.Item>

						<Form.Item
							name="phoneNumber"
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
