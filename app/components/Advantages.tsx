export default function Advantages() {
	return (
		<div className="max-w-[1440px] bg-[#3C4EF20D] px-[20px] md:py-[80px] py-[24px]">
			<h2 className='md:text-h2 text-h4 text-center md:mb-[40px] mb-[20px]'>Преимущества</h2>
			<div className="grid md:grid-cols-4 grid-cols-2 md:gap-[64px] gap-[16px]">
				<div className="flex flex-col items-center">
					<img src="/icons/svg/suitcase-icon.svg" />
					<p className='md:text-h5 text-h6 text-center'>Тысячи туристов круглый год</p>
				</div>
				<div className="flex flex-col items-center">
					<img src="/icons/svg/wallet-icon.svg"></img>
					<p className='md:text-h5 text-h6 text-center'>Оперативные выплаты</p>
				</div>
				<div className="flex flex-col items-center">
					<img src="/icons/svg/laptop-icon-1.svg"></img>
					<p className='md:text-h5 text-h6 text-center'>Удобная система управления отелем</p>
				</div>
				<div className="flex flex-col items-center">
					<img src="/icons/svg/handshake-icon.svg"></img>
					<p className='md:text-h5 text-h6 text-center'>Круглосуточная поддержка</p>
				</div>
			</div>

		</div>
	);
}