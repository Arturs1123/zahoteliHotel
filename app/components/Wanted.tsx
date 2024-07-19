import { useState } from "react";
import RegisterModal from "@/components/RegisterModal";
import LoginModal from "@/components/LoginModal";
import FillButton from "@/components/FillButton";
import FullWidthBtn from "@/components/FullWidthBtn";

export default function Wanted() {
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
	const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

	const openLoginModal = () => {
		setIsLoginModalOpen(true);
		setIsSignupModalOpen(false);
	};

	const closeLoginModal = () => {
		setIsLoginModalOpen(false);
	};

	const openSignupModal = () => {
		setIsSignupModalOpen(true);
		setIsLoginModalOpen(false);
	};

	const closeSignupModal = () => {
		setIsSignupModalOpen(false);
	};
	return (
		<div className="px-[16px]">
			<div className="max-w-[1200px] md:py-[120px] pt-[16px] pb-[24px] mx-auto">
				<div className="md:flex md:justify-between">
					<div>
						<p className="md:text-h1 text-h4 mb-[16px]">Захотели — для отелей</p>
						<p className="font-[500] md:text-[24px] text-[20px] md:leading-[32.78px] leading-[30px] md:mb-[36px] mb-[24px]">Добавьте свой объект размещения на Захотели и зарабатывайте</p>
						<FillButton caption="Зарегистрироваться" onBtnClick={openSignupModal} className="md:block hidden" isFullWidth={false} />
						<FillButton caption="Зарегистрироваться" onBtnClick={openSignupModal} className="md:hidden block" isFullWidth={true} />
					</div>
					<img src="/image/wanted.svg" className="ml-[40px] md:block hidden" />
				</div>
				<RegisterModal isOpen={isSignupModalOpen} onClose={closeSignupModal} onSwitchToLogin={openLoginModal} />
			</div>
		</div>
	);
}
