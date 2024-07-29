import GhostButton from "@/components/GhostButton";
import FillButton from "@/components/FillButton";
import ImageUploader from "@/components/ImageUploader";
import { useState } from "react";
import { toast } from "react-toastify";
export default function HotelPhotos({ onNext = () => { } }: { onNext?: (thumbnails: string[]) => void }) {
    const [thumbnails, setThubnails] = useState<string[]>([])

    const handleNextClick = () => {
        if (thumbnails.length < 3) {
            return toast.error('выберите не менее 3 фотографий')
        }
        onNext(thumbnails)
    }

    const handleImageChange = ({ thumbURL, created, deleted }: { thumbURL: string, created: boolean, deleted: boolean }) => {
        if (created) {
            setThubnails([...thumbnails].concat(thumbURL))
        } else if (deleted) {
            setThubnails(thumbnails.filter(thumb => thumb !== thumbURL))
        }
    }

    return (
        <div className="md:mt-[32px] mt-[24px]">
            <div className="md:flex md:justify-between md:items-end mb-[16px]">
                <h3 className="text-h3 md:mb-0 mb-[16px]">Фотографии отеля</h3>
                <GhostButton caption="Добавить фото" plusIcon className="md:w-fit w-full" />
            </div>
            <p className="md:text-p2 text-p3">Добавьте фотографии снаружи и внутри отеля, номеров или комнат, санузлов. Минимум — 3 фотографии</p>
            <p className="md:text-p2 text-p3 text-accent md:mb-[32px] mb-[20px]">Как снимать продающие фото для отеля</p>
            <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-[16px] md:mb-[32px] mb-[20px]">
                {Array(10).fill(0).map((item, idx) => <ImageUploader key={idx} uploadUrl="/api/hotel/thumbnail" onChange={handleImageChange} thumbs={thumbnails} />)}
            </div>
            <div className="flex justify-center">
                <FillButton caption="Добавить фотографии" withArrow onBtnClick={handleNextClick} />
            </div>
        </div>
    )
}