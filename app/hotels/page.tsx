import MapButton from "./components/MapButton"
import HotelFilter from "./components/HotelFilter"
import HotelList from "./components/HotelList"

export default function Hotels() {
    return (
        <div className="lg:px-[60px] lg:py-[40px] px-[16px] py-[32px] lg:flex">
            <div className="lg:w-[306px] lg:pr-[20px] lg:flex-none lg:block hidden">
                <MapButton className="mb-[24px]" />
                <HotelFilter />
            </div>
            <div className="lg:grow">
                <HotelList />
            </div>
        </div>
    )
}