type AlbumThumbProps = {
    photos?: string[],
    rounded?: boolean,
}

export default function AlbumThumb({ photos = [], rounded = true, ...props }: AlbumThumbProps & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={`${props.className ? props.className : ''}`}>
            <div className="flex">
                <div className="w-[559px] h-[420px] mr-[4px]">
                    <img src={photos[0]} alt="album" className={`h-full w-full ${rounded ? 'rounded-l-xl' : ''}`} style={{ objectFit: 'cover' }} />
                </div>
                <div className="grow">
                    <div className="flex mb-[4px]">
                        <div className="h-[208px] mr-[4px] grow">
                            <img src={photos[1]} alt="album" className="h-full w-full" style={{ objectFit: 'cover' }} />
                        </div>
                        <div className="h-[208px] grow">
                            <img src={photos[2]} alt="album" className={`h-full w-full ${rounded ? 'rounded-tr-xl' : ''}`} style={{ objectFit: 'cover' }} />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="h-[208px] mr-[4px] grow">
                            <img src={photos[3]} alt="album" className="h-full w-full" style={{ objectFit: 'cover' }} />
                        </div>
                        <div className="h-[208px] grow">
                            <img src={photos[4]} alt="album" className={`h-full w-full ${rounded ? 'rounded-br-xl' : ''}`} style={{ objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}