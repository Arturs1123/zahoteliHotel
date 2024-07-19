import { Modal } from "antd";
import Image from "next/image";
type PrimaryModalProps = {
    centered?: boolean
    children: React.ReactNode
    open?: boolean
    onOk?: () => void
    onCancel?: () => void
}

export default function PrimaryModal({ children, centered = true, open = false, onOk = () => { }, onCancel = () => { }, ...props }: PrimaryModalProps & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <Modal
            title={<Image src="/icons/svg/logo.svg" width={180} height={37.6} alt="logo" />}
            centered={centered}
            open={open}
            onOk={onOk}
            onCancel={onCancel}
            footer={null}
            {...props}
        >
            {children}
        </Modal>
    )
}