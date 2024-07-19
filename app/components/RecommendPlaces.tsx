interface RecommendPlacesProps {
    handleClick?: (place: string) => void;
    places?: string[]
    search?: string
}

export default function RecommendPlaces({ places = [], handleClick = () => { }, search = '', ...props }: RecommendPlacesProps & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={`${props.className ? props.className : ''} md:w-[352px] w-[300px] rounded-[12px] pb-[4px] shadow-md z-[100] bg-white`}>
            {!search ? <p className="px-[24px] py-[16px] text-p3 text-custom-gray">Популярные направления</p> : null}
            {places.length === 0 ? <p className="text-p3 px-[24px] py-[16px] text-custom-gray">пустой</p>
                : places.map((place, i) => (
                    <div key={i} className="px-[24px] py-[12px] md:text-p2 text-p3" >
                        <span className="cursor-pointer" onClick={() => handleClick(place)}>{place}</span>
                    </div>)
                )
            }
        </div>
    )
}