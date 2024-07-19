export default function MapButton({ className = "" }: { className?: string }) {
    return (
        <div className={`rounded-lg cursor-pointer ${className}`}>
            <img src="/icons/svg/map button.svg" alt="map button" className="w-100" />
        </div>
    )
}