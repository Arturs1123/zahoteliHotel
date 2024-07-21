'use client'

import { useState } from "react"
import Stepper from "../Registration/Stepper"
import ChooseHotelType from "./components/hotel-type"
import { toast } from "react-toastify"

type RegisterStep = 'hotel-type' | 'address' | 'general-info' | 'photo' | 'room-category' | 'tariff'
export default function RegisterPage() {

    const [step, setStep] = useState<RegisterStep>('hotel-type')

    const initialStepsData = [
        {
            title: "Что хотите сдавать?",
            value: "What do you want to submit?",
            urlTo: "address"
        }, {
            title: "Адрес",
            value: "Address",
            urlTo: "general-information"

        }, {
            title: "Общая информация",
            value: "general information",
            urlTo: "photos"

        }, {
            title: "Фотографии",
            value: "Photos",
            urlTo: "categories"
        }, {
            title: "Категории номеров",
            value: "Room categories",
            urlTo: "rates"
        }, {
            title: "Тарифы",
            value: "Rates",
            urlTo: ""
        },
    ]
    const [hotelType, setHotelType] = useState<string>('')

    const handleNextFromHotelType = () => {
        console.log(14353)

        if (!hotelType) {
            console.log(123)
            return toast.error('Select the hotel type!')
        }
        setStep('address')
    }

    return (
        <div className="px-[16px]">
            <div className="max-w-[1200px] mx-auto md:pt-[32px] py-[16px]">
                <Stepper StepsData={initialStepsData} currentIndex={0} />
                {step === 'hotel-type' ? <div><ChooseHotelType onChoose={setHotelType} onNext={() => { setStep('address') }} /></div> : null}
                {step === 'address' ? <div>address</div> : null}
                {step === 'general-info' ? <div></div> : null}
                {step === 'photo' ? <div></div> : null}
                {step === 'room-category' ? <div></div> : null}
                {step === 'tariff' ? <div></div> : null}
            </div>
        </div>
    )
}