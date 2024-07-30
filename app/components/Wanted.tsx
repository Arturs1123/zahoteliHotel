import { useEffect, useState } from "react";
import FillButton from "@/components/FillButton";
import decodedJWT from "@/helper/decodedJWT";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation';

export default function Wanted() {
	const router = useRouter();
	useEffect(() => {
		const { isAuthenticated } = decodedJWT()
		setIsAuthenticated(isAuthenticated)
	}, [])
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
	const handleRegisterHotel = () => {
		if (isAuthenticated) {
			router.push('/register')
		} else {
			toast.error('войдите в систему первым')
		}
	};

	return (
		<div className="px-[16px]">
			<div className="max-w-[1200px] md:py-[120px] pt-[16px] pb-[24px] mx-auto">
				<div className="md:flex md:justify-between">
					<div>
						<p className="md:text-h1 text-h4 mb-[16px]">Захотели — для отелей</p>
						<p className="font-[500] md:text-[24px] text-[20px] md:leading-[32.78px] leading-[30px] md:mb-[36px] mb-[24px]">Добавьте свой объект размещения на Захотели и зарабатывайте</p>
						<FillButton caption="Зарегистрироваться" onBtnClick={handleRegisterHotel} className="md:block hidden" isFullWidth={false} />
						<FillButton caption="Зарегистрироваться" onBtnClick={handleRegisterHotel} className="md:hidden block" isFullWidth={true} />
					</div>
					<img src="/image/wanted.svg" className="ml-[40px] md:block hidden" />
				</div>
			</div>
		</div>
	);
}
