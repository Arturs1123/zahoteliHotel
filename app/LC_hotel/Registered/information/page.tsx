import HotelInformationCard from "../HotelInformationCard";
import Navbar from "../Navbar";
import PendingShow from "../PendingShow";

const hotelInformationData = {
	thumb: '/thumbs/hotels/hotel_thumb1.jpeg',
	hotelType: 'Отель',
	star: 4,
	hotelName: 'Гостевой дом в Тихой Гавани',
	address: 'Сочи, Адлер, ул. Горького, д.76 ',
	commentAmount: 120,
	rating: { label: "Отличный отель", number: 9.6 }
}
export default function Registered() {
	return (
		<div>
			<HotelInformationCard  {...hotelInformationData} />
		</div>
	)
}