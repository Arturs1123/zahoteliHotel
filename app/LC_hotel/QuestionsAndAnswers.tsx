import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

const text = `
 Подключение самозанятых возможно при регистрации напрямую в Экстранете, а также через менеджеры каналов: Контур.Отель, Агаст (OtelMS), Бронируй Онлайн, BookingLite, Ecvi (Эделинк), Shelter, Trip Advance, U hotels, WuBook.
`;
export default function QuestionsAndAnswers() {
	const items: CollapseProps['items'] = [
		{
			key: '1',
			label: 'Какие объекты размещения можно разместить на Захотели?',
			children: <div>{text}</div>
		},
		{
			key: '2',
			label: 'Я могу подключиться к Захотели, если у меня есть статус самозанятого?',
			children: <div>{text}</div>
		}
	];
	

	return (
		<div className='LC-container questions-and-answers'>
			<p className='text-[30px] font-semibold text-center md:text-[51px] md:font-medium'>Вопросы и ответы</p>
			<Collapse
				defaultActiveKey={['1']}
				expandIconPosition='end'
				items={items}
				accordion={true}
			/>
		</div>
	);
};