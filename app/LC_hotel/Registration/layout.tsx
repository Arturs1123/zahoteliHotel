'use client'
import { ArrowRightOutlined } from "@ant-design/icons"
import Stepper from "./Stepper"
import { useState } from "react"
import { url } from "inspector"
import Link from "next/link"

const initialStepsData = [
	{
		title: "Что хотите сдавать?",
		value: "What do you want to submit?",
		urlTo: "address"
	}, {
		title: "Адрес",
		value: "Address",
		urlTo: "general-information"

	}, {
		title: "Общая информация",
		value: "general information",
		urlTo: "photos"

	}, {
		title: "Фотографии",
		value: "Photos",
		urlTo: "categories"
	}, {
		title: "Категории номеров",
		value: "Room categories",
		urlTo: "rates"
	}, {
		title: "Тарифы",
		value: "Rates",
		urlTo: ""
	},
]

export default function RegistrationLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode
}) {

	const [stepsData, SetStepsData] = useState(initialStepsData)
	const [currentIndex, setCurrentIndex] = useState(0)

	const handleClick = () => {
		setCurrentIndex((prevState) => prevState + 1)
	}
	return (
		<section className="LC-container space-y-8">
			<Stepper StepsData={stepsData} currentIndex={currentIndex} />
			{children}
			<div className="steps-action mt-4 flex justify-center">
				<Link href={initialStepsData[currentIndex]?.urlTo}>
					<button className='primary size-s' onClick={handleClick}>
						Далее &nbsp;
						<ArrowRightOutlined />
					</button>

				</Link>
			</div>
		</section>
	)
}