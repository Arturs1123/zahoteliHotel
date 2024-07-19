import Image from "next/image"

export type CategorySelectProps = {
    items?: { icon?: string, label: string }[],
}

export default function CategorySelect({ items = [], ...props }: CategorySelectProps & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={`${props.className ? props.className : ''}`}>
            <div className={`flex flex-row overflow-auto`}>
                {items.map((item, i) => (
                    <button key={i} className="flex flex-row text-blue-600 hover:bg-black-blue rounded-lg px-[24px] py-[12px]">
                        {
                            item.icon ? <Image
                                className="mr-2"
                                src={item.icon}
                                alt={item.label}
                                width={24}
                                height={24}
                                priority
                            /> : null
                        }
                        <span>{item.label}</span>
                    </button>
                ))}

            </div>
        </div>
    )
}