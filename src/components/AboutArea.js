import maskImage1 from '../img/others/mask_img01.jpg';
import maskImage2 from '../img/others/mask_img02.jpg';
import circle from '../img/others/circle.png';

function AboutArea() {
    return (
        <>
            <section className="py-32  bg-[#10181f] relative z-[1] sm:py-[100px]">
                <div className="container mx-auto">
                    <div className="flex flex-wrap mx-[-15px]">
                        <div className="relative w-4/12 px-4 basis-4/12">
                            <div className="block max-w-80-">
                                <h2 className="title text-white leading-tight font-light text-6xl uppercase tracking-[3.5px] mt-0 mb-12 mx-0 text-left">
                                    WE ARE <i className="not-italic font-bold uppercase text-green">developer</i> ern nft gam<i className='not-italic font-bold'>ing</i>
                                </h2>
                            </div>

                            <div class="mr-10 w-40 h-40 relative animate-[mykdRotation_12s_linear_infinite]  ml-auto my-0">
                                <img className='pointer-events-none circle-rotation' src={circle} alt="logo" />
                            </div>
                        </div>

                        <div class="w-8/12 basis-8/12 relative px-4">
                            <div class="flex items-start gap-[26px] ml-[-30px] relative hover:after:rotate-[90deg] hover:after:left-[34%] after:content-[''] after:absolute after:w-[75px] after:h-[75px] after:shadow-[0px_3px_7px_0px_rgba(0,0,0,0.32)] after:bg-[#45f882] after:origin-[left_bottom] after:transition-all after:duration-700 after:left-[27%] after:top-[49%]">
                                <img className='mask-image left ml-16 mt-5 w-[363px] h-[487px] object-cover' src={maskImage1} alt="logo" />

                                <div class="absolute text-[#45f882] animate-[xAnimation_5s_infinite] right-[22px] top-5">
                                    <img className='mask-image2 right w-[519px] h-[382px] object-cover' src={maskImage2} alt="logo" />
                                    <svg class="moving-svg block absolute right-0 top-3 w-[109px] h-[35px]" width="109" height="35" viewBox="0 0 109 35" fill="none" xmlns="http://www.w3.org/2000/svg">
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


                            <div class="about__three-paragraph mt-[-35px] max-w-[77%] ml-auto mr-1 mb-0 text-left">
                                <p class="font-semibold text-lg text-grey m-0 ready stop" id="text">
                                    Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis tincidunt massa venenatis. Lorem Ipsum is simply dummyd the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutArea;


