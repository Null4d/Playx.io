

function ContentInfo() {
    return (
        <>
            <section class="pt-[140px] bg-[#0f161b] pb-36 px-0">
                <div class="max-w-full full md:container mx-auto">
                    <div class="flex flex-wrap flex-col lg:flex-row lg:mx-minus-15px justify-center ">
                        <div class="w-full lg:w-6/12 basis-6/12 relative px-4 md:px-0">
                            <div class="relative z-1 md:mr-12">
                                <h2 class="text-white select-none relative">
                                    <span class="outline-text absolute z-minus-2 bottom-[-20px] text-grey text-7xl md:text-8xl uppercase font-bold block opacity-5">join us</span>
                                </h2>
                                <h2 class="text-4xl md:text-5xl uppercase font-extrabold mt-0 mb-6 text-white mx-0">CONTACT US AND FIND YOUR mykd</h2>
                                <p class="  m-0 text-grey font-semibold text-lg">Axcepteur sint occaecat atat non proident, sunt culpa officia deserunt mollit anim id est labor umLor emdolor</p>
                                <div class="mt-8 mb-0 mx-0">
                                    <div className="relative flex items-center mb-5">
                                        <i className="text-lg text-white duration-300 flaticon-star hover:text-green"></i>
                                        <h4 class="relative text-xl tracking-wider text-white font-semibold uppercase mt-0 mx-0 pl-4 after:text-green">information</h4>
                                    </div>

                                    <ul class="m-0 p-0 ">
                                        <li class="font-medium text-grey font-Barlow">
                                            <a class="text-grey text-lg font-semibold duration-300 hover:text-green" href="tel:123">+971 333 222 557</a>
                                        </li>
                                        <li class="font-medium text-grey font-Barlow">
                                            <a class="text-grey text-lg font-semibold duration-300 hover:text-green" href="mailto:info@exemple.com">info@exemple.com</a>
                                        </li>

                                        <li class="font-semibold text-lg text-grey font-Barlow">New Central Park W7 Street, New York</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Contact Text */}

                        <div class="w-full lg:w-6/12 px-4 md:px-0">
                            <form action="#">
                                <p class="mt-0 mb-10 mx-0 text-grey font-semibold text-lg">
                                    Email address will not be published. Required fields are marked *
                                </p>
                                <div class="flex flex-wrap mx-minus-15px">
                                    <div class="w-6/12 basis-6/12 relative px-4">
                                        <div class="form-grp relative mt-0 mb-8 mx-0">
                                            <input type="text" placeholder="Name *" class=" block w-full text-white transition-all outline-none duration-[0.3s] ease-[ease-out] delay-[0s] px-[25px] py-3.5 border-2 border-solid border-[#19222b] bg-transparent placeholder:opacity-80 focus:!border-[#19222b] focus:!ring-0 focus:!ring-[none] focus:border-solid focus:!outline-offset-0  focus:outline-0"></input>
                                        </div>
                                    </div>

                                    <div class="w-6/12 basis-6/12 relative px-4">
                                        <div class="form-grp relative mt-0 mb-8 mx-0">
                                            <input type="email" placeholder="Email *" class=" block w-full text-white transition-all outline-none duration-[0.3s] ease-[ease-out] delay-[0s] px-[25px] py-3.5 border-2 border-solid border-[#19222b] bg-transparent placeholder:opacity-80 focus:!border-[#19222b] focus:!ring-0 focus:!ring-[none] focus:border-solid focus:!outline-offset-0  focus:outline-0"></input>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-grp relative mt-0 mb-8 mx-0">
                                    <textarea name="message" placeholder="Comment *" class=" h-40 max-h-40 block w-full outline-none text-white transition-all duration-[0.3s] ease-[ease-out] delay-[0s] px-[25px] py-3.5 border-2 border-solid border-[#19222b] bg-transparent placeholder:opacity-80 focus:!border-[#19222b] focus:!ring-0 focus:!outline-[none] focus:!ring-[none] order-solid focus:!outline-offset-0  focus:outline-0"></textarea>
                                </div>

                                <button className='font-extrabold duration-300 BlogBtn' type="submit">Submit now</button>
                            </form>
                        </div>
                        {/* Contact input */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContentInfo;
