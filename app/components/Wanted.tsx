import { useEffect, useState } from "react";
import FillButton from "@/components/FillButton";
import decodedJWT from "@/helper/decodedJWT";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation';
import { getMyHotelStatus, removeMyHotel } from "../backend_apis";
import ConfirmModal from "./ConfirmModal";

type MyHotelStatusType = 'allowed' | 'pending' | 'empty'

export default function Wanted() {
	const router = useRouter();
	useEffect(() => {
		const { isAuthenticated } = decodedJWT()
		if (isAuthenticated) {
			getMyHotelStatus()
				.then(res => setMyHotelStatus(res.status as MyHotelStatusType))
		}
		setIsAuthenticated(isAuthenticated)
	}, [])

	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
	const [myHotelStatus, setMyHotelStatus] = useState<MyHotelStatusType>('empty')
	const [confirmModalVisible, setConfirmModalVisible] = useState<boolean>(false)

	const handleRegisterHotel = () => {
		if (isAuthenticated) {
			if (myHotelStatus === 'empty') {
				router.push('/register')
			} else if (myHotelStatus === 'pending' || myHotelStatus === 'allowed') {
				setConfirmModalVisible(true)
			}
		} else {
			toast.error('войдите в систему первым')
		}
	};

	const handleConfirmCancel = () => {
		setConfirmModalVisible(false)
		router.push('/information')
	}

	const handleConfirmOK = () => {
		removeMyHotel()
			.then(() => {
				setConfirmModalVisible(false)
				router.push('/register')
			})
	}

	return (
		<div className="px-[16px]">
			<div className="max-w-[1200px] md:py-[120px] pt-[16px] pb-[24px] mx-auto">
				<div className="md:flex md:justify-between">
					<div>
						<p className="md:text-h1 text-h4 mb-[16px]">Захотели — для отелей</p>
						<p className="font-[500] md:text-[24px] text-[20px] md:leading-[32.78px] leading-[30px] md:mb-[36px] mb-[24px]">Добавьте свой объект размещения на Захотели и зарабатывайте</p>
						{isAuthenticated ? (<FillButton caption="Зарегистрировать отель" onBtnClick={handleRegisterHotel} className="md:block hidden" isFullWidth={false} />) : ''}
						{isAuthenticated ? (<FillButton caption="Зарегистрировать отель" onBtnClick={handleRegisterHotel} className="md:hidden block" isFullWidth={true} />) : ''}
					</div>
					<img src="/image/wanted.svg" className="ml-[40px] md:block hidden" />
				</div>
			</div>
			<ConfirmModal isModalOpen={confirmModalVisible} onOk={handleConfirmOK} onCancel={handleConfirmCancel} />
		</div>
	);
}
