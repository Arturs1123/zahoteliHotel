type CategoryLabelsProps = {
    categories: {
        icon: string,
        label: string
    }[]
}

export default function CategoryLabels({ categories }: CategoryLabelsProps) {
    return (
        <div className="flex flex-row flex-wrap">
            {categories.map((category, i) => (
                <span className="mr-1 flex flex-row align-items-center" key={i}>
                    <img src={category.icon} alt="icon" title="icon" height={16} width={16} />&nbsp;
                    <span>{category.label}</span>
                </span>
            ))}
        </div>
    )
}