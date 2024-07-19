import PrimaryButton from "@/components/PrimaryButton";
import PersonAmount from "./PersonAmount";
import PrimaryInput from "@/components/PrimaryInput";
import { Input } from "antd";
import FullWidthBtn from "@/components/FullWidthBtn";

const persons = [
    { label: 'Взрослый', price: 1200, amount: 2 },
    { label: 'Дети до 14 лет', price: 600, amount: 1 },
    { label: 'Пенсионеры', price: 400, amount: 0 },
    { label: 'Студенты', price: 700, amount: 0 },
]

const total = {
    persons: 3,
    price: 3000,
}

export default function Booking() {
    const { TextArea } = Input

    return (
        <div className="p-[24px] border rounded-[16px] bg-[#FFFFFF]">
            <div className="md:flex md:justify-between mb-[32px]">
                <h4 className="md:text-h4 text-h5">Бронирование</h4>
                <div>
                    <span className="flex items-center">
                        <img src="/icons/svg/free day.svg" alt="free day" className="mr-[12px] md:w-[32px] w-[24px] md:h-[32px] h-[24px]" />
                        <span className="md:text-p3 text-p4 md:mr-[36px] mr-[24px]">Свободно</span>
                        <img src="/icons/svg/busy day.svg" width={32} height={32} alt="busy day" className="mr-[12px] md:w-[32px] w-[24px] md:h-[32px] h-[24px]" />
                        <span className="md:text-p3 text-p4">Свободно</span>
                    </span>
                </div>
            </div>
            <div className="mb-[32px]">
                <h5 className="text-h5 md:mb-[24px] mb-[16px]">Дата</h5>
                <div>
                    <PrimaryButton type="danger" caption="6 марта" className="mr-[4px]" />
                    <PrimaryButton type="danger" caption="7 марта" className="mr-[4px]" />
                    <PrimaryButton type="danger" caption="8 марта" className="mr-[4px]" />
                    <PrimaryButton type="success" caption="9 марта" className="mr-[4px]" />
                    <PrimaryButton caption="10 марта" ghost />
                </div>
            </div>
            <div className="mb-[32px]">
                <h5 className="text-h5 md:mb-[24px] mb-[16px]">Время</h5>
                <div>
                    <PrimaryButton type="danger" caption="08:00" className="mr-[4px]" />
                    <PrimaryButton type="danger" caption="09:00" className="mr-[4px]" />
                    <PrimaryButton type="danger" caption="10:00" className="mr-[4px]" />
                    <PrimaryButton type="success" caption="11:00" className="mr-[4px]" />
                    <PrimaryButton caption="12:00" ghost className="mr-[4px]" />
                    <PrimaryButton type="success" caption="12:00" />
                </div>
            </div>
            <div className="mb-[32px] md:w-[332px] w-[295px]">
                <h5 className="text-h5 md:mb-[24px] mb-[16px]">Сколько вас будет</h5>
                <div>
                    {persons.map((info, i) => (
                        <PersonAmount {...info} key={i} className="mb-[16px]" />
                    ))}
                </div>
                <hr className="mb-[8px]" />
                <div className="flex justify-between">
                    <p className="text-custom-gray text-p3">Итого за {total.persons} человек</p>
                    <p className="text-h6">{total.price} ₽</p>
                </div>
            </div>
            <div className="mb-[32px]">
                <h5 className="md:text-h5 text-h6 mb-[8px]">Введите данные покупателя</h5>
                <p className="text-p4 md:mb-[24px] mb-[16px]">Отправим ваучер и информацию о бронировании на вашу почту</p>
                <div className="md:grid md:grid-cols-2 md:gap-[16px] md:mb-[24px] mb-[16px]">
                    <PrimaryInput placeholder="Имя" className="md:mb-0 mb-[16px]" />
                    <PrimaryInput placeholder="Фамилия" />
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-[16px] md:mb-[24px] mb-[16px]">
                    <PrimaryInput placeholder="Почта" className="md:mb-0 mb-[16px]" />
                    <PrimaryInput placeholder="Номер телефона" />
                </div>
                <div>
                    <TextArea rows={4} placeholder="Комментарий к бронированию" className="h-[96px] p-[12px]" />
                </div>
            </div>
            <div className="">
                <h5 className="md:text-h5 text-h6 mb-[16px]">Итого</h5>
                <div className="md:w-[332px] flex justify-between">
                    <span className="text-p3 text-custom-gray">Дата и время</span>
                    <span className="text-p3">11 апреля, 12:00</span>
                </div>
                <div className="md:w-[332px] flex justify-between mb-[16px]">
                    <span className="text-p3 text-custom-gray">Итого к оплате</span>
                    <span className="text-h5">4 000 ₽</span>
                </div>
                <div className="mb-[12px]">
                    <FullWidthBtn caption="Перейти к оплате" />
                </div>
                <p>
                    <span className="text-custom-gray text-p5">Нажимая «Перейти к оплате», вы соглашаетесь с</span>
                    <span className="text-accent text-p5">пользовательским соглашением</span>
                    <span className="text-custom-gray text-p5">и</span>
                    <span className="text-accent text-p5">условиями бронирования</span>
                </p>
            </div>
        </div>
    )
}