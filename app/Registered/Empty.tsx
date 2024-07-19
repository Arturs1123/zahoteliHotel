import Image from "next/image"

export default function Empty({ emptyText }: { emptyText: string }) {
	return (
		<div className="pt-10 md:px-[120px] md:pt-[40px] md:pb-[80px] space-y-[24px] flex justify-center">
			<div>
				<div className="text-center font-medium md:text-xl">{emptyText}</div>
				<Image src="/icons/svg/EmptyState.svg" alt="empty iamge" width={560} height={448} />
			</div>
		</div>
	)
}