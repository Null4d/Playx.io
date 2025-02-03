function NewsArea() {
    return (
        <>
            <section className="bg-[url('/src/img/slider/slider_bg.jpg')] relative bg-center bg-cover min-h-[561px] flex items-center pt-28 pb-20 px-0">
                <div className="container mx-auto">
                    <div className="relative px-0 py-0 lg:px-20">
                        <div className="flex flex-col flex-wrap justify-center mx-0 md:flex-row md:mx-minus-15px">
                            <div className="relative w-full px-0 md:px-4 basis-full lg:w-6/12 lg:basis-6/12">
                                <div className="text-center lg:text-left">
                                    <h2 className="m-0 text-5xl font-extrabold leading-none tracking-wider text-center text-white uppercase md:text-6xl title">
                                        blog standard
                                    </h2>
                                    <nav className="w-full mt-3">
                                        <ol className="flex flex-wrap justify-center w-full mx-auto mb-0 list-none ">
                                            <li className="uppercase font-bold text-sm tracking-wider flex items-center after:content-[''] after:block after:w-2 after:h-2 after:transition-all after:duration-300 after:mx-2.5 after:my-0 after:rounded-[50%] text-green after:bg-green hover:after:bg-ambertext-amber-400 duration-300">
                                                <a className="duration-300 hover:text-amber-400" href="index.html">Home</a>
                                            </li>
                                            <li className="uppercase font-bold text-sm tracking-wider flex items-center after:content-[''] text-white">
                                                BLOG LIST
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default NewsArea;
