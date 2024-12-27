import roadmap from '../img/others/roadmap_img.png';
import roadphone from '../img/others/roadmapphone.png';



function RoadMap() {

    return (
        <>
            <section class="pt-36 pb-pt-36 bg-[url('/src/img/bg/roadmap_bg.jpg')] bg-center bg-cover sm:py-24 xsm:py-24">
                <div class="container mx-auto">
                    <div class="flex flex-wrap mx-minus-15px justify-center ">
                        <div class="w-10/12 basis-10/12 relative px-[15px]">
                            <div class="">
                                <div class="flex flex-wrap mx-minus-15px">
                                    <div class="w-5/12 basis-5/12 ">
                                        <div class="">
                                            <h2 class="title text-5xl font-extrabold tracking-[3px] text-white uppercase leading-none mt-0 mb-7 mx-0 ">a look into roadmaps seasons</h2>

                                            <p class=" max-w-[95%] tracking-wider mt-0 mb-[35px] font-semibold mx-0 text-grey">With Season 1 Ending with our play and Duis elementum sollicitudin is yaugue euismods Nulla ulla Player-focused updates games from Mobile App and Enjoy.</p>

                                            <a className="tg-btn-1 group/greenBtn text-white px-12 py-4 relative z-1 inline-flex min-w-195px justify-center overflow-hidden px-49px py-0-875 text-center text-sm font-extrabold uppercase tracking-wide 
                                             before:absolute before:left-0 before:top-2/4 before:z-1 before:h-[calc(100%+6px)] before:w-30px before:-translate-y-2/4 before:bg-white-arrow before:bg-cover before:bg-center before:bg-no-repeat 
                                                after:absolute after:right-0 after:top-2/4 after:z-1 after:h-[calc(100%+6px)] after:w-30px after:-translate-y-2/4 after:bg-white-arrow after:bg-cover after:bg-center after:bg-no-repeat after:-rotate-180 "href="#b">
                                                <p className="text-black after:z-minus-1 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:border-t-2 after:border-b-2 after:border-solid after:border-y-white 
                                                 after:bg-amber-400 after:transition-all after:delay-0 after:duration-150 after:ease-out after:[clip-path:polygon(28px_0,calc(85%+2px)_0,100%_50%,calc(85%+1px)_100%,28px_100%,0%_50%)] after:group-hover/greenBtn:bg-green">
                                                    ROADMAP
                                                </p>
                                            </a>
                                        </div>
                                        <div class=" ml-[-35px] mr-0 mt-9 mb-0 ">
                                            <img className='roadphone' src={roadphone} alt="roadphone" />
                                        </div>
                                    </div>

                                    <div class="w-7/12 basis-7/12 relative px-[15px]">
                                        <div class=" relative ml-[60px] before:content-[''] before:absolute before:w-1.5 before:h-full before:rounded-[5px] before:left-0 before:top-0 before:bg-gradient-to-t before:from-[#10161c] before:to-green  lg:ml-0 sm:ml-0 xsm:ml-0">
                                            <div class=" bg-[#1b242e] drop-shadow-[0px_3px_7px_0px_rgba(0,0,0,0.21)] relative ml-11 mr-0 mt-0 mb-5 p-ml-11 rounded-lg before:content-[''] before:absolute before:left-[-39px] before:-translate-y-2/4 before:w-0 before:h-0 before:border-solid before:top-2/4 last:mb-0 before:border-t-[20px] before:border-r-0 before:border-b-[20px] before:border-l-[18px] before:border-[transparent_transparent_transparent_#45f882] active before:opacity-[0.9] sm:ml-[35px] sm:mr-0 sm:mt-0 sm:mb-5 sm:px-[25px] sm:py-[35px] sm:before:!left-[-34px] xsm:ml-[35px] xsm:mr-0 xsm:mt-0 xsm:mb-5 xsm:px-[25px] xsm:py-[35px] xsm:before:!left-[-34px]">
                                                <h3 class=" text-3xl font-extrabold leading-none uppercase text-white mt-0 mb-6 mx-0 lg:text-3xl sm:text-2xl xsm:text-2xl">season 1</h3>

                                                <ul class="list-wrap m-0 p-0 ">
                                                    <li class="block text-base text-grey font-bold relative mt-0 mb-1.5 mx-0 pl-9 before:content-[''] before:absolute before:w-5 before:h-5 before:transition-all before:duration-200 before:delay-0 before:rounded-50% before:border-2 before:border-solid before:border-green before:left-0 before:top-1 before:bg-green hover:before:border-amber-400 hover:before:bg-amber-400">Battle Practice Mode</li>
                                                    <li class="block text-base text-grey font-bold relative mt-0 mb-1.5 mx-0 pl-9 before:content-[''] before:absolute before:w-5 before:h-5 before:transition-all before:duration-200 before:delay-0 before:rounded-50% before:border-2 before:border-solid before:border-green before:left-0 before:top-1 before:bg-green hover:before:border-amber-400 hover:before:bg-amber-400">Android Mobile</li>
                                                    <li class="block text-base text-grey font-bold relative mt-0 mb-1.5 mx-0 pl-9 before:content-[''] before:absolute before:w-5 before:h-5 before:transition-all before:duration-200 before:delay-0 before:rounded-50% before:border-2 before:border-solid before:border-green before:left-0 before:top-1 before:bg-green hover:before:border-amber-400 hover:before:bg-amber-400">iOS Open Beta</li>
                                                    <li class="block text-base text-grey font-bold relative mt-0 mb-1.5 mx-0 pl-9 m-0 before:content-[''] before:absolute before:w-5 before:h-5 before:transition-all before:duration-200 before:delay-0 before:rounded-50% before:border-2 before:border-solid before:border-green before:left-0 before:top-1 before:bg-green hover:before:border-amber-400 hover:before:bg-amber-400">Land Creation & Building</li>
                                                </ul>
                                                <img className='absolute transition-all duration-500 pointer-events-none max-h-52 right-5 top-8 opacity-15' src={roadmap} alt="roadmap" />
                                            </div>

                                            <div class="bg-[#1b242e] drop-shadow-[0px_3px_7px_0px_rgba(0,0,0,0.21)] relative ml-11 mr-0 mt-0 mb-5 p-ml-11 rounded-lg before:content-[''] before:absolute before:left-[-39px] before:-translate-y-2/4 before:w-0 before:h-0 before:border-solid before:top-2/4 last:mb-0 before:opacity-[0.9] sm:ml-[35px] sm:mr-0 sm:mt-0 sm:mb-5 sm:px-[25px] sm:py-[35px] sm:before:!left-[-34px] xsm:ml-[35px] xsm:mr-0 xsm:mt-0 xsm:mb-5 xsm:px-[25px] xsm:py-[35px] xsm:before:!left-[-34px] group">
                                                <h3 class="text-3xl font-extrabold leading-none uppercase text-white mt-0 mb-6 mx-0 lg:text-3xl sm:text-2xl xsm:text-2xl">season 2</h3>
                                                <ul class="list-wrap m-0 p-0">
                                                    <li class="block text-base text-grey font-bold relative mt-0 mb-1.5 mx-0 pl-9 before:content-[''] before:absolute before:w-5 before:h-5 before:transition-all before:duration-200 before:delay-0 before:rounded-50% before:border-2 before:border-solid before:border-green before:left-0 before:top-1 before:bg-green hover:before:border-amber-400 hover:before:bg-amber-400">Land Creation & Building</li>
                                                    <li class="block text-base text-grey font-bold relative mt-0 mb-1.5 mx-0 pl-9 before:content-[''] before:absolute before:w-5 before:h-5 before:transition-all before:duration-200 before:delay-0 before:rounded-50% before:border-2 before:border-solid before:border-green before:left-0 before:top-1 before:bg-green hover:before:border-amber-400 hover:before:bg-amber-400">Android Mobile</li>
                                                    <li class="block text-base text-grey font-bold relative mt-0 mb-1.5 mx-0 pl-9 before:content-[''] before:absolute before:w-5 before:h-5 before:transition-all before:duration-200 before:delay-0 before:rounded-50% before:border-2 before:border-solid before:border-[#262e38] before:left-0 before:top-1 before:bg-[#10161c]">iOS Open Beta</li>
                                                    <li class="block text-base text-grey font-bold relative mt-0 mb-1.5 mx-0 pl-9 m-0 before:content-[''] before:absolute before:w-5 before:h-5 before:transition-all before:duration-200 before:delay-0 before:rounded-50% before:border-2 before:border-solid before:border-[#262e38] before:left-0 before:top-1 before:bg-[#10161c]">Land Creation & Building</li>
                                                </ul>
                                                <img className="absolute transition-opacity duration-500 opacity-0 pointer-events-none max-h-52 right-5 top-8 group-hover:opacity-15" src={roadmap} alt="roadmap" />
                                            </div>

                                            <div class="bg-[#1b242e] drop-shadow-[0px_3px_7px_0px_rgba(0,0,0,0.21)] relative ml-11 mr-0 mt-0 mb-5 p-ml-11 rounded-lg before:content-[''] before:absolute before:left-[-39px] before:-translate-y-2/4 before:w-0 before:h-0 before:border-solid before:top-2/4 last:mb-0 before:opacity-[0.9] sm:ml-[35px] sm:mr-0 sm:mt-0 sm:mb-5 sm:px-[25px] sm:py-[35px] sm:before:!left-[-34px] xsm:ml-[35px] xsm:mr-0 xsm:mt-0 xsm:mb-5 xsm:px-[25px] xsm:py-[35px] xsm:before:!left-[-34px] group">
                                                <h3 class="text-3xl font-extrabold leading-none uppercase text-white mt-0 mb-6 mx-0 lg:text-3xl sm:text-2xl xsm:text-2xl">season 3</h3>
                                                <ul class="list-wrap m-0 p-0">
                                                    <li class="block text-base text-grey font-bold relative mt-0 mb-1.5 mx-0 pl-9 before:content-[''] before:absolute before:w-5 before:h-5 before:transition-all before:duration-200 before:delay-0 before:rounded-50% before:border-2 before:border-solid before:border-[#262e38] before:left-0 before:top-1 before:bg-[#10161c]">Switch to 3D gameplay</li>
                                                    <li class="block text-base text-grey font-bold relative mt-0 mb-1.5 mx-0 pl-9 before:content-[''] before:absolute before:w-5 before:h-5 before:transition-all before:duration-200 before:delay-0 before:rounded-50% before:border-2 before:border-solid before:border-[#262e38] before:left-0 before:top-1 before:bg-[#10161c]">Android Mobile</li>
                                                    <li class="block text-base text-grey font-bold relative mt-0 mb-1.5 mx-0 pl-9 before:content-[''] before:absolute before:w-5 before:h-5 before:transition-all before:duration-200 before:delay-0 before:rounded-50% before:border-2 before:border-solid before:border-[#262e38] before:left-0 before:top-1 before:bg-[#10161c]">iOS Open Beta</li>
                                                    <li class="block text-base text-grey font-bold relative mt-0 mb-1.5 mx-0 pl-9 m-0 before:content-[''] before:absolute before:w-5 before:h-5 before:transition-all before:duration-200 before:delay-0 before:rounded-50% before:border-2 before:border-solid before:border-[#262e38] before:left-0 before:top-1 before:bg-[#10161c]">Land Creation & Building</li>
                                                </ul>
                                                <img className="absolute transition-opacity duration-500 opacity-0 pointer-events-none max-h-52 right-5 top-8 group-hover:opacity-15" src={roadmap} alt="roadmap" />
                                            </div>
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

export default RoadMap;
