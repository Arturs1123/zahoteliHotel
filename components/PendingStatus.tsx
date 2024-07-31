export default function PendingStatus() {
    return (
        <div className="py-[40px] flex flex-col items-center">
            <p className="text-p1 mb-[24px] text-center">Раздел будет доступен после обработки заявки</p>
            <div className="mx-auto">
                <img src="/icons/svg/EmptyState.svg" alt="empty-state" />
            </div>
        </div>
    )
}