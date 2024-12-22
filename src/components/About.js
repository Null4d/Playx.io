import "./style.css";
// import aboutAvatar from '../img/others/about_tab01.png';


function About() {
    return (
        <>
            <section className="bg-slate-700 py-36">
                <div className="flex flex-wrap justify-center mx-4">
                    <div className="relative w-6/12 px-4 basis-6/12">
                        <div className="text-center mb-16 relative after:content-[''] after:block after:w-8 after:h- after:mt-5 after:mb-0 after:mx-auto">
                            <p className="block mx-0 mt-0 mb-2 text-sm font-bold leading-none tracking-wider uppercase text-green">
                                know about us
                            </p>

                            <h3 className="m-0 text-5xl font-extrabold text-white uppercase 
                            after:content-[''] after:block after:w-16 after:h-1.5 after:bg-green after:mx-auto after:mt-5 after:[clip-path:polygon(0%_0%,_100%_0%,_90%_100%,_10%_100%)]
                            ">
                                top rated steamers
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center mx-4">
                    <div className="relative w-10/12 px-4 basis-10/12">
                        <div className="flex items-center flex-wrap justify-center gap-[15px_35px] mt-0 mb-10 mx-0">
                            <a className="tg-btn-2" href="#b">
                                BUY HERO
                            </a>

                            <a className="tg-btn-2 -secondary" href="#b">
                                buy nfts
                            </a>
                        </div>

                        <ul className="nav-tabs flex flex-wrap justify-center relative gap-[15px_35px] px-0 py-6 before:content-[''] before:absolute before:w-full before:h-px before:left-0 before:top-0 after:content-[''] after:absolute after:w-full after:h-px after:left-0 after:top-auto after:bottom-0 before:bg-gradient-to-r before:from-transparent before:via-green before:to-transparent after:bg-gradient-to-r after:from-transparent after:via-green after:to-transparent"> 
                            <li className="relative z-1"> 
                                <button className="">

                                </button>
                                
                            </li>
                        </ul>
                    </div>
                </div>

                

            </section>
        </>
    );
}

export default About;
