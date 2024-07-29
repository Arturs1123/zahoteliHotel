import BookingInfo from "./components/booking-info"
import PendingInfo from "./components/pending-info"

export default function Information() {
    const isApplicationAllowed = false
    return (
        <div className="px-[16px]">
            <div className="max-w-[1320px] mx-auto ">
                {isApplicationAllowed ? <div><BookingInfo /></div> : <div><PendingInfo /></div>}
            </div>
        </div>
    )
}