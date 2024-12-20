import "./style.css";
import heroİmg from '../img/slider/slider_img01.png';
import brand1 from '../img/brand/brand_logo01.png';
import brand2 from '../img/brand/brand_logo02.png';
import brand3 from '../img/brand/brand_logo03.png';

function Hero() {
  return (
    <>
      <section className="min-h-screen bg-center bg-cover pt-40 pb-14 px-0 relative bg-[url('/src/img/slider/slider_bg.jpg')]">
        <div className="relative h-full mx-auto max-w-screen-2xl">
          <div className="flex flex-wrap mx-[-15px] justify-between">
            <div className="relative w-6/12 px-4 basis-6/12">
              <div className="relative mb-0 ml-10 mr-0 z-2 mt-36">
                <h6 className="leading-none font-bold tracking-normal text-xl text-green relative mt-0 mb-5 mx-0 pl-5 pr-0 py-4 before:content-[''] before:absolute before:bg-[url('/src/img/bg/text_gradient_bg.png')] before:w-full before:h-full before:bg-no-repeat before:z-[-1] before:opacity-[0.28] before:left-0 before:top-0 font-Poppins">
                  LIVE GAMING
                </h6>

                <h2 className="leading-none text-white text-150px mt-0 mb-6 mx-0 font-berlin drop-shadow-[-1px_5px_0px_rgba(69,248,130,0.66)]">
                  STEAMING
                </h2>

                <p className="text-[26px] uppercase font-bold text-white m-0">
                  VIDEO GAMES ONLINE
                </p>

                <div className="mt-[33px] mb-0 mx-0">
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

                <ul className="flex flex-wrap items-center w-full gap-16 mt-40 brand-opacity list-wrap ">
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
            </div>

            <div className="w-6/12 basis-6/12 ">
              <div className="">
                <img className='max-w-full mx-auto my-0' src={heroİmg} alt="heroİmg" />
              </div>
            </div>

          </div>

        </div>
      </section >
    </>
  );
}

export default Hero;
