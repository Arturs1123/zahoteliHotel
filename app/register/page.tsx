'use client'

import { useState } from "react"
import Stepper from "../Registration/Stepper"
import ChooseHotelType from "./components/hotel-type"
import WriteAddress from "./components/address"
import GeneralInformation, { GeneralDataType } from "./components/general-info"
import HotelPhotos from "./components/hotelPhotos"
import RoomCategoryStep from "./components/room-category-step"
import type { RoomCategoryItem as RoomCategoryItemType } from "./components/room-category-item";
import Tariff, { TariffItemType } from "./components/tariff"
import { applyHotelProperty } from "../backend_apis"
import { useRouter } from "next/navigation"

export type ApplyDataType = {
    hotelType: string,
    hotelTitle: string,
    address: { country: string, region: string, city: string, street: string, house: string, building: string },
    thumbs: string[],
    distanceFromTheSea: number,
    distanceFromTheCenter: number,
    roomCategories: {
        categoryName: string,
        size: number,
        roomAmount: number,
        adultAmount: number,
        childrenAmount: number,
        additionalPlaceAmount: number,
        accommodation: {
            singleBeds: number,
            doubleBeds: number,
            additionalBeds: number
        },
        entertainments: string[],
        equipments: string[],
        bathroom: string[],
        photos: string[]
    }[]
    tariffs: {
        tariffName: string
        tariffType: string
        nutrition: string
        cancelReservation: string
        roomCategory: string
    }[]
} | GeneralDataType

type RegisterStep = 'hotel-type' | 'address' | 'general-info' | 'photo' | 'room-category' | 'tariff'
export default function RegisterPage() {
    const router = useRouter()

    const [step, setStep] = useState<RegisterStep>('hotel-type')
    const stepsArr = ['hotel-type', 'address', 'general-info', 'photo', 'room-category', 'tariff']
    const steps = [
        {
            title: "Что хотите сдавать?",
            value: "Что хотите сдавать?",
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
    const [distanceFromTheSea, setDistanceFromTheSea] = useState<number>(0)
    const [distanceFromTheCenter, setDistanceFromTheCityCenter] = useState<number>(0)

    const [address, setAddress] = useState<{ country: string, region: string, city: string, street: string, house: string, building: string }>({
        country: 'Russia', region: '', city: '', street: '', house: '', building: ''
    })
    const [photos, setPhotos] = useState<string[]>([])

    const handleNextFromHotelType = ({ hotelType, hotelName }: { hotelType: string, hotelName: string }) => {
        setHotelType(hotelType)
        setHotelName(hotelName)
        setStep('address')
    }

    const handleNextFromAddress = ({ country, region, city, street, house, building, distanceFromTheSea, distanceFromTheCenter }: { country: string, region: string, city: string, street: string, house: string, building: string, distanceFromTheSea: number, distanceFromTheCenter: number }) => {
        setAddress({ country, region, city, street, house, building })
        setDistanceFromTheCityCenter(distanceFromTheCenter)
        setDistanceFromTheSea(distanceFromTheSea)
        setStep('general-info')
    }

    const [generalData, setGeneralData] = useState<GeneralDataType>()
    const handleNextFromGeneralInfo = (generalData: GeneralDataType) => {
        setGeneralData(generalData)
        setStep('photo')
    }

    const handleNextFromPhoto = (thumbURLs: string[]) => {
        setPhotos(thumbURLs)
        setStep('room-category')
    }

    const [categories, setCategories] = useState<RoomCategoryItemType[]>([])
    const handleNextFromRoomCategory = (categories: RoomCategoryItemType[]) => {
        setCategories(categories)
        setStep('tariff')
    }

    const handleApply = (tariffs: TariffItemType[]) => {
        const applyData: ApplyDataType = {
            hotelType: hotelType,
            hotelTitle: hotelName,
            address: address,
            thumbs: photos,
            distanceFromTheSea,
            distanceFromTheCenter,
            ...generalData,
            roomCategories: categories.map(category => ({
                categoryName: category.categoryTitle,
                size: category.square,
                roomAmount: category.roomAmount,
                adultAmount: category.adultSeats,
                childrenAmount: category.childSeats,
                additionalPlaceAmount: category.extraSeats,
                accommodation: {
                    singleBeds: category.singleBeds,
                    doubleBeds: category.doubleBeds,
                    additionalBeds: category.extraBeds
                },
                entertainments: category.roomEntertainmentsOptions,
                equipments: category.roomEquipmentsOptions,
                bathroom: category.roomBathroomOptions,
                photos: category.thumbnails
            })),
            tariffs: tariffs.map(t => ({
                tariffName: t.tariffName,
                tariffType: t.tariffType,
                nutrition: t.nutrition,
                cancelReservation: t.cancelReservation,
                roomCategory: t.roomCategory.title
            }))
        }
        applyHotelProperty(applyData)
            .then(() => {
                router.push('/information')
            })
    }

    const roomCategoriesForTariff = categories.map(c => ({ title: c.categoryTitle, amount: c.roomAmount, thumbs: c.thumbnails }))

    return (
        <div className="px-[16px]">
            <div className="max-w-[1200px] mx-auto md:pt-[32px] pt-[16px] md:pb-[80px] pb-[24px]">
                <Stepper StepsData={steps} currentIndex={stepsArr.indexOf(step)} />
                {step === 'hotel-type' ? <div><ChooseHotelType onChoose={setHotelType} onNext={handleNextFromHotelType} /></div> : null}
                {step === 'address' ? <div className="md:mt-[32px] mt-[48px]"><WriteAddress onNext={handleNextFromAddress} /></div> : null}
                {step === 'general-info' ? <div className="md:mt-[32px] mt-[48px]"><GeneralInformation onNext={handleNextFromGeneralInfo} /></div> : null}
                {step === 'photo' ? <div><HotelPhotos onNext={handleNextFromPhoto} /></div> : null}
                {step === 'room-category' ? <div><RoomCategoryStep onNext={handleNextFromRoomCategory} /></div> : null}
                {step === 'tariff' ? <div><Tariff onApply={handleApply} roomCategories={roomCategoriesForTariff} /></div> : null}
            </div>
        </div>
    )
}