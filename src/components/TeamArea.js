import team1 from '../img/team/team01.png';
import team2 from '../img/team/team02.png';
import team3 from '../img/team/team03.png';
import team4 from '../img/team/team04.png';


function TeamArea() {
    return (
        <>
            <section className="pt-32 pb-24 bg-center bg-cover team-bg">
                <div className="mx-auto max-w-700px md:container">
                    <div className="flex flex-wrap justify-center mx-4">
                        <div className="relative w-full px-4 md:w-6/12 basis-6/12">
                            <div className="text-center rounded-8px mb-16 relative after:content-[''] after:block after:w-28 after:md:w-8 after:h- after:mt-5 after:mb-0 after:mx-auto">
                                <p className="block mx-0 mt-0 mb-2 text-sm font-bold leading-none tracking-wider uppercase text-green">
                                    OUR TEAM MEMBER
                                </p>

                                <h3 className="m-0 text-3xl md:text-5xl font-extrabold text-white uppercase after:content-[''] after:block after:w-16 after:h-1.5 after:bg-green after:mx-auto after:mt-5 after:[clip-path:polygon(0%_0%,_100%_0%,_90%_100%,_10%_100%)]">
                                ACTIVE TEAM MEMBERS
                                </h3>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex-row flex-wrap justify-center w-full md:flex ">
                        <div className="md:w-3/12 w-3/5 mx-auto md:mx-0 md:px-4 basis-45% xl:basis-3/12 lg:basis-2/6">
                            <div className=" text-center rounded-8px border shadow-[0px_3px_13px_0px_rgba(0,0,0,0.17)] relative transition-all duration-500 overflow-hidden z-1 mt-0 mb-7 mx-0 pt-8 pb-9 rounded-xl border-solid border-[#27313f] bg-[#1c242f] before:content-[''] before:absolute before:top-[-60px] before:w-[70px] before:h-80 before:rotate-[-55deg] before:transition-all before:duration-300 before: before:delay-0 before:opacity-[0.55] before:z-minus-1 before:left-0 before:bg-green after:content-[''] after:absolute after:top-[-60px] after:w-[70px] after:h-80 after:rotate-[55deg] after:transition-all after:duration-300 after: after:delay-0 after:opacity-[0.55] after:z-minus-1 after:left-auto after:right-0 after:bg-green hover:translate-y-[-7px] hover:before:opacity-[1] hover:after:opacity-[1] group  sm:before:!h-72 sm:before:!-top-12 sm:after:!h-72 sm:after:!-top-12 xsm:before:!h-72 xsm:before:!-top-12 xsm:after:!h-72 xsm:after:!-top-12 xsm:m-[0_auto_30px] xsm:max-w-[320px]">
                                <div className="mt-0 mb-8 mx-0 after:right-16 group-hover:before:opacity-40 group-hover:after:opacity-40 before:content-[''] before:absolute before:top-[-50px] before:w-px before:h-64 before:rotate-[-55deg] before:transition-all before:duration-300 before: before:delay-0 before:z-minus-1 before:opacity-20 before:left-16 before:bg-green after:content-[''] after:absolute after:top-[-50px] after:w-px after:h-64 after:rotate-[55deg] after:transition-all after:duration-300 after: after:delay-0 after:z-minus-1 after:opacity-20 after:left-auto after:bg-green">
                                    <a className="inline-block" href="team-details.html">
                                        <img className='sm:max-w-full xsm:max-w-full border-white max-w-56 rounded-50% border-spacing-1 border-solid shadow-[0px_3px_7px_0px_rgba(0,0,0,0.21),inset_0px_3px_9px_0px_rgba(0,0,0,0.92)]' src={team1} alt="team" />
                                    </a>
                                </div>
                                <div className="">
                                    <h4 className="mx-0 mt-0 mb-px text-xl font-extrabold tracking-wider "><a className="text-white uppercase" href="team-details.html">killer master</a></h4>
                                    <span className="block text-base font-semibold transition-all duration-300 text-green delay-0 font-Barlow">Blockchain Expert</span>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-3/12 w-3/5 mx-auto md:mx-0 md:px-4 basis-45% xl:basis-3/12 lg:basis-2/6">
                            <div className="text-center rounded-8px border shadow-[0px_3px_13px_0px_rgba(0,0,0,0.17)] relative transition-all duration-500 overflow-hidden z-1 mt-0 mb-8 mx-0 pt-8 pb-9 rounded-xl border-solid border-[#27313f] bg-[#1c242f] before:content-[''] before:absolute before:top before:w-[70px] before:h-80 before:rotate-[-55deg] before:transition-all before:duration-300 before: before:delay-0 before:opacity-[0.55] before:z-minus-1 before:left-0 before:bg-green after:content-[''] after:absolute after:top-[-60px] after:w-[70px] after:h-80 after:rotate-[55deg] after:transition-all after:duration-300 after: after:delay-0 after:opacity-[0.55] after:z-minus-1 after:left-auto after:right-0 after:bg-green hover:translate-y-[-7px] hover:before:opacity-[1] hover:after:opacity-[1] group  sm:before:!h-72 sm:before:!-top-12 sm:after:!h-72 sm:after:!-top-12 xsm:before:!h-72 xsm:before:!-top-12 xsm:after:!h-72 xsm:after:!-top-12 xsm:m-[0_auto_30px] xsm:max-w-[320px]">
                                <div className="mt-0 mb-8 mx-0 after:right-16 group-hover:before:opacity-40 group-hover:after:opacity-40 before:content-[''] before:absolute before:top-[-50px] before:w-px before:h-64 before:rotate-[-55deg] before:transition-all before:duration-300 before: before:delay-0 before:z-minus-1 before:opacity-20 before:left-16 before:bg-green after:content-[''] after:absolute after:top-[-50px] after:w-px after:h-64 after:rotate-[55deg] after:transition-all after:duration-300 after: after:delay-0 after:z-minus-1 after:opacity-20 after:left-auto after:bg-green">
                                    <a className="inline-block" href="team-details.html">
                                        <img className='sm:max-w-full xsm:max-w-full border-white  max-w-56 rounded-50% border-spacing-1 border-solid shadow-[0px_3px_7px_0px_rgba(0,0,0,0.21),inset_0px_3px_9px_0px_rgba(0,0,0,0.92)]' src={team2} alt="team" />
                                    </a>
                                </div>
                                <div className="team__content">
                                    <h4 className="mx-0 mt-0 mb-px text-xl font-extrabold tracking-wider name"><a className="text-white uppercase" href="team-details.html">tanu mark</a></h4>
                                    <span className="block text-base font-semibold transition-all duration-300 designation text-green delay-0 font-Barlow">Developer</span>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-3/12 w-3/5 mx-auto md:mx-0 md:px-4 basis-45% xl:basis-3/12 lg:basis-2/6" >
                            <div className="text-center rounded-8px border shadow-[0px_3px_13px_0px_rgba(0,0,0,0.17)] relative transition-all duration-500 overflow-hidden z-1 mt-0 mb-8 mx-0 pt-8 pb-9 rounded-xl border-solid border-[#27313f] bg-[#1c242f] before:content-[''] before:absolute before:top before:w-[70px] before:h-80 before:rotate-[-55deg] before:transition-all before:duration-300 before: before:delay-0 before:opacity-[0.55] before:z-minus-1 before:left-0 before:bg-green after:content-[''] after:absolute after:top-[-60px] after:w-[70px] after:h-80 after:rotate-[55deg] after:transition-all after:duration-300 after: after:delay-0 after:opacity-[0.55] after:z-minus-1 after:left-auto after:right-0 after:bg-green hover:translate-y-[-7px] hover:before:opacity-[1] hover:after:opacity-[1] group  sm:before:!h-72 sm:before:!-top-12 sm:after:!h-72 sm:after:!-top-12 xsm:before:!h-72 xsm:before:!-top-12 xsm:after:!h-72 xsm:after:!-top-12 xsm:m-[0_auto_30px] xsm:max-w-[320px]">
                                <div className="mt-0 mb-8 mx-0 after:right-16 group-hover:before:opacity-40 group-hover:after:opacity-40 before:content-[''] before:absolute before:top-[-50px] before:w-px before:h-64 before:rotate-[-55deg] before:transition-all before:duration-300 before: before:delay-0 before:z-minus-1 before:opacity-20 before:left-16 before:bg-green after:content-[''] after:absolute after:top-[-50px] after:w-px after:h-64 after:rotate-[55deg] after:transition-all after:duration-300 after: after:delay-0 after:z-minus-1 after:opacity-20 after:left-auto after:bg-green">
                                    <a className="inline-block" href="team-details.html">
                                        <img className='sm:max-w-full xsm:max-w-full border-white  max-w-56 rounded-50% border-spacing-1 border-solid shadow-[0px_3px_7px_0px_rgba(0,0,0,0.21),inset_0px_3px_9px_0px_rgba(0,0,0,0.92)]' src={team3} alt="team" />
                                    </a>
                                </div>
                                <div className="team__content">
                                    <h4 className="mx-0 mt-0 mb-px text-xl font-extrabold tracking-wider name"><a className="text-white uppercase" href="team-details.html">Thompson Scot</a></h4>
                                    <span className="block text-base font-semibold transition-all duration-300 designation text-green delay-0 font-Barlow">Art Director</span>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-3/12 w-3/5 mx-auto md:mx-0 md:px-4 basis-45% xl:basis-3/12 lg:basis-2/6" >
                            <div className="text-center rounded-8px border shadow-[0px_3px_13px_0px_rgba(0,0,0,0.17)] relative transition-all duration-500 overflow-hidden z-1 mt-0 mb-8 mx-0 pt-8 pb-9 rounded-xl border-solid border-[#27313f] bg-[#1c242f] before:content-[''] before:absolute before:top before:w-[70px] before:h-80 before:rotate-[-55deg] before:transition-all before:duration-300 before: before:delay-0 before:opacity-[0.55] before:z-minus-1 before:left-0 before:bg-green after:content-[''] after:absolute after:top-[-60px] after:w-[70px] after:h-80 after:rotate-[55deg] after:transition-all after:duration-300 after: after:delay-0 after:opacity-[0.55] after:z-minus-1 after:left-auto after:right-0 after:bg-green hover:translate-y-[-7px] hover:before:opacity-[1] hover:after:opacity-[1] group  sm:before:!h-72 sm:before:!-top-12 sm:after:!h-72 sm:after:!-top-12 xsm:before:!h-72 xsm:before:!-top-12 xsm:after:!h-72 xsm:after:!-top-12 xsm:m-[0_auto_30px] xsm:max-w-[320px]">
                                <div className="mt-0 mb-8 mx-0 after:right-16 group-hover:before:opacity-40 group-hover:after:opacity-40 before:content-[''] before:absolute before:top-[-50px] before:w-px before:h-64 before:rotate-[-55deg] before:transition-all before:duration-300 before: before:delay-0 before:z-minus-1 before:opacity-20 before:left-16 before:bg-green after:content-[''] after:absolute after:top-[-50px] after:w-px after:h-64 after:rotate-[55deg] after:transition-all after:duration-300 after: after:delay-0 after:z-minus-1 after:opacity-20 after:left-auto after:bg-green">
                                    <a className="inline-block" href="team-details.html">
                                        <img className='sm:max-w-full xsm:max-w-full border-white max-w-56 rounded-50% border-spacing-1 border-solid shadow-[0px_3px_7px_0px_rgba(0,0,0,0.21),inset_0px_3px_9px_0px_rgba(0,0,0,0.92)]' src={team4} alt="team" />
                                    </a>
                                </div>
                                <div className="team__content">
                                    <h4 className="mx-0 mt-0 mb-px text-xl font-extrabold tracking-wider name"><a className="text-white uppercase" href="team-details.html">Shakh Danial</a></h4>
                                    <span className="block text-base font-semibold transition-all duration-300 designation text-green delay-0 font-Barlow">Crypto Advisor</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TeamArea;
