import Image from "next/image"

export default function Workflow({ workflow = [], ...props }: { workflow: string[] } & React.HTMLAttributes<HTMLDivElement>) {

    return (
        <div className={`${props.className ? props.className : ''}`}>
            {workflow.map((item, i) => {
                return (
                    <div key={i}>
                        <div className="flex items-center">
                            <Image src="/icons/svg/workflow dot.svg" width={16} height={16} alt="workflow" className="mr-[12px]" />
                            <span className="text-p2">{item}</span>
                        </div>
                        {i !== workflow.length - 1 ? <Image src="/icons/svg/workflow line.svg" width={16} height={12} alt="workflow" className="my-[2px]" /> : null}
                    </div>
                )
            })}
        </div>
    )
}