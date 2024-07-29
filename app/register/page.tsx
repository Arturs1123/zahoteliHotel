'use client'

import { useState } from "react"
import Stepper from "../Registration/Stepper"
import ChooseHotelType from "./components/hotel-type"
import { toast } from "react-toastify"
import WriteAddress from "./components/address"
import GeneralInformation from "./components/general-info"
import HotelPhotos from "./components/hotelPhotos"

type RegisterStep = 'hotel-type' | 'address' | 'general-info' | 'photo' | 'room-category' | 'tariff'
export default function RegisterPage() {

    const [step, setStep] = useState<RegisterStep>('hotel-type')

    const steps = [
        {
            title: "Что хотите сдавать?",
            value: "What do you want to submit?",
        }, {
            title: "Адрес",
            value: "Address",

        }, {
            title: "Общая информация",
            value: "general information",
        }, {
            title: "Фотографии",
            value: "Photos",
        }, {
            title: "Категории номеров",
            value: "Room categories",
        }, {
            title: "Тарифы",
            value: "Rates",
        },
    ]

    const [hotelType, setHotelType] = useState<string>('')
    const [hotelName, setHotelName] = useState<string>('')
    const [address, setAddress] = useState({})
    const [photos, setPhotos] = useState<string[]>([])

    const handleNextFromHotelType = ({ hotelType, hotelName }: { hotelType: string, hotelName: string }) => {
        setHotelType(hotelType)
        setHotelName(hotelName)
        setStep('address')
    }

    const handleNextFromAddress = ({ country, region, city, street, house, building }: { country: string, region: string, city: string, street: string, house: string, building: string }) => {
        setAddress({ country, region, city, street, house, building })
        setStep('general-info')
    }

    const handleNextFromGeneralInfo = () => {
        setStep('photo')
    }

    const handleNextFromPhoto = (thumbURLs: string[]) => {
        setPhotos(thumbURLs)
        setStep('room-category')
    }

    return (
        <div className="px-[16px]">
            <div className="max-w-[1200px] mx-auto md:pt-[32px] pt-[16px] md:pb-[80px] pb-[24px]">
                <Stepper StepsData={steps} currentIndex={0} />
                {step === 'hotel-type' ? <div><ChooseHotelType onChoose={setHotelType} onNext={handleNextFromHotelType} /></div> : null}
                {step === 'address' ? <div className="md:mt-[32px] mt-[48px]"><WriteAddress onNext={handleNextFromAddress} /></div> : null}
                {step === 'general-info' ? <div className="md:mt-[32px] mt-[48px]"><GeneralInformation onNext={handleNextFromGeneralInfo} /></div> : null}
                {step === 'photo' ? <div><HotelPhotos onNext={handleNextFromPhoto} /></div> : null}
                {step === 'room-category' ? <div></div> : null}
                {step === 'tariff' ? <div></div> : null}
            </div>
        </div>
    )
}