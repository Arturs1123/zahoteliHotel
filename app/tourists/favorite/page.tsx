import ChooseButton from "@/components/ChooseButton"
import Image from "next/image"
import EmptyFavorite from "./components/Empty"
import FavoriteList from "./components/List"

const isEmpty = false

export default function TouristFavorite() {

    return (
        <div className="md:px-[120px] px-[16px] md:pt-[40px] pt-[16px] md:pb-[80px] pb-[32px]">
            {isEmpty ? <EmptyFavorite /> : <FavoriteList />}
        </div>
    )
}