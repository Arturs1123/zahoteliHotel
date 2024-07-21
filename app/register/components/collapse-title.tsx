export default function CollapseTitle({ icon = '', title = '' }: { icon?: string, title?: string }) {
    return (
        <div className="flex items-center">
            <img src={icon} alt="icon" className="md:w-[36px] w-[28px] mr-[12px]" />
            <h4 className="md:text-h4 text-h5">{title}</h4>
        </div>
    )
}