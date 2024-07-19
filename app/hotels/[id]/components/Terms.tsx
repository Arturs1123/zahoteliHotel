export default function Terms() {
    return (
        <div className="md:px-[120px] md:py-[40px] px-[16px] py-[16px] pb-[32px]">
            <p className="md:text-h4 text-h5 md:mb-[40px] mb-[24px]">Условия размещения</p>
            <div>
                <div className="md:flex md:pb-[24px] pb-[16px] border-b md:mb-[24px] mb-[16px]">
                    <div className="w-[270px] flex items-center  flex-none md:mb-0 mb-[16px]">
                        <img src="/icons/svg/Entrance24.svg" alt="entrance" className="w-[24px] h-[24px] mr-[8px]" />
                        <p className="text-btn">Заезд</p>
                    </div>
                    <div>
                        <p className="text-p3">С 14:00 до 22:00</p>
                        <p className="text-p3 text-custom-gray">При регистрации заезда необходимо предъявить удостоверение личности с фотографией и кредитную карту.
                            Пожалуйста, сообщите администрации заранее, во сколько вы приедете.</p>
                    </div>
                </div>
                <div className="md:flex md:pb-[24px] pb-[16px] border-b md:mb-[24px] mb-[16px]">
                    <div className="w-[270px] flex items-center flex-none md:mb-0 mb-[16px]">
                        <img src="/icons/svg/Exit24.svg" alt="entrance" className="w-[24px] h-[24px] mr-[8px]" />
                        <p className="text-btn">Выезд</p>
                    </div>
                    <div>
                        <p className="text-p3">До 12:00</p>
                    </div>
                </div>
                <div className="md:flex md:pb-[24px] pb-[16px] border-b md:mb-[24px] mb-[16px] items-center">
                    <div className="w-[270px] flex items-center flex-none md:mb-0 mb-[16px]">
                        <img src="/icons/svg/empty-wallet.svg" alt="wallet" className="w-[24px] h-[24px] mr-[8px]" />
                        <p className="text-btn">Способы оплаты</p>
                    </div>
                    <div className="md:mr-[40px]">
                        <p className="text-p3">Онлайн доступными платежными системами:</p>
                    </div>
                    <div className="flex flex-wrap">
                        <img src="/icons/svg/MNP.svg" alt="MNP" className="w-[64px] h-[64px] mr-[24px]" />
                        <img src="/icons/svg/4.svg" alt="4" className="w-[64px] h-[64px] mr-[24px]" />
                        <img src="/icons/svg/5.svg" alt="5" className="w-[64px] h-[64px] mr-[24px]" />
                        <img src="/icons/svg/6.svg" alt="6" className="w-[64px] h-[64px] mr-[24px]" />
                        <img src="/icons/svg/8.svg" alt="8" className="w-[64px] h-[64px]" />
                    </div>
                </div>
                <div className="md:flex md:pb-[24px] pb-[16px] md:mb-[24px] mb-[16px]">
                    <div className="w-[270px] flex items-center flex-none md:mb-0 mb-[16px]">
                        <img src="/icons/svg/pet.svg" alt="pet" className="w-[24px] h-[24px] mr-[8px]" />
                        <p className="text-btn">Домашние животные</p>
                    </div>
                    <div>
                        <p className="text-p3">Размещение с домашними животными не допускается.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}