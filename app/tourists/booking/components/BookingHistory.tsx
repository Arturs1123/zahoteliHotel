import CategorySelect from "@/components/CategoryList"
import CustomSwitch from "@/components/CustomSwitch"
import NoBookings from "./NoBookings"
import BookingList from "./BookingList"

const isZeroHistory = false
const categories = [
    { icon: '/icons/svg/House.svg', label: 'Отели' },
    { icon: '/icons/svg/routing.svg', label: 'Экскурсии' },
]

export default function BookingHistory() {
    return (
        <div>
            <div className="flex flex-wrap justify-between md:mb-[8px] mb-0">
                <CategorySelect items={categories} className="mb-[16px]" />
                {isZeroHistory ? null : <CustomSwitch option1="Предстоящие" option2="Прошедшие" className="mb-[16px]" />}
            </div>
            <div>

            </div>
            {isZeroHistory ? <NoBookings category="excursion" zeroHistory={true} /> : <BookingList />}
        </div>
    )
}