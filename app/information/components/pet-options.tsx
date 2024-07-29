export default function PetOptionReadMode({ petsAllowed }: { petsAllowed?: boolean }) {
    return (
        <div className="md:p-[32px] p-[24px] border md:rounded-[16px] bg-[#FFFFFF]">
            <div className="flex items-center justify-between md:mb-[32px] mb-[24px] cursor-pointer">
                <div className="flex items-center">
                    <img src="/icons/svg/pet.svg" alt="icon" className="md:w-[36px] w-[28px] mr-[12px]" />
                    <h4 className="md:text-h4 text-h5">Питомцы</h4>
                </div>
            </div>
            <p className="text-btn text-custom-gray ml-[48px]">{petsAllowed ? 'домашние животные разрешены' : 'домашние животные не допускаются'}</p>
        </div>
    )
}