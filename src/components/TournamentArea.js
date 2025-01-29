import TournamentArea from '../img/others/TournamentArea.png';

function NftItems() {
    return (
        <>
            <section className="bg-[url('/src/img/bg/breadcrumb_bg01.jpg')] relative bg-center bg-cover min-h-[561px] flex items-center pt-28 pb-20 px-0">
                <div className="container mx-auto">
                    <div className="relative px-0 py-0 lg:px-20 breadcrumb__wrapper">
                        <div className="flex flex-col flex-wrap md:flex-row mx-minus-15px">

                            <div className="relative w-full px-4 basis-full lg:w-6/12 lg:basis-6/12">
                                <div className="text-center lg:text-left">
                                    <h2 className="m-0 text-6xl font-extrabold leading-none tracking-wider text-white uppercase title">
                                        Tournament
                                    </h2>
                                    <nav aria-label="breadcrumb" className="w-full mt-3">
                                        <ol className="flex flex-wrap justify-center w-full mx-auto mb-0 list-none lg:justify-start breadcrumb">
                                            <li className="breadcrumb-item uppercase font-bold text-sm tracking-wider flex items-center after:content-[''] after:block after:w-2 after:h-2 after:transition-all after:duration-[0.3s] after:ease-[ease-out] after:delay-[0s] after:mx-2.5 after:my-0 after:rounded-[50%] text-green after:bg-green hover:after:bg-[#ffbe18]">
                                                <a className="hover:text-[#ffbe18]" href="index.html">Home</a>
                                            </li>
                                            <li className="breadcrumb-item uppercase font-bold text-sm tracking-wider flex items-center after:content-[''] text-white" aria-current="page">
                                                Tournament
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>

                            <div className="items-center justify-center flex-none hidden w-6/12 lg:flex basis-6/12">
                                <div className="absolute">
                                    <img className='shake' src={TournamentArea} alt="breadcrumb" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default NftItems;
