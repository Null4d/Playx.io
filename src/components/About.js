import "./style.css";
import aboutAvatar1 from '../img/others/about_tab01.png';
import aboutAvatar2 from '../img/others/about_tab02.png';
import aboutAvatar3 from '../img/others/about_tab03.png';
import aboutAvatar4 from '../img/others/about_tab04.png';
import aboutAvatar5 from '../img/others/about_tab04.png';
import aboutAvatar6 from '../img/others/about_tab05.png';
import aboutFeatures1 from '../img/icons/features_icon01.png';
import aboutFeatures2 from '../img/icons/features_icon02.png';
import aboutFeatures3 from '../img/icons/features_icon03.png';
import aboutbg1 from '../img/others/about_img01.jpg';

function About() {
    return (
        <>
            <section className="bg-[url('/src/img/bg/area_bg01.jpg')] py-36">
                <div className="container mx-auto">
                    <div>
                        <div className="flex flex-wrap justify-center mx-4">
                            <div className="relative w-6/12 px-4 basis-6/12">
                                <div className="text-center mb-16 relative after:content-[''] after:block after:w-8 after:h- after:mt-5 after:mb-0 after:mx-auto">
                                    <p className="block mx-0 mt-0 mb-2 text-sm font-bold leading-none tracking-wider uppercase text-green">
                                        know about us
                                    </p>

                                    <h3 className="m-0 text-5xl font-extrabold text-white uppercase after:content-[''] after:block after:w-16 after:h-1.5 after:bg-green after:mx-auto after:mt-5 after:[clip-path:polygon(0%_0%,_100%_0%,_90%_100%,_10%_100%)]">
                                        top rated steamers
                                    </h3>
                                </div>
                            </div>
                        </div>
                        {/* About Title And Button */}

                        <div className="flex flex-wrap justify-center mx-4">
                            <div className="relative px-4 basis-10/12">
                                <div className="flex items-center flex-wrap justify-center gap-[15px_35px] mt-0 mb-10 mx-0">
                                    <a className="tg-btn-2" href="#b">
                                        BUY HERO
                                    </a>

                                    <a className="tg-btn-2 -secondary" href="#b">
                                        buy nfts
                                    </a>
                                </div>

                                <ul className="relative flex flex-wrap justify-center gap-10 px-0 py-6 nav-tabs before:absolute">
                                    <li className="relative z-1">
                                        <button className="relative border transition-all rounded-50% border-solid border-green">
                                            <span className="absolute border-green w-88px h-88px border -translate-x-2/4 -translate-y-2/4 transition-all z-minus-1 rounded-50% border-solid left-2/4 top-2/4 before:content-[''] before:absolute before:w-full before:h-full before:bg-black before:rounded-50% before:left-0 before:top-0">

                                            </span>

                                            <img className='bg-black rounded-50%' src={aboutAvatar1} alt="aboutAvatar" />
                                        </button>
                                    </li>

                                    <li className="relative z-1">
                                        <button className="relative border transition-all rounded-50% border-solid border-amber-300">
                                            <span className="absolute border-amber-300 w-88px h-88px border -translate-x-2/4 -translate-y-2/4 transition-all z-minus-1 rounded-50% border-solid left-2/4 top-2/4 before:content-[''] before:absolute before:w-full before:h-full before:bg-black before:rounded-50% before:left-0 before:top-0">

                                            </span>

                                            <img className='bg-black rounded-50%' src={aboutAvatar2} alt="aboutAvatar" />
                                        </button>
                                    </li>

                                    <li className="relative z-1">
                                        <button className="relative border transition-all rounded-50% border-solid border-amber-300">
                                            <span className="absolute border-amber-300 w-88px h-88px border -translate-x-2/4 -translate-y-2/4 transition-all z-minus-1 rounded-50% border-solid left-2/4 top-2/4 before:content-[''] before:absolute before:w-full before:h-full before:bg-black before:rounded-50% before:left-0 before:top-0">

                                            </span>

                                            <img className='bg-black rounded-50%' src={aboutAvatar3} alt="aboutAvatar" />
                                        </button>
                                    </li>

                                    <li className="relative z-1">
                                        <button className="relative border transition-all rounded-50% border-solid border-amber-300">
                                            <span className="absolute border-amber-300 w-88px h-88px border -translate-x-2/4 -translate-y-2/4 transition-all z-minus-1 rounded-50% border-solid left-2/4 top-2/4 before:content-[''] before:absolute before:w-full before:h-full before:bg-black before:rounded-50% before:left-0 before:top-0">

                                            </span>

                                            <img className='bg-black rounded-50%' src={aboutAvatar4} alt="aboutAvatar" />
                                        </button>
                                    </li>

                                    <li className="relative z-1">
                                        <button className="relative border transition-all rounded-50% border-solid border-amber-300">
                                            <span className="absolute border-amber-300 w-88px h-88px border -translate-x-2/4 -translate-y-2/4 transition-all z-minus-1 rounded-50% border-solid left-2/4 top-2/4 before:content-[''] before:absolute before:w-full before:h-full before:bg-black before:rounded-50% before:left-0 before:top-0">

                                            </span>

                                            <img className='bg-black rounded-50%' src={aboutAvatar5} alt="aboutAvatar" />
                                        </button>
                                    </li>

                                    <li className="relative z-1">
                                        <button className="relative border transition-all rounded-50% border-solid border-amber-300">
                                            <span className="absolute border-amber-300 w-88px h-88px border -translate-x-2/4 -translate-y-2/4 transition-all z-minus-1 rounded-50% border-solid left-2/4 top-2/4 before:content-[''] before:absolute before:w-full before:h-full before:bg-black before:rounded-50% before:left-0 before:top-0">

                                            </span>

                                            <img className='rounded-50%' src={aboutAvatar6} alt="aboutAvatar" />
                                        </button>
                                    </li>
                                </ul>


                            </div>
                        </div>
                        {/* About Content */}
                    </div>
                    {/* About Top */}

                    <div className="tab-content relative overflow-hidden mt-20 mb-0 mx-0 after:content-[''] after:absolute after:w-full after:h-px after:opacity-5 after:left-0 after:bottom-0 after:bg-[linear-gradient(45deg,rgba(2,0,36,0)0%,#45f882_100%)]">
                        <div className="flex flex-wrap justify-center ">
                            <div className="relative px-4">
                                <img className='' src={aboutbg1} alt="aboutbg1" />
                            </div>
                            {/* About content img */}

                            <div className="relative w-3/6 px-4">
                                <div className="flex flex-col h-full">
                                    <div className="flex h-3/5 ABOUt content">
                                        <div className="mx-0 mt-0 w-735px">
                                            <h4 className="title font-bold text-white text-3xl mt-0 mb-0.5 mx-0">
                                                HUMAN GAME
                                            </h4>

                                            <p className="block mx-0 mt-0 mb-5 font-semibold uppercase rate text--3xl text-amber-400 font-Barlow">
                                                RATE 50%
                                            </p>

                                            <span className="m-0 text-slate-300 ">
                                                Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.
                                            </span>
                                        </div>

                                        <ul className="w-4/5 p-0 m-0 list-wrap ">
                                            <li className="bg-gradient-to-r from-gray-800 via-transparent/100 to-gray-800/100 shadow-[0px_3px_7px_0px_rgba(0,0,0,0.21)] flex items-center text-base font-bold translate-x-0 duration-500 mt-0 mb-3 mx-0 py-2 rounded-8px hover:-translate-x-2.5 font-Barlow">
                                                <img src={aboutFeatures1} alt="aboutFeatures1" />
                                                <p className="ml-2 text-white">
                                                    Chichi Dragon Ball
                                                </p>
                                            </li>

                                            <li className="bg-gradient-to-r from-gray-800 via-transparent/100 to-gray-800/100 shadow-[0px_3px_7px_0px_rgba(0,0,0,0.21)] flex items-center text-base font-bold translate-x-0 duration-500 mt-0 mb-3 mx-0 py-2 rounded-8px hover:-translate-x-2.5 font-Barlow">
                                                <img src={aboutFeatures2} alt="aboutFeatures2" />
                                                <p className="ml-2 text-white">
                                                    Space Babe Night
                                                </p>
                                            </li>

                                            <li className="bg-gradient-to-r from-gray-800 via-transparent/100 to-gray-800/100 shadow-[0px_3px_7px_0px_rgba(0,0,0,0.21)] flex items-center text-base font-bold translate-x-0 duration-500 mt-0 mb-3 mx-0 py-2 rounded-8px hover:-translate-x-2.5 font-Barlow">
                                                <img src={aboutFeatures3} alt="aboutFeatures3" />
                                                <p className="ml-2 text-white">
                                                    Dragon Ball
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* About content list */}

                                    <ul className="flex items-center gap-2 p-0 m-0 mt-auto list-wrap ">
                                        <li className="flex-auto">
                                            <a className=" block bg-slate-900 bg-[linear-gradient(0deg,#10181f_0%,_transparent_0%,#141a20_100%)] duration-200 uppercase text-base font-bold text-slate-400 text-center tracking-wider px-8 py-6 hover:text-green font-Barlow" href="#b">
                                                DRAGON Ball
                                            </a>
                                        </li>

                                        <li className="flex-auto">
                                            <a className=" block bg-slate-900 bg-[linear-gradient(0deg,#10181f_0%,_transparent_0%,#141a20_100%)] duration-200 uppercase text-base font-bold text-slate-400 text-center tracking-wider px-8 py-6 hover:text-green font-Barlow" href="#b">
                                                NFT MARKET
                                            </a>
                                        </li>

                                        <li className="flex-auto">
                                            <a className=" block bg-slate-900 bg-[linear-gradient(0deg,#10181f_0%,_transparent_0%,#141a20_100%)] duration-200 uppercase text-base font-bold text-slate-400 text-center tracking-wider px-8 py-6 hover:text-green font-Barlow" href="#b">
                                                SUPPORT
                                            </a>
                                        </li>
                                    </ul>
                                    {/* About content bıttons */}
                                </div>
                            </div>
                            {/* about content texts */}
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default About;
