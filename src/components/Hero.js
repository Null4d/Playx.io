import heroİmg from '../img/slider/slider_img01.png';
import brand1 from '../img/brand/brand_logo01.png';
import brand2 from '../img/brand/brand_logo02.png';
import brand3 from '../img/brand/brand_logo03.png';

function Hero() {
  return (
    <>
      <section className="min-h-screen bg-center bg-cover pt-2 lm:pt-40 pb-14 px-0 relative bg-[url('/src/img/slider/slider_bg.jpg')]">
        <div className="relative h-full mx-auto max-w-screen-2xl">
          <div className="flex flex-col lm:flex-row lm:justify-between flex-wrap px-[-15px] w-full">
            <div className="relative flex justify-center w-full px-4 lm:flex-row lm:w-6/12 basis-6/12 lm:justify-normal">
              <div className="relative flex flex-col w-full mt-32 mb-0 ml-0 mr-0 lm:ml-14 lg:ml-28 2xl:ml-10 z-2">
                <h6 className="py-3 pl-4 pr-20 mb-4 ml-auto mr-auto text-xl font-bold tracking-widest rounded-8px lm:ml-0 text-green bg-gradient-to-r from-green/35 rounded-l-md">
                  LIVE GAMING
                </h6>

                <h2 className="leading-none text-white text-center lm:text-start text-6xl sm:text-8xl 2xl:text-150px mt-0 mb-6 mx-0 font-berlin drop-shadow-[-1px_5px_0px_rgba(69,248,130,0.66)]">
                  STEAMING
                </h2>

                <p className="m-0 text-2xl font-bold text-center text-white uppercase sm:text-3xl lm:text-start">
                  VIDEO GAMES ONLINE <span className='text-xs font-bold text-grey'>WEB SITE IN PROGRESS</span>
                </p>

                <div className="mx-0 mt-8 mb-0 text-center lm:text-left">
                  <a className="tg-btn-1 group/greenBtn text-white px-12 py-4 relative z-1 inline-flex min-w-195px justify-center overflow-hidden px-49px py-0-875 text-center text-sm font-extrabold uppercase tracking-wide 
                  before:absolute before:left-0 before:top-2/4 before:z-1 before:h-[calc(100%+6px)] before:w-30px before:-translate-y-2/4 before:bg-white-arrow before:bg-cover before:bg-center before:bg-no-repeat 
                  after:absolute after:right-0 after:top-2/4 after:z-1 after:h-[calc(100%+6px)] after:w-30px after:-translate-y-2/4 after:bg-white-arrow after:bg-cover after:bg-center after:bg-no-repeat after:-rotate-180 
                  "href="#b">
                    <p className="text-black after:z-minus-1 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:border-t-2 after:border-b-2 after:border-solid after:border-y-white 
                    after:bg-green after:transition-all after:delay-0 after:duration-150 after:ease-out after:[clip-path:polygon(28px_0,calc(85%+2px)_0,100%_50%,calc(85%+1px)_100%,28px_100%,0%_50%)] after:group-hover/greenBtn:bg-green">
                      CONTACT US
                    </p>
                  </a>
                </div>

              </div>
            </div>

            <div className="order-1 w-full sm:order-0 basis-6/12 lm:w-6/12">
              <div className="">
                <img className='mx-auto my-0 mt-16 lm:mt-0 max-w-96 sm:max-w-lg lm:max-w-lg-0 2xl:max-w-full ' src={heroİmg} alt="heroİmg" />
              </div>
            </div>


          </div>

          <ul className="flex items-center justify-center w-full gap-8 px-4 lm:pl-32 lm:absolute bottom-32 lm:justify-start sm:gap-16 brand-opacity list-wrap ">
            <li className="list-none duration-200">
              <a className="block" href="#b">
                <img src={brand1} alt="brand1" />
              </a>
            </li>

            <li className="list-none duration-200">
              <a className="block" href="#b">
                <img src={brand2} alt="brand2" />
              </a>
            </li>

            <li className="list-none duration-200">
              <a className="block" href="#b">
                <img src={brand3} alt="brand3" />
              </a>
            </li>
          </ul>
        </div>
      </section >
    </>
  );
}

export default Hero;
