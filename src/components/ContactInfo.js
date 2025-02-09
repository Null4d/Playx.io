

function ContentInfo() {
    return (
        <>
            <section className="pt-[140px] bg-[#0f161b] pb-36 px-0">
                <div className="max-w-full mx-auto full md:container">
                    <div className="flex flex-col flex-wrap justify-center lg:flex-row lg:mx-minus-15px ">
                        <div className="relative w-full px-4 lg:w-6/12 basis-6/12 md:px-0">
                            <div className="relative z-1 md:mr-12">
                                <h2 className="relative text-white select-none">
                                    <span className="outline-text absolute z-minus-2 bottom-[-20px] text-grey text-7xl md:text-8xl uppercase font-bold block opacity-5">join us</span>
                                </h2>
                                <h2 className="mx-0 mt-0 mb-6 text-4xl font-extrabold text-white uppercase md:text-5xl">CONTACT US AND FIND YOUR mykd</h2>
                                <p className="m-0 text-lg font-semibold text-grey">Axcepteur sint occaecat atat non proident, sunt culpa officia deserunt mollit anim id est labor umLor emdolor</p>
                                <div className="mx-0 mt-8 mb-0">
                                    <div className="relative flex items-center mb-5">
                                        <i className="text-lg text-white duration-300 flaticon-star hover:text-green"></i>
                                        <h4 className="relative pl-4 mx-0 mt-0 text-xl font-semibold tracking-wider text-white uppercase after:text-green">information</h4>
                                    </div>

                                    <ul className="p-0 m-0 ">
                                        <li className="font-medium text-grey font-Barlow">
                                            <a className="text-lg font-semibold duration-300 text-grey hover:text-green" href="tel:123">+971 333 222 557</a>
                                        </li>
                                        <li className="font-medium text-grey font-Barlow">
                                            <a className="text-lg font-semibold duration-300 text-grey hover:text-green" href="mailto:info@exemple.com">info@exemple.com</a>
                                        </li>

                                        <li className="text-lg font-semibold text-grey font-Barlow">New Central Park W7 Street, New York</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Contact Text */}

                        <div className="w-full px-4 lg:w-6/12 md:px-0">
                            <form action="#">
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
