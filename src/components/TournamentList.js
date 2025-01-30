import tournamentThumb1 from '../img/others/tournament_thumb01.png';



function TournamentList() {
    return (
        <>
            <section class="pb-32 pt-32 bg-center bg-BlackBlue bg-cover" data-background="assets/img/bg/tournament_bg.jpg">
                <div class="container mx-auto">
                    <div class="px-0 xl:px-20 py-0">
                        {/* <div class="flex flex-wrap mx-minus-15px items-end mb-16">
                            <div class="w-8/12 basis-8/1 relative px-4">
                                <div class="text-left title-shape-none">
                                    <span class="block uppercase text-sm tracking-[2px] font-semibold text-green leading-none mt-0 mb-2 mx-0 sm:m-[0_0_10px] xsm:m-[0_0_10px] ready stop">tournament List</span>
                                    <h3 class="text-5xl font-extrabold tracking-wider uppercase text-white m-0">Active tournament</h3>
                                </div>
                            </div>
                            <div class="w-4/12 basis-4/12 relative px-4">
                                <div class="section__title-link text-right">
                                    <a class=" inline-block font-semibold text-grey relative pt-0 pb-[3px] px-0 hover:text-green after:content-[''] after:absolute after:w-full after:h-px after:right-0 after:bottom-0 font-Barlow duration-300 after:bg-green" href="tournament.html">EXPLORE MORE</a>
                                </div>
                            </div>
                        </div> */}

                        <div class="grid-cols-1 px-2 md:grid-cols-2 grid lg:grid-cols-none lg:flex flex-wrap mx-minus-15px">
                            <div class="w-full mb-5 basis-full relative px-4">
                                <div class="relative z-1 mt-0 mb-6 mx-0 last:m-0 xl:before:content-[''] before:hidden lg:before:flex before:absolute before:w-[200px] before:h-14 before:transition-all before:duration-500 before:before:delay-[0s] before:z-minus-1 before:left-[15%] before:top-[19px] group before:bg-green hover:before:bg-amber-400">
                                    <div class="grid-cols-2 grid lg:grid-cols-none lg:flex border-white border lg:border-0 flex-wrap lg:flex-none gap-y-20 lg:gap-0 p-7 2xl:py-12 lg:pl-14 2xl:pl-16 rounded-8px bg-[#19222b] lg:bg-transparent lg:bg-[url('/src/img/others/tournamentbg.svg')] bg-[length:100%_auto] bg-no-repeat items-center">
                                        <div class="w-full lg:w-32 xl:w-40 2xl:w-56 flex-[0_0_auto]">
                                            <a href="tournament-details.html">
                                                <img className="mr-0 2xl:pl-4 max-h-24 xl:max-h-28 " src={tournamentThumb1} alt="tournamentThumb1" />
                                            </a>
                                        </div>

                                        <div class="w-full lg:w-52 flex-[0_0_auto] relative z-1 lg:py-0 pl-10 before:content-[''] before:absolute before:-translate-y-2/4 before:h-12 before:w-px before:opacity-[0.18] before:z-1 before:left-px before:top-2/4 before:bg-[radial-gradient(circle,_var(--tw-gradient-stops))] before:from-[#fff_0%] before:via-[transparent_100%] before:to-[#10181f_100%] after:content-[''] after:absolute after:-translate-y-2/4 after:h-[60px] after:w-[3px] after:left-0 after:top-2/4 after:bg-[#121920]">
                                            <h5 class="text-xl mt-0 mb-2 mx-0 uppercase text-white font-bold">FoxTie Max</h5>
                                            <span class="block uppercase text-sm font-bold tracking-wider text-green relative leading-none transition-all duration-500 delay-[0s] pl-[13px] before:content-[''] before:absolute before:w-2 before:h-2 before:rounded-[50%] before:left-0 before:top-[3px] font-Barlow before:bg-green group-hover:text-amber-400 ">Online</span>
                                        </div>

                                        <div class="w-full lg:w-56 flex-[0_0_auto] relative pl-0 lg:pl-12 xl:pl-16 before:hidden lg:before:flex before:content-[''] before:absolute before:-translate-y-2/4 before:h-12 before:w-px before:opacity-[0.18] before:z-1 before:left-px before:top-2/4 before:bg-[radial-gradient(circle,_var(--tw-gradient-stops))] before:from-[#fff_0%] before:via-[transparent_100%]">
                                            <h6 class=" text-lg text-grey tracking-wider mt-0 mb-1 uppercase font-bold mx-0">Prize</h6>
                                            <span class="text-green text-lg font-semibold tracking-wider transition-all duration-500 delay-[0s] font-Barlow group-hover:text-amber-400">🏆 $75000</span>
                                        </div>

                                        <div class="w-full lg:w-56 flex-[0_0_auto] relative pl-8 lg:pl-12 text-right lg:text-start xl:pl-16 before:content-[''] before:absolute before:-translate-y-2/4 before:h-12 before:w-px before:opacity-[0.18] before:z-1 before:left-px before:top-2/4 before:bg-[radial-gradient(circle,_var(--tw-gradient-stops))] before:from-[#fff_0%] before:via-[transparent_100%]">
                                            <h6 class="text-lg text-grey tracking-wider mt-0 mb-1 uppercase font-bold mx-0">Time</h6>
                                            <span class="text-grey text-lg font-semibold uppercase tracking-wider font-Barlow">🕒 10h : 15m</span>
                                        </div>

                                        <div class="col-span-2 ml-auto flex-[0_0_auto] mx-auto">
                                            <a class="group-hover:text-white inline-block uppercase font-bold text-sm text-grey tracking-wider px-12 lg:px-5 xl:px-12 py-4 rounded-8px rounded-md font-Barlow bg-[#0c1217] duration-500" href="https://www.twitch.tv/videos/1726788358" target="_blank" rel="noopener noreferrer">Live now ▶</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="w-full mb-5 basis-full relative px-4">
                                <div class="relative z-1 mt-0 mb-6 mx-0 last:m-0 xl:before:content-[''] before:hidden lg:before:flex before:absolute before:w-[200px] before:h-14 before:transition-all before:duration-500 before:before:delay-[0s] before:z-minus-1 before:left-[15%] before:top-[19px] group before:bg-green hover:before:bg-amber-400">
                                    <div class="grid-cols-2 grid lg:grid-cols-none lg:flex border-white border lg:border-0 flex-wrap lg:flex-none gap-y-20 lg:gap-0 p-7 2xl:py-12 lg:pl-14 2xl:pl-16 rounded-8px bg-[#19222b] lg:bg-transparent lg:bg-[url('/src/img/others/tournamentbg.svg')] bg-[length:100%_auto] bg-no-repeat items-center">
                                        <div class="w-full lg:w-32 xl:w-40 2xl:w-56 flex-[0_0_auto]">
                                            <a href="tournament-details.html">
                                                <img className="mr-0 2xl:pl-4 max-h-24 xl:max-h-28 " src={tournamentThumb1} alt="tournamentThumb1" />
                                            </a>
                                        </div>

                                        <div class="w-full lg:w-52 flex-[0_0_auto] relative z-1 lg:py-0 pl-10 before:content-[''] before:absolute before:-translate-y-2/4 before:h-12 before:w-px before:opacity-[0.18] before:z-1 before:left-px before:top-2/4 before:bg-[radial-gradient(circle,_var(--tw-gradient-stops))] before:from-[#fff_0%] before:via-[transparent_100%] before:to-[#10181f_100%] after:content-[''] after:absolute after:-translate-y-2/4 after:h-[60px] after:w-[3px] after:left-0 after:top-2/4 after:bg-[#121920]">
                                            <h5 class="text-xl mt-0 mb-2 mx-0 uppercase text-white font-bold">FoxTie Max</h5>
                                            <span class="block uppercase text-sm font-bold tracking-wider text-green relative leading-none transition-all duration-500 delay-[0s] pl-[13px] before:content-[''] before:absolute before:w-2 before:h-2 before:rounded-[50%] before:left-0 before:top-[3px] font-Barlow before:bg-green group-hover:text-amber-400 ">Online</span>
                                        </div>

                                        <div class="w-full lg:w-56 flex-[0_0_auto] relative pl-0 lg:pl-12 xl:pl-16 before:hidden lg:before:flex before:content-[''] before:absolute before:-translate-y-2/4 before:h-12 before:w-px before:opacity-[0.18] before:z-1 before:left-px before:top-2/4 before:bg-[radial-gradient(circle,_var(--tw-gradient-stops))] before:from-[#fff_0%] before:via-[transparent_100%]">
                                            <h6 class=" text-lg text-grey tracking-wider mt-0 mb-1 uppercase font-bold mx-0">Prize</h6>
                                            <span class="text-green text-lg font-semibold tracking-wider transition-all duration-500 delay-[0s] font-Barlow group-hover:text-amber-400">🏆 $75000</span>
                                        </div>

                                        <div class="w-full lg:w-56 flex-[0_0_auto] relative pl-8 lg:pl-12 text-right lg:text-start xl:pl-16 before:content-[''] before:absolute before:-translate-y-2/4 before:h-12 before:w-px before:opacity-[0.18] before:z-1 before:left-px before:top-2/4 before:bg-[radial-gradient(circle,_var(--tw-gradient-stops))] before:from-[#fff_0%] before:via-[transparent_100%]">
                                            <h6 class="text-lg text-grey tracking-wider mt-0 mb-1 uppercase font-bold mx-0">Time</h6>
                                            <span class="text-grey text-lg font-semibold uppercase tracking-wider font-Barlow">🕒 10h : 15m</span>
                                        </div>

                                        <div class="col-span-2 ml-auto flex-[0_0_auto] mx-auto">
                                            <a class="group-hover:text-white inline-block uppercase font-bold text-sm text-grey tracking-wider px-12 lg:px-5 xl:px-12 py-4 rounded-8px rounded-md font-Barlow bg-[#0c1217] duration-500" href="https://www.twitch.tv/videos/1726788358" target="_blank" rel="noopener noreferrer">Live now ▶</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="w-full mb-5 basis-full relative px-4">
                                <div class="relative z-1 mt-0 mb-6 mx-0 last:m-0 xl:before:content-[''] before:hidden lg:before:flex before:absolute before:w-[200px] before:h-14 before:transition-all before:duration-500 before:before:delay-[0s] before:z-minus-1 before:left-[15%] before:top-[19px] group before:bg-green hover:before:bg-amber-400">
                                    <div class="grid-cols-2 grid lg:grid-cols-none lg:flex border-white border lg:border-0 flex-wrap lg:flex-none gap-y-20 lg:gap-0 p-7 2xl:py-12 lg:pl-14 2xl:pl-16 rounded-8px bg-[#19222b] lg:bg-transparent lg:bg-[url('/src/img/others/tournamentbg.svg')] bg-[length:100%_auto] bg-no-repeat items-center">
                                        <div class="w-full lg:w-32 xl:w-40 2xl:w-56 flex-[0_0_auto]">
                                            <a href="tournament-details.html">
                                                <img className="mr-0 2xl:pl-4 max-h-24 xl:max-h-28 " src={tournamentThumb1} alt="tournamentThumb1" />
                                            </a>
                                        </div>

                                        <div class="w-full lg:w-52 flex-[0_0_auto] relative z-1 lg:py-0 pl-10 before:content-[''] before:absolute before:-translate-y-2/4 before:h-12 before:w-px before:opacity-[0.18] before:z-1 before:left-px before:top-2/4 before:bg-[radial-gradient(circle,_var(--tw-gradient-stops))] before:from-[#fff_0%] before:via-[transparent_100%] before:to-[#10181f_100%] after:content-[''] after:absolute after:-translate-y-2/4 after:h-[60px] after:w-[3px] after:left-0 after:top-2/4 after:bg-[#121920]">
                                            <h5 class="text-xl mt-0 mb-2 mx-0 uppercase text-white font-bold">FoxTie Max</h5>
                                            <span class="block uppercase text-sm font-bold tracking-wider text-green relative leading-none transition-all duration-500 delay-[0s] pl-[13px] before:content-[''] before:absolute before:w-2 before:h-2 before:rounded-[50%] before:left-0 before:top-[3px] font-Barlow before:bg-green group-hover:text-amber-400 ">Online</span>
                                        </div>

                                        <div class="w-full lg:w-56 flex-[0_0_auto] relative pl-0 lg:pl-12 xl:pl-16 before:hidden lg:before:flex before:content-[''] before:absolute before:-translate-y-2/4 before:h-12 before:w-px before:opacity-[0.18] before:z-1 before:left-px before:top-2/4 before:bg-[radial-gradient(circle,_var(--tw-gradient-stops))] before:from-[#fff_0%] before:via-[transparent_100%]">
                                            <h6 class=" text-lg text-grey tracking-wider mt-0 mb-1 uppercase font-bold mx-0">Prize</h6>
                                            <span class="text-green text-lg font-semibold tracking-wider transition-all duration-500 delay-[0s] font-Barlow group-hover:text-amber-400">🏆 $75000</span>
                                        </div>

                                        <div class="w-full lg:w-56 flex-[0_0_auto] relative pl-8 lg:pl-12 text-right lg:text-start xl:pl-16 before:content-[''] before:absolute before:-translate-y-2/4 before:h-12 before:w-px before:opacity-[0.18] before:z-1 before:left-px before:top-2/4 before:bg-[radial-gradient(circle,_var(--tw-gradient-stops))] before:from-[#fff_0%] before:via-[transparent_100%]">
                                            <h6 class="text-lg text-grey tracking-wider mt-0 mb-1 uppercase font-bold mx-0">Time</h6>
                                            <span class="text-grey text-lg font-semibold uppercase tracking-wider font-Barlow">🕒 10h : 15m</span>
                                        </div>

                                        <div class="col-span-2 ml-auto flex-[0_0_auto] mx-auto">
                                            <a class="group-hover:text-white inline-block uppercase font-bold text-sm text-grey tracking-wider px-12 lg:px-5 xl:px-12 py-4 rounded-8px rounded-md font-Barlow bg-[#0c1217] duration-500" href="https://www.twitch.tv/videos/1726788358" target="_blank" rel="noopener noreferrer">Live now ▶</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    );
}

export default TournamentList;

