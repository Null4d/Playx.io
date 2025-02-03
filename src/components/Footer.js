import logo from '../img/logo/logo.png';
import Icon1 from '../img/icons/social_icon01.png';
import Icon2 from '../img/icons/social_icon02.png';
import Icon3 from '../img/icons/social_icon03.png';
import Icon4 from '../img/icons/social_icon04.png';
import Payment from '../img/icons/payment_card.png';

function Footer() {
    return (
        <>
            <footer className="footer-style-one bg-LightBlue">
                <div className="flex justify-center px-0 pt-20 pb-8 border-t border-solid footer__top-wrap border-t-BlackBlue">
                    <div className="w-full max-w-full px-5 sm:container">
                        <div className="flex-wrap items-center w-full sm:flex">
                            <div className="relative w-full px-4 basis-4/12 2xl:w-4/12 2xl:basis-4/12 xl:w-4/12 xl:basis-4/12 lg:w-5/12 lg:basis-5/12 md:w-7/12 md:basis-7/12 sm:w-full sm:basis-full xsm:w-full xsm:basis-full">
                                <div className="mx-0 mt-0 mb-12 footer-widget ">
                                    <div className="mx-0 mt-0 mb-8 footer-logo logo">
                                        <a href="index.html">
                                            <img className='w-56' src={logo} alt="logo" />
                                        </a>
                                    </div>
                                    <div className="mr-5 font-normal footer-text">
                                        <p className="mx-0 mt-0 mb-6 text-base desc text-grey">Lorem ipsum dolor sitamet consectur adipiscing Duis esollici tudin augue euismod. Nulla ullam dolor sitamet consectetur</p>
                                        <p className="mx-0 mt-0 mb-6 text-base font-bold leading-none text-white uppercase social-title">Active <span className=" text-green">With Us <i className="fas fa-angle-double-right"></i></span></p>
                                        <div className="footer-social flex flex-wrap gap-[10px_20px]">
                                            <a className="block" href="#b"><img className='max-w-7' src={Icon1} alt="icon" /></a>
                                            <a className="block" href="#b"><img className='max-w-7' src={Icon2} alt="icon" /></a>
                                            <a className="block" href="#b"><img className='max-w-7' src={Icon3} alt="icon" /></a>
                                            <a className="block" href="#b"><img className='max-w-7' src={Icon4} alt="icon" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full px-4 basis-2/12 2xl:w-2/12 2xl:basis-2/12 xl:w-2/12 xl:basis-2/12 lg:w-3/12 lg:basis-3/12 md:w-5/12 md:basis-5/12 sm:w-6/12 sm:basis-6/12 xsm:w-full xsm:basis-full">
                                <div className="mx-0 mt-0 mb-12 footer-widget widget_nav_menu md:pl-10 sm:pl-0 xsm:pl-0">
                                    <h4 className="mx-0 mt-0 text-xl font-bold text-white uppercase fw-title mb-7 ">quick link</h4>
                                    <ul className="p-0 m-0 list-wrap menu">
                                        <li className=" mt-0 mb-1.5 mx-0"><a className=" text-base inline-block text-grey relative hover:text-green  after:content-[''] after:absolute after:w-full after:h-px after:origin-[right_top] after:transition-transform after:duration-[0.4s] after:ease-[cubic-bezier(0.74,0.72,0.27,0.24)] after:scale-x-0 after:scale-y-100 after:left-0 after:bottom-0 after:bg-green  hover:after:origin-[left_top] hover:after:scale-100" href="#b">Gaming</a></li>
                                        <li className=" mt-0 mb-1.5 mx-0"><a className=" text-base inline-block text-grey relative hover:text-green  after:content-[''] after:absolute after:w-full after:h-px after:origin-[right_top] after:transition-transform after:duration-[0.4s] after:ease-[cubic-bezier(0.74,0.72,0.27,0.24)] after:scale-x-0 after:scale-y-100 after:left-0 after:bottom-0 after:bg-green  hover:after:origin-[left_top] hover:after:scale-100" href="#b">Product</a></li>
                                        <li className=" mt-0 mb-1.5 mx-0"><a className=" text-base inline-block text-grey relative hover:text-green  after:content-[''] after:absolute after:w-full after:h-px after:origin-[right_top] after:transition-transform after:duration-[0.4s] after:ease-[cubic-bezier(0.74,0.72,0.27,0.24)] after:scale-x-0 after:scale-y-100 after:left-0 after:bottom-0 after:bg-green  hover:after:origin-[left_top] hover:after:scale-100" href="#b">All NFTs</a></li>
                                        <li className=" mt-0 mb-1.5 mx-0"><a className=" text-base inline-block text-grey relative hover:text-green  after:content-[''] after:absolute after:w-full after:h-px after:origin-[right_top] after:transition-transform after:duration-[0.4s] after:ease-[cubic-bezier(0.74,0.72,0.27,0.24)] after:scale-x-0 after:scale-y-100 after:left-0 after:bottom-0 after:bg-green  hover:after:origin-[left_top] hover:after:scale-100" href="#b">Social Network</a></li>
                                        <li className=" mt-0 mb-1.5 mx-0"><a className=" text-base inline-block text-grey relative hover:text-green  after:content-[''] after:absolute after:w-full after:h-px after:origin-[right_top] after:transition-transform after:duration-[0.4s] after:ease-[cubic-bezier(0.74,0.72,0.27,0.24)] after:scale-x-0 after:scale-y-100 after:left-0 after:bottom-0 after:bg-green  hover:after:origin-[left_top] hover:after:scale-100" href="#b">Domain s</a></li>
                                        <li className=" mt-0 mb-1.5 mx-0"><a className=" text-base inline-block text-grey relative hover:text-green  after:content-[''] after:absolute after:w-full after:h-px after:origin-[right_top] after:transition-transform after:duration-[0.4s] after:ease-[cubic-bezier(0.74,0.72,0.27,0.24)] after:scale-x-0 after:scale-y-100 after:left-0 after:bottom-0 after:bg-green  hover:after:origin-[left_top] hover:after:scale-100" href="#b">Collectibles</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full basis-2/12 2xl:w-2/12 2xl:basis-2/12 xl:w-2/12 xl:basis-2/12 lg:w-3/12 lg:basis-3/12 md:w-5/12 md:basis-5/12 sm:w-6/12 sm:basis-6/12 xsm:w-full xsm:basis-full relative px-[15px]">
                                <div className="mx-0 mt-0 mb-12 sm:pl-12 md:pl-0 xsm:pl-0">
                                    <h4 className="mx-0 mt-0 text-xl font-bold text-white uppercase mb-7 ">Supports</h4>
                                    <ul className="p-0 m-0 menu">
                                        <li className=" mt-0 mb-1.5 mx-0"><a className=" text-base inline-block text-grey relative hover:text-green  after:content-[''] after:absolute after:w-full after:h-px after:origin-[right_top] after:transition-transform after:duration-[0.4s] after:ease-[cubic-bezier(0.74,0.72,0.27,0.24)] after:scale-x-0 after:scale-y-100 after:left-0 after:bottom-0 after:bg-green  hover:after:origin-[left_top] hover:after:scale-100" href="#b">Setting &amp; Privacy</a></li>
                                        <li className=" mt-0 mb-1.5 mx-0"><a className=" text-base inline-block text-grey relative hover:text-green  after:content-[''] after:absolute after:w-full after:h-px after:origin-[right_top] after:transition-transform after:duration-[0.4s] after:ease-[cubic-bezier(0.74,0.72,0.27,0.24)] after:scale-x-0 after:scale-y-100 after:left-0 after:bottom-0 after:bg-green  hover:after:origin-[left_top] hover:after:scale-100" href="#b">Help &amp; Support</a></li>
                                        <li className=" mt-0 mb-1.5 mx-0"><a className=" text-base inline-block text-grey relative hover:text-green  after:content-[''] after:absolute after:w-full after:h-px after:origin-[right_top] after:transition-transform after:duration-[0.4s] after:ease-[cubic-bezier(0.74,0.72,0.27,0.24)] after:scale-x-0 after:scale-y-100 after:left-0 after:bottom-0 after:bg-green  hover:after:origin-[left_top] hover:after:scale-100" href="#b">Live Auctions</a></li>
                                        <li className=" mt-0 mb-1.5 mx-0"><a className=" text-base inline-block text-grey relative hover:text-green  after:content-[''] after:absolute after:w-full after:h-px after:origin-[right_top] after:transition-transform after:duration-[0.4s] after:ease-[cubic-bezier(0.74,0.72,0.27,0.24)] after:scale-x-0 after:scale-y-100 after:left-0 after:bottom-0 after:bg-green  hover:after:origin-[left_top] hover:after:scale-100" href="#b">Item Details</a></li>
                                        <li className=" mt-0 mb-1.5 mx-0"><a className=" text-base inline-block text-grey relative hover:text-green  after:content-[''] after:absolute after:w-full after:h-px after:origin-[right_top] after:transition-transform after:duration-[0.4s] after:ease-[cubic-bezier(0.74,0.72,0.27,0.24)] after:scale-x-0 after:scale-y-100 after:left-0 after:bottom-0 after:bg-green  hover:after:origin-[left_top] hover:after:scale-100" href="#b">24/7 Supports</a></li>
                                        <li className=" mt-0 mb-1.5 mx-0"><a className=" text-base inline-block text-grey relative hover:text-green  after:content-[''] after:absolute after:w-full after:h-px after:origin-[right_top] after:transition-transform after:duration-[0.4s] after:ease-[cubic-bezier(0.74,0.72,0.27,0.24)] after:scale-x-0 after:scale-y-100 after:left-0 after:bottom-0 after:bg-green  hover:after:origin-[left_top] hover:after:scale-100" href="#b">Our News</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="relative w-full px-4 pb-12 basis-4/12 2xl:w-4/12 2xl:basis-4/12 xl:w-4/12 xl:basis-4/12 lg:w-5/12 lg:basis-5/12 md:w-7/12 md:basis-7/12 sm:w-full sm:basis-full xsm:w-full xsm:basis-full">
                                <div className="mt-0 mb-12 mx-0 sm:pl-0 lg:pl-[0] md:pl-20 xsm:pl-0">
                                    <h4 className="mx-0 mt-0 text-xl font-bold text-white uppercase mb-7 ">Newsletter</h4>
                                    <div className="">
                                        <p className="mx-0 mt-0 mb-5 text-base text-grey">Subscribe our newsletter to get our latest update &amp; newsconsectetur</p>
                                        <form action="#" className="relative flex">
                                            <input type="email" placeholder="Your email address" className="block rounded-r-[0px] w-full outline-none text-white rounded-8px text-base h-14 pl-5 pr-24 py-4 rounded-md border-none bg-[#1f2935] placeholder:text-base focus:ring-0 focus:!border-none" />
                                            <button type="submit" className="top-0 right-0 flex items-center justify-center w-20 text-3xl duration-500 border-0 rounded-md h-14 text-BlackBlue bg-green hover:bg-amber-400">
                                                <i className="flaticon-paper-plane"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright__wrap px-0 py-5 bg-[#090d10]">
                    <div className="w-full">
                        <div className="flex flex-col flex-wrap items-center justify-around w-full md:flex-row ">
                            <div className="relative px-4">
                                <div className="text-left copyright__text sm:text-center xsm:text-center">
                                    <p className="pb-2 m-0 text-sm font-semibold uppercase text-grey md:pb-0 font-Barlow">Copyright © 2023 - All Rights Reserved By <span className=" text-green">PlayX</span></p>
                                </div>
                            </div>
                            <div className="relative px-[15px]">
                                <div className="copyright__card float-right sm:float-none sm:text-center sm:m-[0_auto] xsm:float-none xsm:text-center xsm:m-auto">
                                    <img className='sm:inline-block xsm:inline-block' src={Payment} alt="Payment" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
