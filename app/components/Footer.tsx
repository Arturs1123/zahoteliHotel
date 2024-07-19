export type FooterProps = {
    email: string,
    phone: string,

}

export default function Footer({ email, phone }: FooterProps) {
    return (
        <div className="bg-[#171718] text-[#FFFFFF]">
            <div className="max-w-[1440px] mx-auto md:px-[120px] md:py-[60px] px-[16px] py-[32px]">
                <div className="md:grid md:grid-cols-3 grid-rows md:text-left text-center">
                    <div>
                        <div className="mb-[20px]">
                            <img className="md:mx-0 mx-auto md:w-[225px] w-[144px] md:h-[47px] h-[30px]" src="/icons/svg/Logo.svg" width={225} height={47} alt="logo" title="logo" />
                        </div>
                        <div className="md:block hidden">
                            <p className="footer-text">{email}</p>
                            <p className="footer-text">{phone}</p>
                            <p className="footer-text">Telegram Бот</p>
                            <p className="footer-text">О проекте</p>
                            <p className="footer-text mb-0">Поддержка</p>
                        </div>
                    </div>
                    <div className="md:mb-0 mb-[20px]">
                        <p className="footer-bold-text">Путешественникам</p>
                        <p className="footer-text">Отели</p>
                        <p className="footer-text">Экскурсии</p>
                        <p className="footer-text">Трансфер</p>
                        <p className="footer-text">Путеводитель</p>
                        <p className="footer-text">Помощь</p>
                        <p className="footer-text">Новости</p>
                        <p className="footer-text">Блог</p>
                        <p className="md:mb-0 footer-text">Достопримечательности</p>
                    </div>
                    <div className="md:block hidden">
                        <p className="footer-bold-text">Бизнесу</p>
                        <p className="footer-text">Разместить отель</p>
                        <p className="footer-text">Разместить экскурсию</p>
                        <p className="footer-text mb-0">Бизнес-кабинет</p>
                    </div>
                    <div className="md:hidden block md:mb-0 mb-[20px]">
                        <p className="footer-bold-text">Отелям</p>
                        <p className="footer-text">Разместить отель</p>
                        <p className="footer-text mb-0">Бизнес-кабинет</p>
                    </div>
                    <div className="md:hidden block">
                        <p className="footer-text">{email}</p>
                        <p className="footer-text">{phone}</p>
                        <p className="footer-text">Telegram Бот</p>
                        <p className="footer-text">О проекте</p>
                        <p className="footer-text mb-0">Поддержка</p>
                    </div>
                </div>
            </div>
        </div>
    )
}