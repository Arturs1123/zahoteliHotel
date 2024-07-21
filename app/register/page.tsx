'use client'

import { useState } from "react"
import Stepper from "../Registration/Stepper"
import ChooseHotelType from "./components/hotel-type"
import { toast } from "react-toastify"
import WriteAddress from "./components/address"

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
    const [hotelName, setHotelName] = useState<string>('')
    const [address, setAddress] = useState({})

    const handleNextFromHotelType = ({ hotelType, hotelName }: { hotelType: string, hotelName: string }) => {
        setHotelType(hotelType)
        setHotelName(hotelName)
        setStep('address')
    }

    const handleNextFromAddress = ({ country, region, city, street, house, building }: { country: string, region: string, city: string, street: string, house: string, building: string }) => {
        setAddress({ country, region, city, street, house, building })
        setStep('general-info')
    }

    return (
        <div className="px-[16px]">
            <div className="max-w-[1200px] mx-auto md:pt-[32px] pt-[16px] md:pb-[80px] pb-[24px]">
                <Stepper StepsData={initialStepsData} currentIndex={0} />
                {step === 'hotel-type' ? <div><ChooseHotelType onChoose={setHotelType} onNext={handleNextFromHotelType} /></div> : null}
                {step === 'address' ? <div className="md:mt-[32px] mt-[48px]"><WriteAddress onNext={handleNextFromAddress} /></div> : null}
                {step === 'general-info' ? <div></div> : null}
                {step === 'photo' ? <div></div> : null}
                {step === 'room-category' ? <div></div> : null}
                {step === 'tariff' ? <div></div> : null}
            </div>
        </div>
    )
}