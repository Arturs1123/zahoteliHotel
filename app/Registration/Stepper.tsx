interface StepDataType {
	title: string,
	value: string
}

interface StepsDataType {
	StepsData: StepDataType[],
	currentIndex: number
}

export default function Stepper({ StepsData, currentIndex }: StepsDataType) {

	return (
		<div className="w-full grid grid-cols-6 gap-4">
			{StepsData.map((c, i) =>
				i < currentIndex ?
					<div className="space-y-3" key={c.value}>
						<div className="truncate text-lg font-medium text-[#3BA87E]">{c.title}</div>
						<div className="w-full bg-[#3BA87E] h-[12px] rounded-lg"></div>
					</div>
					: i == currentIndex ?
						<div className="space-y-3" key={c.value}>
							<div className="truncate text-lg font-500 text-[#292D32]">{c.title}</div>
							<div className="w-full bg-[#3C4EF2] h-[12px] rounded-lg"></div>
						</div> :
						<div className="space-y-3" key={c.value}>
							<div className="truncate text-lg font-500 text-[#919494]">{c.title}</div>
							<div className="w-full bg-[#EEEEEE] h-[12px] rounded-lg"></div>
						</div>

			)}
		</div>
	)
}