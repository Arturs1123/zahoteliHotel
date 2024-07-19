type PrimaryButtonProps = {
    type?: 'primary' | 'danger' | 'success' | 'warning'
    size?: 'sm' | 'md' | 'lg'
    caption?: string
    ghost?: boolean
}

const colors = {
    primary: { bgColor: '#3C4EF21A', color: '#3C4EF2' },
    danger: { bgColor: '#E139141A', color: '#E13914' },
    success: { bgColor: '#3BA87E1A', color: '#3BA87E' },
    warning: { bgColor: '', color: '' },
}

const sizes = {
    sm: { px: '20px', py: '10px' },
    md: { px: '20px', py: '10px' },
    lg: { px: '20px', py: '10px' },
}

export default function PrimaryButton({ type = 'primary', size = 'md', caption = "button", ghost = false, ...props }: PrimaryButtonProps & React.HTMLAttributes<HTMLDivElement>) {
    let { bgColor, color } = colors[type]
    const { px, py } = sizes[size]
    bgColor = ghost ? '#FFFFFF' : bgColor

    return (
        <button className={`rounded-lg text-[${color}] px-[${px}] py-[${py}] bg-[${bgColor}] ${ghost ? `border border-[${color}]` : ''} text-[16px] leading-[24px] font-[700] ${props.className ? props.className : ''}`}>
            {caption}
        </button>
    )
}