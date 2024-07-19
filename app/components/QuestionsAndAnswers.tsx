import Collapse from '@/components/Collapse';

const QAAS = [
	{
		question: 'Какие объекты размещения можно разместить на Захотели?',
		answer: 'Подключение самозанятых возможно при регистрации напрямую в Экстранете, а также через менеджеры каналов: Контур.Отель, Агаст (OtelMS), Бронируй Онлайн, BookingLite, Ecvi (Эделинк), Shelter, Trip Advance, U hotels, WuBook.'
	},
	{
		question: 'Я могу подключиться к Захотели, если у меня есть статус самозанятого?',
		answer: 'Подключение самозанятых возможно при регистрации напрямую в Экстранете, а также через менеджеры каналов: Контур.Отель, Агаст (OtelMS), Бронируй Онлайн, BookingLite, Ecvi (Эделинк), Shelter, Trip Advance, U hotels, WuBook.'
	}
]

export default function QuestionsAndAnswers() {
	return (
		<div className='px-[16px]'>
			<div className='max-w-[1200px] md:py-[80px] py-[32px] mx-auto'>
				<h2 className='md:text-h2 text-h4 md:mb-[40px] mb-[20px] text-center'>Вопросы и ответы</h2>
				<div className='md:space-y-[24px] space-y-[16px]'>
					{
						QAAS.map((item, i) => <Collapse title={item.question} content={item.answer} key={i} />)
					}
				</div>
			</div>
		</div>
	);
};