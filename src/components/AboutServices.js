import React, { useState, useEffect } from 'react';
import aboutService1 from "../img/galerry/services_img01.jpg";
import aboutService2 from "../img/galerry/services_img02.jpg";
import aboutService3 from "../img/galerry/services_img03.jpg";
import aboutService4 from "../img/galerry/services_img04.jpg";

function AboutServices() {
    const [index, setIndex] = useState(0);
    const images = [
        aboutService1,
        aboutService2,
        aboutService3,
        aboutService4
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            <section className="pt-32 pb-32 bg-[#040608]">
                <div className="container mx-auto">
                    <div className="relative flex flex-wrap items-end mx-4 align-items-xl-start">
                        <div className="relative w-6/12 px-4 basis-6/12">
                            <div className="section__title text-left mb-[65px] relative after:content-[''] after:block after:w-20 after:h-1.5 after:bg-green after:mt-5 after:[clip-path:polygon(0%_0%,_100%_0%,_90%_100%,_10%_100%)]">
                                <span className="sub-title tg__animate-text block uppercase text-[14px] tracking-[2px] font-semibold text-green leading-none mt-0 mb-[7px] mx-0 ready stop">
                                    powerful services
                                </span>
                                <h3 className="title text-5xl text-white font-extrabold uppercase tracking-[1px] m-0 ">
                                    Our Powerful Services Done on time
                                </h3>
                            </div>
                            <div className="grid grid-cols-[repeat(2,1fr)] xsm:grid-cols-[repeat(1,1fr)] gap-[60px_50px] text-left">
                                <div>
                                    <div className="block mx-0 mt-0 mb-8 text-4xl leading-none text-green">
                                        <i className="flaticon-diamond"></i>
                                    </div>
                                    <div>
                                        <h4 className="mx-0 mt-0 mb-5 text-2xl font-bold tracking-wider text-white capitalize title">
                                            <a className="hover:text-green" href="services-details.html">
                                                Year Experience
                                            </a>
                                        </h4>
                                        <p className="m-0 text-base font-bold text-grey">
                                            Lorem ipsum dolor sitamet const adipiscng Duis eletum sollicitudin is yaugue euismods
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <div className="block mx-0 mt-0 mb-8 text-4xl leading-none text-green">
                                        <i className="flaticon-user-profile"></i>
                                    </div>
                                    <div>
                                        <h4 className="mx-0 mt-0 mb-5 text-2xl font-bold tracking-wider text-white capitalize title">
                                            <a className="hover:text-green" href="services-details.html">
                                                Expert Teams
                                            </a>
                                        </h4>
                                        <p className="m-0 text-base font-bold text-grey">
                                            Lorem ipsum dolor sitamet const adipiscng Duis eletum sollicitudin is yaugue euismods
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <div className="block mx-0 mt-0 mb-8 text-4xl leading-none text-green">
                                        <i className="flaticon-ethereum"></i>
                                    </div>
                                    <div>
                                        <h4 className="mx-0 mt-0 mb-5 text-2xl font-bold tracking-wider text-white capitalize title">
                                            <a className="hover:text-green" href="services-details.html">
                                                Best NFT Game
                                            </a>
                                        </h4>
                                        <p className="m-0 text-base font-bold text-grey">
                                            Lorem ipsum dolor sitamet const adipiscng Duis eletum sollicitudin is yaugue euismods
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <div className="block mx-0 mt-0 mb-8 text-4xl leading-none text-green">
                                        <i className="flaticon-settings-1"></i>
                                    </div>
                                    <div>
                                        <h4 className="mx-0 mt-0 mb-5 text-2xl font-bold tracking-wider text-white capitalize title">
                                            <a className="hover:text-green" href="services-details.html">
                                                Worldwide Client
                                            </a>
                                        </h4>
                                        <p className="m-0 text-base font-bold text-grey">
                                            Lorem ipsum dolor sitamet const adipiscng Duis eletum sollicitudin is yaugue euismods
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Left Side */}

                        <div className="relative w-6/12 basis-6/12 px-11">
                            <div className="relative h-[681px] ml-9 overflow-hidden">
                                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
                                    {images.map((image, i) => (
                                        <div key={i} className="w-full shrink-0">
                                            <img src={image} alt={`service_img${i}`} className="object-cover w-full h-full" />
                                        </div>
                                    ))}
                                </div>

                            </div>

                        </div>
                        {/* Right Side */}

                        <div className='absolute top-0 bottom-0 left-0 right-0'>
                            <a href="#b"
                                className="absolute duration-500 right-0 rounded-50% bottom-0 w-40 h-40 text-[98px] flex items-center justify-center rotate-45 bg-yellow-500 text-black rounded-full hover:rotate-0 hover:text-black">
                                <i className="flaticon-next"></i>
                            </a>
                        </div>
                        {/* Right Side - Arrow */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutServices;
