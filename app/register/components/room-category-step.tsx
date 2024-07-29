import { useState } from "react";
import RoomCategoryItem from "./room-category-item";
import type { RoomCategoryItem as RoomCategoryItemType } from "./room-category-item";
import { toast } from "react-toastify";
import FillButton from "@/components/FillButton";

export default function RoomCategoryStep({ onNext = () => { } }: { onNext?: (categories: RoomCategoryItemType[]) => void }) {
    const [categoriesCount, setCategoriesCount] = useState(1)
    const handleAddCategory = () => {
        if (!categories[categoriesCount - 1].categoryTitle) {
            return toast.error('input the title')
        }
        setCategoriesCount(categoriesCount + 1)
    }
    const [categories, setCategories] = useState<RoomCategoryItemType[]>([])
    const handleCategoryChange = (data: RoomCategoryItemType, i: number) => {
        const tempCategories = [...categories]
        tempCategories[i] = { ...data }
        setCategories(tempCategories)
    }

    const handleNextClick = () => {
        if (!categories[categoriesCount - 1].categoryTitle) {
            return toast.error('input the title')
        }
        onNext(categories)
    }

    return (
        <div>
            <h3 className="md:text-h3 text-h4 md:mt-[32px] mt-[24px] md:mb-[32px] mb-[20px]">Категории номеров</h3>
            {
                Array(categoriesCount).fill(0).map((v, i) => <div key={i} className="mb-[16px]">
                    <RoomCategoryItem onChange={(data) => handleCategoryChange(data, i)} />
                </div>)
            }
            <div className="md:p-[32px] p-[24px] flex items-center cursor-pointer bg-[#FFFFFF] rounded-[16px] mt-[16px]" onClick={handleAddCategory}>
                <img src="/icons/svg/Plus.svg" alt="plus" className="w-[24px] h-auto mr-[8px]" />
                <span className="text-[16px] leading-[24px] font-[700] text-accent">Добавить категорию</span>
            </div>
            <div className="flex justify-center">
                <FillButton caption="Добавить фотографии" withArrow onBtnClick={handleNextClick} />
            </div>
        </div>
    )
}