import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import nft1 from '../img/nft/nft_img01.jpg';
import TrendNftAvatar1 from '../img/nft/nft_img04.jpg';
import TrendNftAvatar2 from '../img/nft/nft_img05.jpg';
import TrendNftAvatar3 from '../img/nft/nft_img06.jpg';
import TrendNftAvatar4 from '../img/nft/nft_img07.jpg';
import TrendNftAvatar5 from '../img/nft/nft_img08.jpg';

import nftFire from '../img/icons/fire.png';



const TrendingNft = () => {
    const slides = [
        {
            userImage: nft1,
            userTitle: "Black Crypto",
            user: "@Jon Max",
            largeImage: TrendNftAvatar1,
            infoTitle: "Last Bid",
            currency: "1.005",
            currencyType: "eth",
        },

        {
            userImage: nft1,
            userTitle: "Black Crypto",
            user: "@Jon Max",
            largeImage: TrendNftAvatar2,
            infoTitle: "Last Bid",
            currency: "1.005",
            currencyType: "eth",
        },

        {
            userImage: nft1,
            userTitle: "Black Crypto",
            user: "@Jon Max",
            largeImage: TrendNftAvatar3,
            infoTitle: "Last Bid",
            currency: "1.005",
            currencyType: "eth",
        },

        {
            userImage: nft1,
            userTitle: "Black Crypto",
            user: "@Jon Max",
            largeImage: TrendNftAvatar4,
            infoTitle: "Last Bid",
            currency: "1.005",
            currencyType: "eth",
        },

        {
            userImage: nft1,
            userTitle: "Black Crypto",
            user: "@Jon Max",
            largeImage: TrendNftAvatar5,
            infoTitle: "Last Bid",
            currency: "1.005",
            currencyType: "eth",
        },

    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-full overflow-hidden bg-[#10181f] py-36">
            <div className="mx-auto md:max-w-[1300px] px-4 sm:max-w-[540px] w-full px-20px">

                <div className="trendingNft__title-wrap mt-0 mb-[50px] mx-0">
                    <div className="flex flex-wrap md:flex-row flex-col mx-[-15px]">
                        <div className="md:w-7/12 w-full basis-7/12 md:block md:justify-normal flex justify-center relative px-[15px]">
                            <div className="trendingNft__title">
                                <h2 className="title flex items-center gap-[18px] text-[36px] m-0 justify-start text-white uppercase font-bold">top Trending <img className='w-10' src={nftFire} alt="nftFire" /></h2>
                            </div>
                        </div>
                        <div className="md:w-5/12 w-full basis-5/12 md:block md:justify-normal flex justify-center relative px-[15px]">
                            <div className="trendingNft__nav flex items-center justify-end gap-[13px] sm:mt-[18px]  xsm:mt-[18px]">
                                <button className="nft-prev group/arrow flex items-center justify-center w-10 h-10 text-[18px] text-grey rounded-50% border-2 border-solid border-grey hover:border-green hover:text-green bg-transparent">
                                    <svg className="fill-grey w-7 stroke-grey group-hover/arrow:stroke-green" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 12L10 6M4 12L10 18M4 12H14.5M20 12H17.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>

                                <button className="nft-next group/arrow flex items-center justify-center w-10 h-10 text-[18px] text-grey rounded-50% border-2 border-solid border-grey hover:border-green hover:text-green bg-transparent">
                                    <svg className="fill-grey w-7 stroke-grey group-hover/arrow:stroke-green" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 12H6.5M20 12L14 6M20 12L14 18M20 12H9.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Swiper
                    className="h-full nftSwiper"
                    navigation={{
                        prevEl: ".nft-prev",
                        nextEl: ".nft-next",
                    }}
                    modules={[Navigation]}
                    slidesPerView={1}
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    breakpoints={{
                        1200: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        480: {
                            slidesPerView: 1,
                        },
                    }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className="relative w-full ">
                            <div className={`mx-0 mt-0 transition-all p-8 rounded-8px bg-[#1c2530] rounded-br-[80px]  bg-no-repeatbg-center bg-cover duration-300 delay-0
                        ${activeIndex === index ? 'transform scale-100 ' : 'scale-100'}`}>

                                <div className="flex items-center pb-3 mx-0 mt-0">
                                    <div className="flex gap-2 ">
                                        <div className="image max-w-11 flex-[0_0_auto]">
                                            <a href="shop-details.html">
                                                <img className='rounded-50%' src={slide.userImage} alt={slide.userTitle} />
                                            </a>
                                        </div>
                                        <div className="info">
                                            <h6 className="mx-0 mt-0 mb-1 text-base font-semibold text-white capitalize ">
                                                {slide.userTitle}
                                            </h6>
                                            <a href="shop-details.html" className="block text-xs font-semibold leading-none underline user text-grey hover:text-green font-Barlow">
                                                {slide.user}
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="trendingNft__item-image">
                                    <a href="shop-details.html">
                                        <img className='object-cover w-full rounded-lg max-h-64 rounded-8px ' src={slide.largeImage} alt={slide.largeTitle} />
                                    </a>
                                </div>

                                <div className="trendingNft__item-bottom  flex items-center flex-wrap before:content-[''] before:block before:w-full before:h-px before:flex-[0_0_100%] before:mt-3.5 before:mb-3 before:mx-0 before:bg-[linear-gradient(90deg,transparent_0%,#383d44_50%,transparent_100%)]">
                                    <div className="trendingNft__item-price">
                                        <span className="block mx-0 mt-0 mb-2 text-sm font-bold leading-none capitalize bid text-grey font-Barlow">
                                            {slide.infoTitle}
                                        </span>
                                        <h6 className="eth flex items-center text-lg text-[#e8e8e8] font-semibold m-0"><i className="flaticon-ethereum text-amber-400 mr-2.5"></i>{slide.currency}
                                            <span className="ml-1 font-bold uppercase text-amber-400">
                                                {slide.currencyType}</span>
                                        </h6>
                                    </div>
                                    <a href="shop-details.html" className="bid-btn flex items-center gap-x-2.5 text-[#201f2a] capitalize font-semibold text-lg leading-none ml-auto mr-9 px-3.5 py-3 rounded-md font-Barlow bg-amber-400 hover:bg-green">
                                        Bid
                                        <i className="text-base flaticon-right-arrow-3"></i>
                                    </a>
                                </div>
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default TrendingNft;
