import Image from "next/image"

export type SearchBarProps = {
    from: string,
    to: string,
    members: string,
    checkIn: string,
    checkOut: string,
}

export default function SearchBar({
    from = '',
    to = '',
    members = '',
    checkIn = '',
    checkOut = '',
}: SearchBarProps) {
    return (
        <div className="flex middle:flex-row flex-col">
            <div className="py-[24px] px-[16px] middle:pb-[16px] pb-0 flex middle:flex-row flex-col border border-[3px] rounded-lg middle:rounded-b-lg rounded-b-none middle:border-b-[3px] border-b-0 middle:mr-[24px] grow">
                <div className="middle:flex middle:static relative middle:grid-cols-none grid grid-cols-2">
                    <div className="middle:w-[128px] middle:grow-0 grow flex items-center mr-[16px] cursor-pointer">
                        <Image src="/icons/svg/calendar black.svg" alt="calendar" width={24} height={24} />
                        <span className="ml-[8px]">{from}</span>
                    </div>
                    <div className="border-l mr-[16px] middle:static absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 middle:h-0 h-[25px]"></div>
                    <div className="middle:w-[128px] middle:grow-0 grow flex items-center middle:mr-[16px] middle:ml-0 ml-[25.5px] cursor-pointer">
                        <Image src="/icons/svg/calendar black.svg" alt="calendar" width={24} height={24} />
                        <span className="ml-[8px]">{to}</span>
                    </div>
                    <div className="border-l mr-[16px] middle:block hidden"></div>
                </div>
                <hr className="middle:hidden block mt-[16px]" />
                <div className="flex items-center mr-[5px] cursor-pointer middle:pt-0 pt-[16px]">
                    <span className="mr-[8px]">{members}</span>
                    <Image src="/icons/svg/arrow-down.svg" alt="arrow down" width={24} height={24} />
                </div>
                <hr className="middle:hidden block mt-[16px]" />
            </div>
            <div className="middle:w-[270px] w-full h-[76px] px-[16px] rounded-lg middle:rounded-t-lg rounded-t-none border border-[3px] middle:border-t-[3px] border-t-0 grid grid-cols-2 relative">
                <div className="flex items-center middle:justify-center">
                    <Image src="/icons/svg/Entrance.svg" width={24} height={24} alt="entrance" />
                    <div className="ml-[8px]">
                        <p className="text-[14px] font-semibold leading-[20px] text-custom-gray">Заезд</p>
                        <p className="text-[16px] font-semibold leading-[24px]">с {checkIn}</p>
                    </div>
                </div>
                <div className="flex items-center middle:justify-center middle:ml-0 ml-[25.5px]">
                    <Image src="/icons/svg/logout.svg" width={24} height={24} alt="logout" />
                    <div className="ml-[8px]">
                        <p className="text-[14px] font-semibold leading-[20px] text-custom-gray">Выезд</p>
                        <p className="text-[16px] font-semibold leading-[24px]">с {checkOut}</p>
                    </div>
                </div>
                <div className="h-[25px] absolute border-l top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </div>
        </div>
    )
}

