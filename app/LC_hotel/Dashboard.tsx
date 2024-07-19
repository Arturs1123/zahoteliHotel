import { useState } from "react";
import RegisterModal from "@/components/RegisterModal";
import LoginModal from "@/components/LoginModal";

export default function Dashboard() {
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
		<div className="LC-container">
			<div className="grid grid-cols-4">
				<div className="col-span-4 md:col-span-3 space-y-8">
					<div>
						<p className="text-[30px] font-semibold md:text-[62px]">Захотели — для отелей</p>
						<p className="font-medium text-[20px] leading-[32px] tracking-tight">Добавьте свой объект размещения на Захотели и зарабатывайте</p>
					</div>
					<button type="button" onClick={openLoginModal} className="w-full md:w-fit size-l primary">Зарегистрироваться</button>
				</div>
				<div className="hidden md:block md:col-span">
					<img src="LC_HotelDashboard.svg" />
				</div>
			</div>
			<LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} onSwitchToSignup={openSignupModal} />
			<RegisterModal isOpen={isSignupModalOpen} onClose={closeSignupModal} onSwitchToLogin={openLoginModal}/>
		</div>
	);
}
