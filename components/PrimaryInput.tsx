import { Input } from "antd";

type InputProps = {
    placeholder?: string,
}

export default function PrimaryInput({ placeholder = '', ...props }: InputProps & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <Input className={`p-[12px] rounded-lg border w-full ${props.className ? props.className : ''}`} placeholder={placeholder} />
    )
}