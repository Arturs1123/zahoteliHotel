import Clamp from 'react-multiline-clamp';

export type ArticleItemProps = {
    title: string,
    city: string,
    createdAt: string,
    postedBefore: string,
    thumbnail: string,
    className?: string,
}

type ArticleItemPropsWithRest = React.PropsWithChildren<ArticleItemProps>
export default function ArticleItem({
    title = '',
    city = '',
    createdAt = '',
    postedBefore = '',
    thumbnail = '',
    ...props
}: ArticleItemPropsWithRest) {
    return (
        <div className={`grid grid-cols-4 ${props.className}`}>
            <div className="rounded-l-xl md:p-[4px] p-0 border border-r-0 relative">
                <img src={thumbnail} className="rounded-l-lg h-full w-full" title="thumbnail" alt="thumbnail" style={{ objectFit: 'cover' }} />
            </div>
            <div className="col-span-3 border border-l-0 rounded-r-xl md:p-[4px] p-[12px]">
                <div>
                    <Clamp withTooltip lines={2}>
                        <p className="md:block hidden text-accent text-base mb-2">#{city}</p>
                    </Clamp>
                    <p className="md:hidden block text-[14px] flex flex-row items-center">Интересно&nbsp;<img src="/icons/png/hot.png" alt="hot" title="hot" className="w-[12px] h-[16px]" /> </p>
                    <p className="truncate font-medium md:text-xl text-base md:mb-2 h-[43px] max-w-full font-semibold leading-[20px]">{title}</p>
                    <div className="flex flex-row justify-between">
                        <span className="text-base text-custom-gray">{createdAt}</span>
                        <span className="md:block hidden text-base text-custom-gray">{postedBefore}</span>
                        <span className="md:hidden block text-accent text-[14px]">#{city}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}