import InputAmount from "./InputAmount"
import { Input } from "antd"
import CheckBoxItem from "./checkbox-item"
import { useEffect, useState } from "react"
import { getRoomBathroom, getRoomEntertainments, getRoomEquipments } from "@/app/backend_apis"
import ImageUploader from "@/components/ImageUploader"

export type RoomCategoryItem = {
    categoryTitle: string
    square: number
    roomAmount: number
    adultSeats: number
    childSeats: number
    extraSeats: number
    singleBeds: number
    doubleBeds: number
    extraBeds: number
    roomEquipmentsOptions: string[]
    roomBathroomOptions: string[]
    roomEntertainmentsOptions: string[]
    thumbnails: string[]
}

export default function RoomCategoryItem({ onChange = () => { } }: { onChange?: ({ categoryTitle, square, roomAmount, adultSeats, childSeats, extraSeats, singleBeds, doubleBeds, extraBeds, roomEquipmentsOptions, roomBathroomOptions, roomEntertainmentsOptions, thumbnails }: RoomCategoryItem) => void }) {
    const [roomEquipmentsAllOptions, setRoomEquipmentsAllOptions] = useState<string[]>([])
    const [roomEntertainmentsAllOptions, setRoomEntertainmentsAllOptions] = useState<string[]>([])
    const [roomBathroomAllOptions, setRoomBathroomAllOptions] = useState<string[]>([])
    useEffect(() => {
        getRoomEquipments()
            .then(res => {
                setRoomEquipmentsAllOptions(res.map((item: { label: string }) => item.label))
            })
        getRoomEntertainments()
            .then(res => {
                setRoomEntertainmentsAllOptions(res.map((item: { label: string }) => item.label))
            })
        getRoomBathroom()
            .then(res => {
                setRoomBathroomAllOptions(res.map((item: { label: string }) => item.label))
            })
    }, [])
    const [thumbnails, setThumbnails] = useState<string[]>([])
    const handleImageChange = ({ thumbURL, created, deleted }: { thumbURL: string, created: boolean, deleted: boolean }) => {
        if (created) {
            setThumbnails([...thumbnails].concat(thumbURL))
        } else if (deleted) {
            setThumbnails(thumbnails.filter(thumb => thumb !== thumbURL))
        }
    }
    const [categoryTitle, setCategoryTitle] = useState('')
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategoryTitle(e.target.value)
    }
    const [square, setSquare] = useState(0)
    const handleSquareChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSquare(parseInt(e.target.value))
    }

    const [roomAmount, setRoomAmount] = useState(0)
    const [adultSeats, setAdultSeats] = useState(0)
    const [childSeats, setChildSeats] = useState(0)
    const [extraSeats, setExtraSeats] = useState(0)
    const [singleBeds, setSingleBeds] = useState(0)
    const [doubleBeds, setDoubleBeds] = useState(0)
    const [extraBeds, setExtraBeds] = useState(0)

    const [roomEquipmentsOptions, setRoomEquipmentsOptions] = useState<string[]>([])
    const handleEquipmentsCheckChange = ({ label, checked }: { label: string, checked: boolean }) => {
        let _labels = [...roomEquipmentsOptions]

        if (checked) {
            if (!_labels.includes(label)) _labels.push(label)
        } else {
            if (_labels.includes(label)) _labels = _labels.filter(_label => _label !== label).slice()
        }
        setRoomEquipmentsOptions(_labels)
    }

    const [roomBathroomOptions, setRoomBathroomOptions] = useState<string[]>([])
    const handleBathroomCheckChange = ({ label, checked }: { label: string, checked: boolean }) => {
        let _labels = [...roomBathroomOptions]

        if (checked) {
            if (!_labels.includes(label)) _labels.push(label)
        } else {
            if (_labels.includes(label)) _labels = _labels.filter(_label => _label !== label).slice()
        }
        setRoomBathroomOptions(_labels)
    }

    const [roomEntertainmentsOptions, setRoomEntertainmentsOptions] = useState<string[]>([])
    const handleEntertainmentsCheckChange = ({ label, checked }: { label: string, checked: boolean }) => {
        let _labels = [...roomEntertainmentsOptions]

        if (checked) {
            if (!_labels.includes(label)) _labels.push(label)
        } else {
            if (_labels.includes(label)) _labels = _labels.filter(_label => _label !== label).slice()
        }
        setRoomEntertainmentsOptions(_labels)
    }

    useEffect(() => {
        onChange({ categoryTitle, square, roomAmount, adultSeats, childSeats, extraSeats, singleBeds, doubleBeds, extraBeds, roomEquipmentsOptions, roomBathroomOptions, roomEntertainmentsOptions, thumbnails })
    }, [categoryTitle, square, roomAmount, adultSeats, childSeats, extraSeats, singleBeds, doubleBeds, extraBeds, roomEquipmentsOptions, roomBathroomOptions, roomEntertainmentsOptions, thumbnails])

    return (
        <div className="md:p-[32px] p-[24px] rounded-[16px] border bg-[#FFFFFF]">
            <Input className="md:text-h4 text-h5 md:mb-[32px] mb-[16px]" placeholder="Укажите название категории" onChange={handleTitleChange} value={categoryTitle} />
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 md:divide-x mb-[32px]">
                <div className="md:pr-[32px] md:mb-0 mb-[16px]">
                    <label className="text-p4 mb-[12px] block text-custom-gray">Площадь номера</label>
                    <Input placeholder="размер комнаты" className="p-[12px] text-p3" value={square} onChange={handleSquareChange} />
                </div>
                <InputAmount label="Число номеров" className="md:px-[32px] md:mb-0 mb-[16px]" onValueChange={setRoomAmount} />
                <InputAmount label="Число взрослых мест" className="md:px-[32px] md:mb-0 mb-[16px]" onValueChange={setAdultSeats} />
                <InputAmount label="Число детских мест" className="md:px-[32px] md:mb-0 mb-[16px]" onValueChange={setChildSeats} />
                <InputAmount label="Число доп. мест" className="md:pl-[32px]" onValueChange={setExtraSeats} />
            </div>
            <div className="mb-[32px]">
                <h5 className="md:text-h5 text-h6 md:mb-[24px] mb-[16px]">Размещение</h5>
                <div className="grid md:grid-cols-3 grid-cols-1 md:divide-x">
                    <InputAmount label="Число односпальных кроватей" className="md:pr-[32px]" icon="/icons/svg/single-bed-gray.svg" onValueChange={setSingleBeds} />
                    <InputAmount label="Число двуспальных кроватей" className="md:px-[32px]" icon="/icons/svg/double-bed-gray.svg" onValueChange={setDoubleBeds} />
                    <InputAmount label="Число доп. кроватей" className="md:pl-[32px]" onValueChange={setExtraBeds} />
                </div>
            </div>
            <div className="mb-[16px]">
                <h5 className="md:text-h5 text-h6 md:mb-[24px] mb-[16px]">Удобства в номере</h5>
                <div className="grid md:grid-cols-3 grid-cols-1">
                    <div>
                        <div className="flex items-center mb-[16px]">
                            <img src="/icons/svg/new-computer-blue.svg" alt="icon" className="mr-[8px] w-[32px] h-auto" /><span className="text-btn">Оборудование</span>
                        </div>
                        <div>
                            {roomEquipmentsAllOptions.map((option, i) => <div key={i} className="mb-[16px]">
                                <CheckBoxItem label={option} onCheckChange={handleEquipmentsCheckChange} defaultValue={roomEquipmentsOptions.includes(option)} />
                            </div>)}
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center mb-[16px]">
                            <img src="/icons/svg/tub-blue.svg" alt="icon" className="mr-[8px] w-[32px] h-auto" /><span className="text-btn">Оборудование</span>
                        </div>
                        <div>
                            {roomBathroomAllOptions.map((option, i) => <div key={i} className="mb-[16px]">
                                <CheckBoxItem label={option} onCheckChange={handleBathroomCheckChange} defaultValue={roomBathroomOptions.includes(option)} />
                            </div>)}
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center mb-[16px]">
                            <img src="/icons/svg/game-handle-blue.svg" alt="icon" className="mr-[8px] w-[32px] h-auto" /><span className="text-btn">Оборудование</span>
                        </div>
                        <div>
                            {roomEntertainmentsAllOptions.map((option, i) => <div key={i} className="mb-[16px]">
                                <CheckBoxItem label={option} onCheckChange={handleEntertainmentsCheckChange} defaultValue={roomEntertainmentsOptions.includes(option)} />
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h5 className="md:text-h5 text-h6 mb-[24px]">Фотографии номера</h5>
                <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-[16px]">
                    {Array(10).fill(0).map((item, idx) => <ImageUploader key={idx} uploadUrl="/api/room/thumbnail" onChange={handleImageChange} thumbs={thumbnails} />)}
                </div>
            </div>
        </div>
    )
}