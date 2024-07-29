export default function PendingInfo() {
    return (
        <div className=" md:py-[40px] py-[24px]">
            <div className="flex items-center gap-4 md:gap-6 md:mb-0 md:mb-[24px] mb-[16px]">
                <img src="/icons/svg/ApplicationRegistered.svg" className="md:w-[105px] w-[58px] h-auto" alt="registered-image" />
                <div>
                    <h2 className="md:text-h2 text-h5 md:mb-[12px]">Заявка зарегистрирована</h2>
                    <div className="md:flex hidden items-center">
                        <span className="md:text-p1 text-p3 text-custom-gray md:mr-[12px]">Дата регистрации:</span>
                        <span className="md:text-p1 text-p3">18 марта 2024</span>
                    </div>
                </div>
            </div>
            <div className="md:hidden flex items-center mb-[16px]">
                <span className="text-p3 text-custom-gray md:mr-[12px]">Дата регистрации:</span><span className="text-p3">18 марта 2024</span>
            </div>
            <p className="md:text-p1 text-p3">
                Обработка заявки займет до 3-х рабочих дней.
            </p>
            <p className="md:text-p1 text-p3">
                После обработки  вы сможете заполнить Календарь с ценами и опубликовать отель
            </p>
        </div >
    )
}