export default function Advantages() {
	return (
		<div className="LC-container !bg-[#3C4EF2]/10">
			<p className='text-[30px] font-semibold text-center md:text-[51px] md:font-medium'>Преимущества</p>
			<div className="columns-2 md:columns-4">
				<div className="w-full h-full">
					<img className="aspect-square w-[252px]" src="/icons/svg/suitcase-icon.svg"></img>
					<p className='text-[16px] font-extrabold text-center md:text-[24px] md:font-medium'>Тысячи туристов круглый год</p>
				</div>
				<div className="w-full h-full">
					<img className="aspect-square w-[252px]" src="/icons/svg/wallet-icon.svg"></img>
					<p className='text-[16px] font-extrabold text-center md:text-[24px] md:font-medium'>Оперативные выплаты</p>
				</div>
				<div className="w-full">
					<img className="aspect-square w-[252px]" src="/icons/svg/laptop-icon-1.svg"></img>
					<p className='text-[16px] font-extrabold text-center md:text-[24px] md:font-medium'>Удобная система управления отелем</p>
				</div>
				<div className="w-full">
					<img className="aspect-square w-[252px]" src="/icons/svg/handshake-icon.svg"></img>
					<p className='text-[16px] font-extrabold text-center md:text-[24px] md:font-medium'>Круглосуточная поддержка</p>
				</div>
			</div>

		</div>
	);
}
