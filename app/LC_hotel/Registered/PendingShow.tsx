import Image from "next/image"
interface PendingShowPropType {
	registrationDate: string
}

export default function PendingShow({ registrationDate }: PendingShowPropType) {
	return (
		<div className="space-y-4 md:space-y-6 pb-6 md:pb-10">
			<div className="flex gap-4 md:gap-6">
				<Image src="/icons/svg/ApplicationRegistered.svg" width={58} height={58} className=" md:w-[100px] md:h-[100px]" alt="registered-image" />
				<div>
					<span className="text-[24px] font-semibold md:text-[51px]">Заявка зарегистрирована</span>
					<div className="hidden md:block text-[16px] md:text-[20px]">
						<span className=" text-gray-400">Дата регистрации:</span>&nbsp;&nbsp;
						<span>{registrationDate}</span>
					</div>
				</div>
			</div>
			<div className="md:hidden text-[16px] md:text-[20px]">
				<span className=" text-gray-400">Дата регистрации:</span>&nbsp;&nbsp;
				<span>{registrationDate}</span>
			</div>
			<div className="text-[16px] md:text-[20px] text-[#292D32] font-medium line-height-6 md:line-height-8">
				<div>
					Обработка заявки займет до 3-х рабочих дней.
				</div>
				<div>
					После обработки  вы сможете заполнить Календарь с ценами и опубликовать отель
				</div>
			</div>

		</div>
	)
}