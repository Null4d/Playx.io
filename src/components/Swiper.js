import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import aboutSlide1 from '../img/galerry/gallery01.jpg';
import aboutSlide2 from '../img/galerry/gallery02.jpg';
import aboutSlide3 from '../img/galerry/gallery03.jpg';
import aboutSlide4 from '../img/galerry/gallery04.jpg';
import aboutSlide5 from '../img/galerry/gallery05.jpg';

const MySwiper = () => {
    const slides = [
        {
            image: aboutSlide1,
            title: "PUBG Tournament",
            description: "RATE 50%",
        },
        {
            image: aboutSlide2,
            title: "Assassin's Creed",
            description: "RATE 65%",
        },
        {
            image: aboutSlide3,
            title: "Cyberpunk 2077",
            description: "RATE 60%",
        },
        {
            image: aboutSlide4,
            title: "The Chant s.2",
            description: "RATE 70%",
        },
        {
            image: aboutSlide5,
            title: "Dota 2 tournament",
            description: "RATE 85%",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-full overflow-hidden">
            <div className="mx-auto md:max-w-[1300px] sm:max-w-[540px] w-full pb-32 px-20px">
                <div className="flex flex-wrap mx-[-15px] justify-center ">
                    <div className="w-full basis-9/12 justify-center mx-auto mcc:w-9/12 xl:basis-9/12 lg:w-10/12 lg:basis-10/12 md:w-11/12 md:basis-11/12 sm:w-full sm:basis-full  xsm:w-full xsm:basis-full relative px-[15px]">
                        <Swiper
                            scrollbar={{
                                hide: false,
                            }}
                            modules={[Scrollbar]}
                            className="h-full mySwiper"
                            slidesPerView={1}
                            spaceBetween={0}
                            centeredSlides={true}
                            loop={true}
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        >
                            {slides.map((slide, index) => (
                                <SwiperSlide
                                    key={index}
                                    className="relative w-full mb-12"
                                >
                                    <div className={`mx-0 mt-0 transition-all duration-300 delay-0 mb-14 
                ${activeIndex === index ? 'transform scale-100 ' : 'scale-90'}`}
                                    >
                                        <div className="mx-0 mt-0">
                                            <a href="#b">
                                                <img
                                                    className='w-full border-gray-800 shadow-[0px_3px_7px_0px_rgba(0,0,0,0.42)] border-8 border-solid'
                                                    src={slide.image}
                                                    alt={slide.title}
                                                />
                                            </a>
                                        </div>

                                        <div className={`flex items-center justify-between transition-all duration-300 opacity-0 translate-y-12 
                            ${activeIndex === index ? 'opacity-100 translate-y-0' : ''}`}>
                                            <h3 className="m-0 font-bold text-white uppercase text-md sm:text-2xl">
                                                {slide.title}
                                            </h3>

                                            <p className="block font-semibold text-gray-400 uppercase sm: rate font-Barlow">
                                                {slide.description}
                                            </p>
                                        </div>
                                    </div>

                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySwiper;
