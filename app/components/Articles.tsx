'use client'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ArticleItem from '@/components/ArticleItem';
import { ArticleItemProps } from '@/components/ArticleItem';
import LinkToMore from './LinkToMore';

const articles: ArticleItemProps[] = [
    {
        title: 'Джиппинг в горную Абхазию — озера, водопады и Шерлок Холмс',
        city: 'абхазия',
        createdAt: '12.02.2024',
        postedBefore: '7 мин.',
        thumbnail: '/thumbs/popular_excursions/thumb.png'
    },
    {
        title: 'Джиппинг в горную Абхазию — озера, водопады и Шерлок Холмс',
        city: 'абхазия',
        createdAt: '12.02.2024',
        postedBefore: '7 мин.',
        thumbnail: '/thumbs/popular_excursions/thumb.png'
    },
    {
        title: 'Джиппинг в горную Абхазию — озера, водопады и Шерлок Холмс',
        city: 'абхазия',
        createdAt: '12.02.2024',
        postedBefore: '7 мин.',
        thumbnail: '/thumbs/popular_excursions/thumb.png'
    },
    {
        title: 'Джиппинг в горную Абхазию — озера, водопады и Шерлок Холмс',
        city: 'абхазия',
        createdAt: '12.02.2024',
        postedBefore: '7 мин.',
        thumbnail: '/thumbs/popular_excursions/thumb.png'
    },
]


export default function Articles() {

    return (
        <div className='md:py-[60px] py-[32px] mx-auto max-w-[1200px]'>
            <div className="md:flex md:flex-row md:justify-between items-center md:mb-5 mb-2">
                <p className="md:block hidden md:text-5xl text-2xl font-semibold">Журнал</p>
                <p className='md:hidden block text-2xl font-bold'>Блог</p>
                <LinkToMore className="md:block hidden" caption="Все статьи" onClick={() => { }} />
            </div>
            <div className="md:block hidden">
                <Carousel
                    customRightArrow={
                        <img src='/icons/svg/custom arrow.svg' alt="right arrow" title="right arrow" className='absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer w-[48px] h-[48px]' />
                    }
                    customLeftArrow={
                        <img src='/icons/svg/custom arrow.svg' alt="right arrow" title="right arrow" className='absolute top-1/2 -translate-y-1/2 left-4 cursor-pointer rotate-180 w-[48px] h-[48px]' />
                    }
                    additionalTransfrom={0}
                    arrows
                    autoPlay
                    autoPlaySpeed={2000}
                    centerMode={false}
                    containerClass="container"
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
                            items: 2,
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
                    partialVisible
                    rtl={undefined}

                >
                    {articles.map((article, i) => (
                        <ArticleItem
                            className="pr-3"
                            key={i}
                            title={article.title}
                            city={article.city}
                            createdAt={article.createdAt}
                            postedBefore={article.postedBefore}
                            thumbnail={article.thumbnail}
                        />
                    ))}
                </Carousel>
            </div>
            <div className='md:hidden block'>
                {articles.map((article, i) => (
                    <ArticleItem
                        className='mb-4'
                        key={i}
                        title={article.title}
                        city={article.city}
                        createdAt={article.createdAt}
                        postedBefore={article.postedBefore}
                        thumbnail={article.thumbnail}
                    />
                ))}
            </div>
            <div className='text-center'>
                <LinkToMore className="mx-auto md:hidden block" caption="Все статьи" linkURL="/articles" />
            </div>
        </div>
    )
}