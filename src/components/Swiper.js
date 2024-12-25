import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
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
        <Swiper
            className="h-full"
            slidesPerView={1.1}
            spaceBetween={70}
            centeredSlides={true}
            loop={true}
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
                1200: {
                    slidesPerView: 2.2,
                },

                992: {
                    slidesPerView: 1.9,
                },

                768: {
                    slidesPerView: 1.5,
                },

                432: {
                    slidesPerView: 1.2,
                }
            }}
            style={{ padding: '0 15px' }}
        >
            {slides.map((slide, index) => (
                <SwiperSlide
                    key={index}
                    className="relative py-40 mr-10"
                >
                    <div
                        className={`mx-0 mt-0 transition-all duration-300 swiper-scale delay-0 mb-14 
                ${activeIndex === index ? 'transform scale-110' : ''}`}
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
                            <h3 className="m-0 text-2xl font-bold text-white uppercase title">
                                {slide.title}
                            </h3>

                            <p className="block font-semibold text-gray-400 uppercase rate font-Barlow">
                                {slide.description}
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}

        </Swiper>
    );
};

export default MySwiper;
