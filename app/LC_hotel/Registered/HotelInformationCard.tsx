import RatingBadge from "@/components/RatingBadge"
import { StarFilled } from "@ant-design/icons"
import Image from "next/image"

export default function HotelInformationCard({
	thumb = '',
	hotelType = '',
	star = 0,
	hotelName = '',
	rating = { label: "", number: 0 },
	commentAmount = 0,
	address=""
},) {
	return (
		<div className="w-full bg-white rounded-xl overflow-hidden border border-slate-200 md:flex">
			<div className="md:shrink-0">
				<img className="aspect-[4/3] md:w-96 p-1 rounded-t-xl md:rounded-s-xl md:rounded-tr-none" src={thumb} alt="Modern building architecture" />
			</div>
			<div className="w-full space-y-3 md:space-y-4 p-3 md:p-6">

				<div className="flex justify-between">
					<div>
						<span className="md:text-lg text-sm text-custom-gray mr-2">{hotelType}</span>
						{[0, 0, 0, 0, 0].map((c, i) => {
							if (i >= star) return;
							return <StarFilled key={i} style={{ color: "#FFC226" }} className="text-base md:text-2xl mr-1 md:mr-2" />
						})}
					</div>
					{
						rating.number ?
							<div className="flex flex-none items-center">
								<RatingBadge size="md" rating={rating.number} />
								<span className="ml-[8px] md:block hidden">
									<p className="text-base font-bold">{rating.label}</p>
									<p className="text-[14px] text-accent">{commentAmount}&nbsp;отзывов</p>
								</span>
							</div>
							:
							<div className="md:text-lg text-sm text-custom-gray">
								Отзывов пока нет
							</div>
					}
				</div>
				<p className="text-xl font-extrabold md:text-[30px] font-semibold">{hotelName}</p>
				<div className="flex">
					<Image src='/icons/svg/location_black.svg' width={20} height={20} className="md:w-[24px] md:h-[24px]" alt="location" />
					<span className="ml-2 text-xs font-medium md:text-lg">{address}</span>
				</div>
				<div className="font-semibold text-lg md:font-extrabold md:text-xl">Описание</div>
				<div className="md:text-lg text-sm text-custom-gray mr-2">Без описания</div>
			</div>
		</div>

	)
}

