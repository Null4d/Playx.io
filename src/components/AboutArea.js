import maskImage1 from '../img/others/mask_img01.jpg';
import maskImage2 from '../img/others/mask_img02.jpg';
import circle from '../img/others/circle.png';

function AboutArea() {
    return (
        <>
            <section className="py-32  bg-[#10181f] relative z-[1] sm:py-24">
                <div className="container mx-auto">
                    <div className='mx-auto max-w-960px xl:max-w-full'>
                        <div className="flex flex-col flex-wrap 2xl:flex-row mx-minus-15px">
                            <div className="relative flex-row w-full pb-16 px-7 lg:pb-0 lg:flex 2xl:block basis-full 2xl:w-4/12 2xl:basis-4/12">
                                <div className="block max-w-80-">
                                    <h2 className="mx-0 mt-0 mb-12 text-5xl font-light leading-tight tracking-wider text-center text-white uppercase title lg:text-6xl lg:text-left">
                                        WE ARE <i className="not-italic font-bold uppercase text-green">developer</i> ern nft gam<i className='not-italic font-bold'>ing</i>
                                    </h2>
                                </div>

                                <div className="2xl:mr-10 lg:mr-16 w-40 h-40 relative animate-[mykdRotation_12s_linear_infinite] mx-auto lg:ml-auto my-0">
                                    <img className='pointer-events-none circle-rotation' src={circle} alt="logo" />
                                </div>
                            </div>

                            <div className="relative w-full px-4 2xl:w-8/12 2xl:basis-8/12 basis-full">
                                <div className="relative flex flex-col items-center mx-auto lg:flex-row lg:items-start gap-7">
                                    <div className="relative after:hidden lg:after:block after:right-16 after:bottom-44 hover:after:right-0 hover:after:hue-rotate-90 after:content-[''] after:absolute after:w-75px
                                 after:h-75px after:shadow-[0px_3px_7px_0px_rgba(0,0,0,0.32)] after:bg-green after:origin-[left_bottom] after:transition-all after:duration-700">
                                        <img className='object-cover mx-auto mt-0 lg:mask-image left lg:ml-auto w-685px lg:w-363px h-487px' src={maskImage1} alt="logo" />
                                    </div>

                                    <div className='relative'>
                                        <img className='object-cover mx-auto right w-685px h-440px lg:mr-auto 2xl:h-full 2xl:w-full' src={maskImage2} alt="logo" />
                                        <div className="bg-[#10181f] w-56 py-4 absolute hidden lg:flex justify-end items-center text-green top-0 right-0 animate-[xAnimation_5s_infinite] ">
                                            <svg className="block h-10 moving-svg w-36 2xl:w-24 2xl:h-8" width="109" height="35" viewBox="0 0 109 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 0H0V7H9V0Z" fill="currentcolor"></path>
                                                <path d="M24 0H15V7H24V0Z" fill="currentcolor"></path>
                                                <path d="M38 0H29V7H38V0Z" fill="currentcolor"></path>
                                                <path d="M53 0H44V7H53V0Z" fill="currentcolor"></path>
                                                <path d="M67 0H58V7H67V0Z" fill="currentcolor"></path>
                                                <path d="M80 0H71V7H80V0Z" fill="currentcolor"></path>
                                                <path d="M9 14H0V21H9V14Z" fill="currentcolor"></path>
                                                <path d="M24 14H15V21H24V14Z" fill="currentcolor"></path>
                                                <path d="M38 14H29V21H38V14Z" fill="currentcolor"></path>
                                                <path d="M53 14H44V21H53V14Z" fill="currentcolor"></path>
                                                <path d="M67 14H58V21H67V14Z" fill="currentcolor"></path>
                                                <path d="M80 14H71V21H80V14Z" fill="currentcolor"></path>
                                                <path d="M95 14H86V21H95V14Z" fill="currentcolor"></path>
                                                <path d="M109 14H100V21H109V14Z" fill="currentcolor"></path>
                                                <path d="M9 28H0V35H9V28Z" fill="currentcolor"></path>
                                                <path d="M24 28H15V35H24V28Z" fill="currentcolor"></path>
                                                <path d="M38 28H29V35H38V28Z" fill="currentcolor"></path>
                                                <path d="M53 28H44V35H53V28Z" fill="currentcolor"></path>
                                                <path d="M67 28H58V35H67V28Z" fill="currentcolor"></path>
                                                <path d="M80 28H71V35H80V28Z" fill="currentcolor"></path>
                                                <path d="M95 28H86V35H95V28Z" fill="currentcolor"></path>
                                                <path d="M109 28H100V35H109V28Z" fill="currentcolor"></path>
                                            </svg>
                                        </div>
                                    </div>

                                </div>


                                <div className="lg:mt-minus-35px mt-10 max-w-77% mx-auto lg:ml-auto lg:mr-1 mb-0 text-center lg:text-left">
                                    <p className="m-0 text-lg font-semibold text-grey ready stop" id="text">
                                        Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis tincidunt massa venenatis. Lorem Ipsum is simply dummyd the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutArea;


