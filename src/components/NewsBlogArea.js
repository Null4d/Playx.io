import React from 'react';
import BlogPost1 from '../img/galerry/blog_post01.jpg';
import BlogPost2 from '../img/galerry/blog_post02.jpg';
import BlogPost3 from '../img/galerry/blog_post03.jpg';
import rcPost1 from '../img/galerry/rc_post01.jpg';
import rcPost2 from '../img/galerry/blog_post02.jpg';
import rcPost3 from '../img/galerry/blog_post03.jpg';
import BlogAvatar from '../img/galerry/avatar.jpg';
import insta1 from '../img/galerry/insta01.jpg';
import insta2 from '../img/galerry/insta02.jpg';
import insta3 from '../img/galerry/insta03.jpg';
import insta4 from '../img/galerry/insta04.jpg';
import insta5 from '../img/galerry/insta05.jpg';
import insta6 from '../img/galerry/insta06.jpg';

const NewsGamingArea = () => {
    // Main blog posts data
    const blogPosts = [
        {
            src: BlogPost1,
            alt: "BlogPost1",
            title: "zombie land TOURNAMENT max",
            description:
                "Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
            date: "Aug 19, 2023",
            link: "#b",
        },
        {
            src: BlogPost2,
            alt: "BlogPost2",
            title: "play to earn crypto games place",
            description:
                "Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
            date: "Aug 16, 2023",
            link: "#b",
        },
        {
            src: BlogPost3,
            alt: "BlogPost3",
            title: "nft games android no investment",
            description:
                "Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
            date: "Aug 16, 2023",
            link: "#b",
        },
    ];

    // Recent posts data for the sidebar
    const recentPosts = [
        { src: rcPost1, alt: "rcPost1", title: "zombie TOURNAMENT land max", date: "aug 19, 2023", link: "blog-details.html" },
        { src: rcPost2, alt: "rcPost2", title: "play to earn crypto games", date: "aug 19, 2023", link: "blog-details.html" },
        { src: rcPost3, alt: "rcPost3", title: "nft games android land max", date: "aug 19, 2023", link: "blog-details.html" },
    ];

    // Instagram images array
    const instaImages = [
        { src: insta1, alt: "insta1" },
        { src: insta2, alt: "insta2" },
        { src: insta3, alt: "insta3" },
        { src: insta4, alt: "insta4" },
        { src: insta5, alt: "insta5" },
        { src: insta6, alt: "insta6" },
    ];

    // Reusable component to wrap an image in an anchor tag
    const ImageLink = ({ link, src, alt, extraClasses = "" }) => (
        <a href={link} target="_blank" rel="noreferrer" className={extraClasses}><img src={src} alt={alt} className="w-full" /></a>
    );

    return (
        <section className="px-0 bg-[#0f161b] py-32">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center lg:items-start lg:flex-row lg:mx-minus-15px">
                    {/* Main Blog Posts */}
                    <div className="w-full lg:w-[69%] flex-[0_0_auto] px-4">
                        {blogPosts.map((post, index) => (
                            <div key={index} className="mx-0 mt-0 mb-12">
                                <a href={post.link}><img className="w-full max-w-full" src={post.src} alt={post.alt} /></a>
                                <div className="border pl-10 pr-[45px] py-10 border-solid border-[#232a30] bg-[#182029] clip-path-polygon-[100%_0,_100%_calc(100%_-_25px),_calc(100%_-_25px)_100%,_0_100%,_0_0]">
                                    {/* Blog Post Meta */}
                                    <div className="mx-0 mt-0 mb-4">
                                        <ul className="list-wrap m-0 p-0 flex items-center flex-wrap gap-[10px_40px]">
                                            <li className="flex items-center gap-1 text-base font-bold leading-none uppercase text-grey">By Admin</li>
                                            <li className="flex items-center gap-1 text-base font-bold leading-none uppercase text-grey">📅 {post.date}</li>
                                            <li className="flex items-center gap-1 text-base font-bold leading-none uppercase text-grey">☁️ No comments</li>
                                        </ul>
                                    </div>
                                    {/* Title */}
                                    <h2 className="title text-3xl lg:text-4xl text-white tracking-[1px] font-bold uppercase mt-8 mb-6 mx-0">
                                        <a className="duration-300 hover:text-green" href={post.link}>{post.title}</a>
                                    </h2>
                                    {/* Description */}
                                    <p className="pb-5 text-base font-semibold lg:text-lg text-grey">{post.description}</p>
                                    {/* Bottom Section */}
                                    <div className="flex justify-between flex-wrap gap-[10px_0] mt-9 mb-0 mx-0">
                                        <div className="mr-5">
                                            <a className="block text-sm font-bold leading-none tracking-wider duration-300 text-grey hover:text-green" href={post.link}>READ MORE</a>
                                        </div>
                                        <button className="text-sm font-bold leading-none tracking-wider uppercase duration-300 text-grey hover:text-green">Share :</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <div className="w-full md:w-4/5 lg:w-2/5 xl:w-[31%] flex-[0_0_auto] px-4">
                        <aside className="ml-0 lg:ml-5">
                            {/* Author Widget */}
                            <div className="mx-0 mt-0 mb-14">
                                <div className="text-left">
                                    <div className="mx-0 mt-0 mb-6">
                                        <img className="object-cover w-full h-full" src={BlogAvatar} alt="BlogAvatar" />
                                    </div>

                                    <h4 className="name text-xl tracking-wider mt-0 mb-2.5 text-white font-bold uppercase mx-0">Kaceytron G.</h4>
                                    <p className="m-0 text-lg font-semibold text-grey">Lorem ipsum sitamet conteur adipiscing Duis elementum solliciin</p>
                                    <div className="flex justify-start gap-5 mx-0 mt-5 mb-0">
                                        <a className="block leading-none text-white hover:text-green" href="#b"><i className="fab fa-twitter"></i></a>
                                        <a className="block leading-none text-white hover:text-green" href="#b"><i className="fab fa-facebook-f"></i></a>
                                        <a className="block leading-none text-white hover:text-green" href="#b"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>

                            {/* Search Widget */}
                            <div className="mx-0 mt-0 mb-14">
                                <form className="relative">
                                    <div className="relative flex items-center">
                                        <input className="flex-1 text-sm font-medium border text-white pl-6 pr-12 py-4 border-solid hover:border-[#232a30] border-[#232a30] bg-[#182029] outline-none placeholder:uppercase placeholder:text-sm placeholder:text-grey placeholder:opacity-[0.54] placeholder:font-medium" type="text" placeholder="Search here.." style={{ clipPath: 'polygon(100%_0,_100%_calc(100%_-_20px),_calc(100%_-_20px)_100%,_0_100%,_0_0)' }} />
                                        <button className="absolute right-[30px] text-white text-[18px] p-0 border-none hover:text-green bg-transparent" type="button"><i className="flaticon-loupe"></i></button>
                                    </div>
                                </form>
                            </div>

                            {/* Categories Widget */}
                            <div className="mx-0 mt-0 mb-14">
                                <h4 className="mx-0 mt-0 mb-6 text-2xl font-bold text-white">CATEGORIES</h4>
                                <ul className="p-0 m-0 list-wrap">
                                    <li className="text-base font-semibold text-grey uppercase relative mb-3.5">
                                        <a className="text-grey relative font-bold tracking-wider duration-300 block before:content-[''] before:absolute before:w-0 before:h-2 before:-translate-y-2/4 before:bg-green before:transition-[width] before:duration-300 before:rounded-[0_5px_0_0] before:left-0 before:top-2/4 hover:text-green hover:pl-4 hover:before:w-2" href="#b">gaming</a>
                                        <span className="absolute top-0 right-0 float-right font-bold">(11)</span>
                                    </li>

                                    <li className="text-base font-semibold text-grey uppercase relative mb-3.5">
                                        <a className="text-grey relative font-bold tracking-wider duration-300 block before:content-[''] before:absolute before:w-0 before:h-2 before:-translate-y-2/4 before:bg-green before:transition-[width] before:duration-300 before:rounded-[0_5px_0_0] before:left-0 before:top-2/4 hover:text-green hover:pl-4 hover:before:w-2" href="#b">ELECTRONIC</a>
                                        <span className="absolute top-0 right-0 float-right font-bold">(4)</span>
                                    </li>

                                    <li className="text-base font-semibold text-grey uppercase relative mb-3.5">
                                        <a className="text-grey relative font-bold tracking-wider duration-300 block before:content-[''] before:absolute before:w-0 before:h-2 before:-translate-y-2/4 before:bg-green before:transition-[width] before:duration-300 before:rounded-[0_5px_0_0] before:left-0 before:top-2/4 hover:text-green hover:pl-4 hover:before:w-2" href="#b">online</a>
                                        <span className="absolute top-0 right-0 float-right font-bold">(21)</span>
                                    </li>

                                    <li className="text-base font-semibold text-grey uppercase relative mb-3.5">
                                        <a className="text-grey relative font-bold tracking-wider duration-300 block before:content-[''] before:absolute before:w-0 before:h-2 before:-translate-y-2/4 before:bg-green before:transition-[width] before:duration-300 before:rounded-[0_5px_0_0] before:left-0 before:top-2/4 hover:text-green hover:pl-4 hover:before:w-2" href="#b">TOURNAMENT</a>
                                        <span className="absolute top-0 right-0 float-right font-bold">(15)</span>
                                    </li>

                                    <li className="text-base font-semibold text-grey uppercase relative mb-3.5">
                                        <a className="text-grey relative font-bold tracking-wider duration-300 block before:content-[''] before:absolute before:w-0 before:h-2 before:-translate-y-2/4 before:bg-green before:transition-[width] before:duration-300 before:rounded-[0_5px_0_0] before:left-0 before:top-2/4 hover:text-green hover:pl-4 hover:before:w-2" href="#b">controller</a>
                                        <span className="absolute top-0 right-0 float-right font-bold">(2)</span>
                                    </li>

                                    <li className="relative mb-0 text-base font-semibold uppercase text-grey">
                                        <a className="text-grey relative font-bold tracking-wider duration-300 block before:content-[''] before:absolute before:w-0 before:h-2 before:-translate-y-2/4 before:bg-green before:transition-[width] before:duration-300 before:rounded-[0_5px_0_0] before:left-0 before:top-2/4 hover:text-green hover:pl-4 hover:before:w-2" href="#b">live</a>
                                        <span className="absolute top-0 right-0 float-right font-bold">(7)</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Recent Posts Widget */}
                            <div className="mx-0 mt-0 mb-14">
                                <h4 className="mx-0 mt-0 mb-6 text-2xl font-bold text-white uppercase ">Recent Posts</h4>
                                {recentPosts.map((rcPost, index) => (
                                    <div key={index} className="flex items-center relative ml-0 mr-[30px] mt-0 ">
                                        <div className="w-32 mb-4 flex-[0_0_auto] mr-6 ">
                                            <ImageLink link={rcPost.link} src={rcPost.src} alt={rcPost.alt} />
                                        </div>
                                        <div className="mb-6 grow">
                                            <h6 className="title text-base xl:text-lg uppercase text-white font-bold leading-[1.3] tracking-wider mt-0 mb-[5px] mx-0">
                                                <a className="duration-300 hover:text-green" href={rcPost.link}>{rcPost.title}</a>
                                            </h6>
                                            <span className="block text-sm font-semibold tracking-wider uppercase text-grey">{rcPost.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Newsletter Widget */}
                            <div className="mx-0 mt-0 mb-14">
                                <h4 className="mx-0 mt-0 mb-6 text-2xl font-bold text-white uppercase">Newsletter</h4>
                                <p className="mx-0 mt-0 mb-10 text-xl font-semibold text-grey">Lorem ipsum sitamet conteur adipiscin</p>

                                <form action="#b" className="relative">
                                    <input className="block w-full text-base font-bold text-green pt-0 pb-[15px] px-0 border-b-2 border-b-[#19222b] border-transparent border-solid bg-transparent placeholder:text-lg placeholder:tracking-wider placeholder:font-bold placeholder:text-green focus:!border-transparent focus:!border-b-[#19222b]" type="email" name="email" placeholder="Enter Your Email" />
                                    <button type="submit" className="absolute text-lg -rotate-45 border-[none] right-0 top-0 bg-transparent">
                                        <i className="fas fa-arrow-right"></i>
                                    </button>
                                </form>
                            </div>

                            {/* Instagram Widget */}
                            <div className="mx-0 mt-0 mb-14">
                                <h4 className="mx-0 mt-0 mb-8 text-2xl font-bold text-white uppercase">INSTAGRAM</h4>
                                <div className="grid grid-cols-[repeat(3,1fr)] gap-[11px]">
                                    {instaImages.map((insta, index) => (
                                        <div key={index}>
                                            <ImageLink link="#b" src={insta.src} alt={insta.alt} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tag Cloud Widget using map */}
                            <div className="m-0">
                                <h4 className="mx-0 mt-0 mb-8 text-2xl font-bold text-white uppercase">Tag Cloud</h4>
                                <div className="flex flex-wrap gap-2.5">
                                    <a className="block text-sm duration-300 font-bold uppercase text-grey border px-6 py-3 border-solid border-[#232a30] hover:border-green hover:text-[#0f161b] bg-[#182029] hover:bg-green" href="#b" style={{ clipPath: 'polygon(100% 0%, 100% calc(100% - 13px), calc(100% - 13px) 100%, 0 100%, 0 0)' }}>E-sports</a>
                                    <a className="block text-sm duration-300 font-bold uppercase text-grey border px-6 py-3 border-solid border-[#232a30] hover:border-green hover:text-[#0f161b] bg-[#182029] hover:bg-green" href="#b" style={{ clipPath: 'polygon(100% 0%, 100% calc(100% - 13px), calc(100% - 13px) 100%, 0 100%, 0 0)' }}>Fantasy</a>
                                    <a className="block text-sm duration-300 font-bold uppercase text-grey border px-6 py-3 border-solid border-[#232a30] hover:border-green hover:text-[#0f161b] bg-[#182029] hover:bg-green" href="#b" style={{ clipPath: 'polygon(100% 0%, 100% calc(100% - 13px), calc(100% - 13px) 100%, 0 100%, 0 0)' }}>game</a>
                                    <a className="block text-sm duration-300 font-bold uppercase text-grey border px-6 py-3 border-solid border-[#232a30] hover:border-green hover:text-[#0f161b] bg-[#182029] hover:bg-green" href="#b" style={{ clipPath: 'polygon(100% 0%, 100% calc(100% - 13px), calc(100% - 13px) 100%, 0 100%, 0 0)' }} >Tournaments</a>
                                    <a className="block text-sm duration-300 font-bold uppercase text-grey border px-6 py-3 border-solid border-[#232a30] hover:border-green hover:text-[#0f161b] bg-[#182029] hover:bg-green" href="#b" style={{ clipPath: 'polygon(100% 0%, 100% calc(100% - 13px), calc(100% - 13px) 100%, 0 100%, 0 0)' }}>Matches</a>
                                    <a className="block text-sm duration-300 font-bold uppercase text-grey border px-6 py-3 border-solid border-[#232a30] hover:border-green hover:text-[#0f161b] bg-[#182029] hover:bg-green" href="#b" style={{ clipPath: 'polygon(100% 0%, 100% calc(100% - 13px), calc(100% - 13px) 100%, 0 100%, 0 0)' }}>Streamers</a>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>

                {/* Navigation */}
                <div className="mx-0 mt-16 mb-0 ">
                    {/* Pagination Container */}
                    <ul className="m-0 p-0 flex flex-wrap justify-center gap-[10px_15px] sm:gap-[10px] xsm:gap-[10px]">

                        <li>
                            <a href="#b" className="flex items-center justify-center px-4 py-3 bg-[linear-gradient(0deg,#1215187d_0%,#1f29355c_100%)] bg-gray-950 border border-gray-700 text-[#adb0bc] font-bold rounded-[5px] border-solid font-Barlow">
                                01
                            </a>
                        </li>

                        <li>
                            <a href="#b" className="flex items-center justify-center px-4 py-3 border font-bold rounded-[5px] border-solid font-Barlow current bg-none border-green bg-green text-[#201f2a]">
                                02
                            </a>
                        </li>

                        <li>
                            <a href="#b" className="flex items-center justify-center px-4 py-3 bg-[linear-gradient(0deg,#1215187d_0%,#1f29355c_100%)] bg-gray-950 border border-gray-700 text-[#adb0bc] font-bold rounded-[5px] border-solid font-Barlow">
                                03
                            </a>
                        </li>

                        <li>
                            <a href="#b" className="flex items-center justify-center px-4 py-3 bg-[linear-gradient(0deg,#1215187d_0%,#1f29355c_100%)] bg-gray-950 border border-gray-700 text-[#adb0bc] font-bold rounded-[5px] border-solid font-Barlow">
                                ....
                            </a>
                        </li>

                        <li>
                            <a href="#b" className="flex items-center justify-center px-4 py-3 bg-[linear-gradient(0deg,#1215187d_0%,#1f29355c_100%)] bg-gray-950 border border-gray-700 text-[#adb0bc] font-bold rounded-[5px] border-solid font-Barlow">
                                →
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default NewsGamingArea;