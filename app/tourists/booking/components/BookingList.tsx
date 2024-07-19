import HotelBookingItem from "./HotelBookingItem"
import HotelBookingItemOfPast from "./HotelBookingItemOfPast"

const category = 'hotel'
const comingup = false
const past = true
const hotelBookingHistoryForComingup = [
    {
        thumb: '/thumbs/hotels/hotel_thumb1.jpeg',
        hotelType: 'Отель',
        star: 4,
        hotelName: 'Гостевой дом в Тихой Гавани',
        from: '6 марта',
        to: '10 марта',
        address: 'Сочи, посёлок городского типа Сириус, Континентальный проспект, 6, ко',
        programs: [
            { date: '7 марта', time: '20:00', excursion: 'Обзорная прогулка по вечернему Сочи: море огней' },
            { date: '8 марта', time: '20:00', excursion: undefined },
            { date: '9 марта', time: '20:00', excursion: undefined },
        ]
    },
]
const hotelBookingHistoryForPast = [
    {
        thumb: '/thumbs/hotels/hotel_thumb1.jpeg',
        hotelType: 'Отель',
        star: 4,
        hotelName: 'Гостевой дом в Тихой Гавани',
        from: '6 марта',
        to: '10 марта',
        address: 'Сочи, посёлок городского типа Сириус, Континентальный проспект, 6, ко',
        programs: [
            { date: '7 марта', time: '20:00', excursion: 'Обзорная прогулка по вечернему Сочи: море огней' },
            { date: '8 марта', time: '20:00', excursion: undefined },
            { date: '9 марта', time: '20:00', excursion: undefined },
        ]
    },
]
export default function BookingList() {
    return (
        <div>
            {comingup ? hotelBookingHistoryForComingup.map((item, i) => (
                <HotelBookingItem {...item} key={i} />
            )) :
                hotelBookingHistoryForPast.map((item, i) => (
                    <HotelBookingItemOfPast {...item} key={i} />
                ))
            }
        </div>
    )
}