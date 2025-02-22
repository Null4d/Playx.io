import React from 'react';
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
import BlogAvatar1 from '../img/galerry/BlogAvatar1.png';
import BlogAvatar2 from '../img/galerry/BlogAvatar2.png';
import BlogAvatar3 from '../img/galerry/BlogAvatar3.png';

function BlogDetailsArea() {
    // sidebar
    const recentPosts = [
        { src: rcPost1, alt: "rcPost1", title: "zombie TOURNAMENT land max", date: "aug 19, 2023", link: "blog-details.html" },
        { src: rcPost2, alt: "rcPost2", title: "play to earn crypto games", date: "aug 19, 2023", link: "blog-details.html" },
        { src: rcPost3, alt: "rcPost3", title: "nft games android land max", date: "aug 19, 2023", link: "blog-details.html" },
    ];

    // Instagram images
    const instaImages = [
        { src: insta1, alt: "insta1" },
        { src: insta2, alt: "insta2" },
        { src: insta3, alt: "insta3" },
        { src: insta4, alt: "insta4" },
        { src: insta5, alt: "insta5" },
        { src: insta6, alt: "insta6" },
    ];

    const ImageLink = ({ link, src, alt, extraClasses = "" }) => (
        <a href={link} target="_blank" rel="noreferrer" className={extraClasses}><img src={src} alt={alt} className="w-full" /></a>
    );
    return (
        <>
            <section className="bg-[#0f161b] blog-details-area px-0 py-32">
                <div className="max-w-2xl mx-auto md:container">
                    <div className="flex flex-wrap justify-center mx-minus-15px ">
                        {/* Mainbar */}
                        <div className="w-full lg:w-4/5 xl:w-[69%] px-8 md:px-4">
                            {/* Blog Post Container */}
                            <div className="mx-0 mt-0 mb-16">
                                {/* Blog Post Image Section */}
                                <div className="mt-0 mb-[35px] mx-0">
                                    <img className='w-full' src={rcPost3} alt="rcPost3" />
                                </div>

                                {/* Blog Content Section */}
                                <div className="p-0 border-none clip-path-none">
                                    {/* Post Meta Information (Author, Date, Comments) */}
                                    <div className="mx-0 mt-0 mb-4">
                                        <ul className="m-0 p-0 flex items-center flex-wrap gap-[10px_40px]">
                                            <li className="flex items-center gap-1 text-sm font-bold tracking-wide uppercase text-grey">
                                                By<a className="block duration-300 text-grey hover:text-green" href="#b">Admin</a>
                                            </li>
                                            <li className="flex items-center gap-1 text-sm font-bold tracking-wide uppercase text-grey">📅 Aug 16, 2023</li>
                                            <li className="flex items-center gap-1 text-sm font-bold tracking-wide uppercase">
                                                <a className="block duration-300 text-grey hover:text-green" href="#b">☁️ No comments</a>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Post Title */}
                                    <h2 className="mx-0 mt-0 mb-6 text-4xl font-bold tracking-wide text-white uppercase">play to earn crypto games place</h2>

                                    {/* Post Description */}
                                    <p className="text-lg font-semibold text-grey">
                                        Excepteur sint occaecat atat non proident, sunt in culpa qui officia deserunt mollit anim id est labor umLor em ipsum dolor amet, consteur adiscing Duis elentum solliciin is yaugue euismods Nulla ullaorper. Ipsum is simply dummy text of  printing and typeetting industry. Lorem Ipsum has been the industry's standsaard sipiscing Duis elementum solliciin. Duis aute irure dolor in repderit in voluptate velit esse cillum dolorliquip ex ea commodo repderit in voluptate consequat nulla ullaorper.
                                    </p>

                                    {/* Blockquote Section */}
                                    <blockquote className="relative flex flex-col items-center mx-0 text-xl italic leading-normal text-white md:flex-row mt-7 mb-7">
                                        <i className='justify-start text-6xl md:mr-8 flaticon-quote-1 text-green'></i>
                                        <p className="text-xl italic font-semibold leading-normal text-center text-white md:text-2xl md:text-start">
                                            Duis elentum solliciin is yaugue euismods Nulla ullaorper. Ipsum is simply dummy text of printing and typeetting industry.
                                        </p>
                                    </blockquote>

                                    {/* Additional Paragraphs */}
                                    <p className="text-lg font-semibold text-grey">
                                        Axcepteur sint occaecat atat non proident, sunt in culpa qui officia deserunt mollit anim id est labor umLor em ipsum dolor amet, consteur adiscing Duis elentum solliciin is yaugue euismods Nulla ullaorper. Ipsum is simply dummy text of  printing and typeetting industry.
                                    </p>
                                    <p className="text-lg font-semibold text-grey">
                                        Simply dummy text of printing and typeetting industry. Lorem Ipsum has been the industry's standsaard sipiscing Duis elementum solliciin.Duis aute irure dolor in repderit.
                                    </p>

                                    {/* Subsection with Heading and Paragraph */}
                                    <div className="mx-0 mt-10 mb-8 text-2xl">
                                        <h4 className="mx-0 mt-0 mb-4 font-bold text-white uppercase">nft games android no investment</h4>
                                        <p className="text-lg font-semibold text-grey">
                                            Axcepteur sint occaecat atat non proident, sunt in culpa qui officia deserunt mollit anim id est labor umLor em ipsum dolor amet, consteur adiscing Duis elentum solliciin is yaugue euismods Nulla ullaorper. Ipsum is simply dummy text of  printing and typeetting industry. Lorem Ipsum has been the industry's standsaard sipiscing Duis elementum solliciin.Duis aute irure dolor in repderit.
                                        </p>
                                    </div>

                                    {/* Inner Blog Post Image */}
                                    <div className="mx-0 mt-0 mb-8 blog-details-inner-img">
                                        <img className='w-full' src={rcPost2} alt="rcPost2" />
                                    </div>

                                    {/* Final Paragraph */}
                                    <p className="text-lg font-semibold text-grey">
                                        Axcepteur sint occaecat atat non proident, sunt in culpa qui officia deserunt mollit anim id est labor umLor em ipsum dolor amet, consteur adiscing Duis elentum solliciin is yaugue euismods Nulla ullaorper. Ipsum is simply dummy text of  printing and typeetting industry.
                                    </p>

                                    {/* Blog Details Bottom Section (Tags & Share Options) */}
                                    <div className="blog-details-bottom mt-16 mb-0 mx-0 pt-6 border-t-2 border-t-[#19222b] border-solid">
                                        <div className="flex flex-col flex-wrap md:flex-row mx-minus-15px gap-y-4">
                                            {/* Tags Section */}
                                            <div className="relative w-full px-4 md:w-6/12 basis-6/12">
                                                <div className="flex items-center">
                                                    <h5 className="my-0 ml-0 mr-3 text-base font-bold text-white uppercase">tags :</h5>
                                                    <ul className="flex items-center p-0 m-0 md:flex-wrap">
                                                        <li className="mr-2 text-sm font-medium uppercase">
                                                            <a className="inline-block font-semibold duration-300 text-grey hover:text-green" href="#b">Esports</a>,
                                                        </li>
                                                        <li className="mr-2 text-sm font-medium uppercase">
                                                            <a className="inline-block font-semibold duration-300 text-grey hover:text-green" href="#b">Fantasy</a>,
                                                        </li>
                                                        <li className="mr-2 text-sm font-medium uppercase">
                                                            <a className="inline-block font-semibold duration-300 text-grey hover:text-green" href="#b">game</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Social Share Section */}
                                            <div className="relative w-6/12 px-4 basis-6/12">
                                                <div className="flex items-center justify-start md:justify-end ">
                                                    <h5 className="m-0 text-sm font-bold tracking-wider uppercase text-grey font-Poppins">share :</h5>
                                                    <ul className="flex items-center p-0 m-0">
                                                        <li className="ml-4">
                                                            <a className="block text-sm duration-300 text-grey hover:text-green" href="#b">
                                                                <i className="flaticon-facebook"></i>
                                                            </a>
                                                        </li>
                                                        <li className="ml-4">
                                                            <a className="block text-sm duration-300 text-grey hover:text-green" href="#b">
                                                                <i className="flaticon-twitter"></i>
                                                            </a>
                                                        </li>
                                                        <li className="ml-4">
                                                            <a className="block text-sm duration-300 text-grey hover:text-green" href="#b">
                                                                <i className="flaticon-twitch"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Author Information Section */}
                            <div className="mb-16 rounded-8px overflow-hidden flex-col md:flex-row flex items-center border px-10 py-5 border-solid border-[#232a30] bg-[#182029] text-left">
                                <div className="w-36 flex-[0_0_auto] mb-4 md:mb-0 mr-0 md:mr-[30px]">
                                    <a href="#b">
                                        <img className='object-cover h-36' src={BlogAvatar3} alt="BlogAvatar3" />
                                    </a>
                                </div>

                                <div className="relative">
                                    <span className="block mb-1 font-semibold tracking-wider text-center uppercase md:text-left text-amber-400">Written by</span>
                                    <h4 className="mb-3 text-xl font-bold tracking-wide text-center text-white uppercase md:text-left">
                                        <a className="duration-300 hover:text-green" href="#b">Kaceytron G.</a>
                                    </h4>
                                    <p className="m-0 text-base font-semibold text-center md:text-left md:text-lg text-grey">
                                        Axcepteur sint occaecat atat non proident, sunt culpa officia deserunt mollit anim id est labor umLor emdolor.
                                    </p>
                                </div>
                            </div>

                            {/* Comments Section */}
                            <div className="relative">Name
                                <h4 className="mx-0 mt-0 mb-10 text-3xl font-bold tracking-wide text-white uppercase">3 Comments</h4>
                                <div className="mt-0 mb-[70px] mx-0">
                                    <ul className="p-0 m-0 ">
                                        {/* Comment Item 1 */}
                                        <li>
                                            <div className="flex items-start flex-col md:flex-row mb-10 pb-10 border-b-[#19222b] border-b border-solid">
                                                <div className="w-32 flex-[0_0_auto] mr-6 mb-5 md:mb-0">
                                                    <img src={BlogAvatar1} alt="BlogAvatar1" />
                                                </div>

                                                <div className="block grow">
                                                    <div className="overflow-hidden relative mb-2.5">
                                                        <h6 className="flex justify-between mt-0 mb-1 text-lg font-bold tracking-wider text-white uppercase">
                                                            John William
                                                            <a href="#b" className="flex items-center text-lg tracking-widest duration-300 hover:text-green">
                                                                <i className="flaticon-send rotate-[180deg] text-green mr-1"></i> Reply
                                                            </a>
                                                        </h6>
                                                        <span className="block text-base font-semibold uppercase text-grey">September 6, 2023</span>
                                                    </div>

                                                    <p className="m-0 text-base font-semibold text-grey md:text-lg">
                                                        Axcepteur sint occaecat atat non proident, sunt culpa officia deserunt mollit anim id est labor umLor emdolor uni enim ad minim veniam quis nostrud today.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>

                                        {/* Comment Item 2 */}
                                        <li>
                                            <div className="flex items-start flex-col md:flex-row mb-10 ml-0 md:ml-20 pb-10 border-b-[#19222b] border-b border-solid">
                                                <div className="w-32 flex-[0_0_auto] mr-6 mb-5 md:mb-0">
                                                    <img src={BlogAvatar2} alt="BlogAvatar2" />
                                                </div>

                                                <div className="block grow">
                                                    <div className="overflow-hidden relative mb-2.5">
                                                        <h6 className="flex justify-between mt-0 mb-1 text-lg font-bold tracking-wider text-white uppercase">
                                                            Hanry Foul
                                                            <a href="#b" className="flex items-center text-lg tracking-widest duration-300 hover:text-green">
                                                                <i className="flaticon-send rotate-[180deg] text-green mr-1"></i> Reply
                                                            </a>
                                                        </h6>
                                                        <span className="block text-base font-semibold uppercase text-grey">September 6, 2023</span>
                                                    </div>

                                                    <p className="m-0 text-base font-semibold text-grey md:text-lg">
                                                        Axcepteur sint occaecat atat non proident, sunt culpa officia deserunt mollit anim id est labor umLor emdolor uni enim ad minim veniam quis nostrud today.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>

                                        {/* Comment Item 3 */}
                                        <li>
                                            <div className="flex items-start flex-col md:flex-row mb-10 pb-10 border-b-[#19222b] border-b border-solid">
                                                <div className="w-32 flex-[0_0_auto] mr-6 mb-5 md:mb-0">
                                                    <img src={BlogAvatar3} alt="BlogAvatar3" />
                                                </div>

                                                <div className="block grow">
                                                    <div className="overflow-hidden relative mb-2.5">
                                                        <h6 className="flex justify-between mt-0 mb-1 text-lg font-bold tracking-wider text-white uppercase">
                                                            Luna Rose
                                                            <a href="#b" className="flex items-center text-lg tracking-widest duration-300 hover:text-green">
                                                                <i className="flaticon-send rotate-[180deg] text-green mr-1"></i> Reply
                                                            </a>
                                                        </h6>
                                                        <span className="block text-base font-semibold uppercase text-grey">September 6, 2023</span>
                                                    </div>

                                                    <p className="m-0 text-base font-semibold text-grey md:text-lg">
                                                        Axcepteur sint occaecat atat non proident, sunt culpa officia deserunt mollit anim id est labor umLor emdolor uni enim ad minim veniam quis nostrud today.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Comment Form Section */}
                            <div className="relative">
                                <h3 className="mx-0 mt-0 mb-5 text-2xl font-bold tracking-wide text-white uppercase">Leave a Reply</h3>
                                <form action="#">Name
                                    <p className="mx-0 mt-0 mb-10 text-lg font-semibold text-grey">
                                        Email address will not be published. Required fields are marked *
                                    </p>
                                    <div className="flex flex-wrap mx-minus-15px">
                                        <div className="relative w-6/12 px-4 basis-6/12">
                                            <div className="relative mx-0 mt-0 mb-8 form-grp">
                                                <input type="text" placeholder="Name *" className=" block w-full text-white transition-all outline-none duration-[0.3s] ease-[ease-out] delay-[0s] px-[25px] py-3.5 border-2 border-solid border-[#19222b] bg-transparent placeholder:opacity-80 focus:!border-[#19222b] focus:!ring-0 focus:!ring-[none] focus:border-solid focus:!outline-offset-0  focus:outline-0"></input>
                                            </div>
                                        </div>

                                        <div className="relative w-6/12 px-4 basis-6/12">
                                            <div className="relative mx-0 mt-0 mb-8 form-grp">
                                                <input type="email" placeholder="Email *" className=" block w-full text-white transition-all outline-none duration-[0.3s] ease-[ease-out] delay-[0s] px-[25px] py-3.5 border-2 border-solid border-[#19222b] bg-transparent placeholder:opacity-80 focus:!border-[#19222b] focus:!ring-0 focus:!ring-[none] focus:border-solid focus:!outline-offset-0  focus:outline-0"></input>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative mx-0 mt-0 mb-8 form-grp">
                                        <textarea name="message" placeholder="Comment *" className=" h-40 max-h-40 block w-full outline-none text-white transition-all duration-[0.3s] ease-[ease-out] delay-[0s] px-[25px] py-3.5 border-2 border-solid border-[#19222b] bg-transparent placeholder:opacity-80 focus:!border-[#19222b] focus:!ring-0 focus:!outline-[none] focus:!ring-[none] order-solid focus:!outline-offset-0  focus:outline-0"></textarea>
                                    </div>

                                    <button className='duration-300 BlogBtn' type="submit">Post Comment</button>
                                </form>
                            </div>
                        </div>


                        {/* Sidebar */}
                        <div className="w-full md:w-4/5 lg:w-2/5 xl:w-[31%] pt-24 xl:pt-0 px-8 md:px-0">
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
                                            <a className="block text-white hover:text-green" href="#b"><i className="fab fa-twitter"></i></a>
                                            <a className="block text-white hover:text-green" href="#b"><i className="fab fa-facebook-f"></i></a>
                                            <a className="block text-white hover:text-green" href="#b"><i className="fab fa-linkedin-in"></i></a>
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
                </div>
            </section>
        </>
    );
}

export default BlogDetailsArea;
