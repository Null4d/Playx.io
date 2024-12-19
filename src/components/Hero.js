import "./style.css";
import heroİmg from '../img/slider/slider_img01.png';

function Hero() {
  return (
    <>
      <section className="slider__area slider__bg bg-center bg-cover z-[1] pt-[158px] pb-[54px] px-0 relative bg-[url('/src/img/slider/slider_bg.jpg')]">
        <div className="hero-container max-w-screen-2xl mx-auto h-full">
          <div className="flex flex-wrap mx-[-15px] justify-between">
            <div className="w-6/12 basis-6/12 xxl:w-6/12 xxl:basis-6/12 xl:w-6/12 xl:basis-6/12 lg:w-6/12 lg:basis-6/12 md:w-full md:basis-full sm:w-full sm:basis-full  xsm:w-full xsm:basis-full relative px-[15px]">
              <div className="hero-content slider__content relative z-[2] ml-10 mr-0 mt-[135px] mb-0 xl:m-[90px_0_0_0] text-left 2xl:mt-[135px] 2xl:mb-0 2xl:mx-0 xl:mt-[90px]  xl:xl:mb-0 mx-0 lg:m-[90px_0_0_0] md:text-start md:mt-0 md:mb-[70px] md:mx-0 sm:mt-0 sm:mb-[50px] sm:mx-0 sm:text-center xsm:mt-0 xsm:mb-[50px] xsm:mx-0 xsm:text-center">
                <h6 className="sub-title leading-none font-bold tracking-[4px] text-[20px] text-[#45f882] relative mt-0 mb-[19px] mx-0 pl-5 pr-0 py-[17px] before:content-[''] before:absolute before:bg-[url('/src/img/bg/text_gradient_bg.png')] before:w-full before:h-full before:bg-no-repeat before:z-[-1] before:opacity-[0.28] before:left-0 before:top-0 font-Poppins wow fadeInUp lg:text-base lg:pl-5 lg:pr-0 lg:py-[15px]">
                  LIVE GAMING
                </h6>

                <h2 className="title text-white text-[150px] leading-[0.8] mt-0 mb-[21px] mx-0 font-berlin drop-shadow-[-1px_5px_0px_rgba(69,248,130,0.66)] wow fadeInUp md:text-[120px] lg:text-[94px] xl:text-[118px] sm:text-[14vw] sm:drop-shadow-[-1px_5px_0px_rgba(69,248,130,0.66)] sm:mt-0 sm:mb-[21px] sm:mx-0 xsm:text-[14vw] xsm:drop-shadow-[-1px_5px_0px_rgba(69,248,130,0.66)] xsm:mt-0 xsm:mb-[21px] xsm:mx-0 animated">
                  STEAMING
                </h2>

                <p className="text-[26px] uppercase font-bold tracking-[5px] leading-[1.4] text-[#fff] m-0 wow fadeInUp md:text-2xl lg:text-[22px] sm:text-xl sm:tracking-[3px] xsm:text-xl xsm:tracking-[3px]">
                  VIDEO GAMES ONLINE
                </p>

                <div className="hero__btn mt-[33px] mb-0 mx-0 wow fadeInUp" data-wow-delay="1.2s">
                  <a className="tg-btn-1 group/greenBtn text-white px-[49px] py-[15px] relative z-1 inline-flex min-w-195px justify-center overflow-hidden px-49px py-0-875 text-center text-sm font-extrabold uppercase tracking-wide 
                  before:absolute before:left-0 before:top-2/4 before:z-1 before:h-[calc(100%+6px)] before:w-30px before:-translate-y-2/4 before:bg-white-arrow before:bg-cover before:bg-center before:bg-no-repeat 
                  after:absolute after:right-0 after:top-2/4 after:z-1 after:h-[calc(100%+6px)] after:w-30px after:-translate-y-2/4 after:bg-white-arrow after:bg-cover after:bg-center after:bg-no-repeat after:-rotate-180 
                  "href="#b">    
                    <p className="text-black after:absolute after:left-0 after:top-0 after:z-minus-1 after:h-full after:w-full after:border-t-2 after:border-b-2 after:border-solid after:border-y-white 
                    after:bg-green after:transition-all after:delay-0 after:duration-150 after:ease-out after:[clip-path:polygon(28px_0,calc(85%+2px)_0,100%_50%,calc(85%+1px)_100%,28px_100%,0%_50%)] after:group-hover/greenBtn:bg-white">CONTACT US</p> 
                  </a>
                </div>

              </div>
            </div>

            <div className="w-6/12 basis-6/12 xxl:w-5/12 xxl:basis-5/12 xl:w-5/12 xl:basis-5/12 lg:w-6/12 lg:basis-6/12 md:w-full md:basis-full sm:w-full sm:basis-full xsm:w-full xsm:basis-full relative px-[15px]">
                <div className="hero-img">
                <img className='mx-auto my-0 max-w-full md:mx-auto md:my-0 lg:ml-auto lg:mr-0 lg:my-0 sm:mx-auto sm:my-0 xsm:mx-auto xsm:my-0' src={heroİmg} alt="heroİmg"/>
               
                </div>
            </div>
          </div>
        </div>
      </section >
    </>
  );
}

export default Hero;
