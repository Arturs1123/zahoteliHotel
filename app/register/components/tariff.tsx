import FillButton from "@/components/FillButton";

export default function Tariff({ onApply = () => { } }: { onApply?: () => void }) {
    const handleSubmit = () => {
        onApply()
    }
    return (
        <div>
            <div className="flex justify-center">
                <FillButton caption="Save and submit your application" onBtnClick={handleSubmit} />
            </div>
        </div>
    )
}