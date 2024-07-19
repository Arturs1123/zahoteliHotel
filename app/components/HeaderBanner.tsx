'use client'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function HeaderBanner() {
    const bannerData = [
        { blackText: 'Захотели...', blueText: 'отдохнуть на море', image: '/banner/ic_beach.svg' },
        { blackText: 'Захотели...', blueText: 'сходить в горы', image: '/banner/ic_hill&moutain.svg' },
        { blackText: 'Захотели...', blueText: 'отмечать праздники', image: '/banner/ic_festival.svg' },
        { blackText: 'Захотели...', blueText: 'пойти в поход', image: '/banner/icon-camping.svg' },
        { blackText: 'Захотели...', blueText: 'жить в отеле', image: '/banner/ic_hotel.svg' },
        { blackText: 'Захотели...', blueText: 'виды спорта', image: '/banner/ic_sport.svg' },
        { blackText: 'Захотели...', blueText: 'Исследуйте лес', image: '/banner/ic_forest.svg' },
    ]

    const BannerItem = ({ blackText = '', blueText = '', image = '' }: { blackText: string, blueText: string, image: string, }) => {
        return (
            <div className='flex flex-row justify-between items-center'>
                <span className='flex md:flex-row flex-wrap flex-col'>
                    <span className='md:text-[62px] md:text-[30px] text-[24px] font-bold md:pr-3'>{blackText}</span>
                    <span className='md:text-[62px] md:text-[30px] text-[24px] text-accent font-bold'>{blueText}</span>
                </span>
                <img src={image} className='md:w-[240px] w-[95px] h-auto' alt='banner image' />
            </div>
        )
    }

    return (
        <div className="mx-auto md:py-[30px] py-[16px] max-w-[1200px]">
            <Carousel
                additionalTransfrom={0}
                autoPlay
                arrows={false}
                autoPlaySpeed={5000}
                centerMode={false}
                containerClass=""
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite={false}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 1,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    }
                }}
                rewind
                rewindWithAnimation
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
                rtl={undefined}

            >
                {bannerData.map((banner, i) => (
                    <BannerItem
                        key={i}
                        blackText={banner.blackText}
                        blueText={banner.blueText}
                        image={banner.image}
                    />
                ))}
            </Carousel>
        </div>
    )
}