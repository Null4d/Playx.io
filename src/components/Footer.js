import logo from '../img/logo/logo2_00000.png';
import Icon1 from '../img/icons/social_icon01.png';
import Icon2 from '../img/icons/social_icon02.png';
import Icon3 from '../img/icons/social_icon03.png';
import Icon4 from '../img/icons/social_icon04.png';
import Payment from '../img/icons/payment_card.png';

function Footer() {
    return (
        <>
            <footer class="footer-style-one bg-[#0e1418]">
                <div class="footer__top-wrap pt-20 pb-8 flex justify-center px-0 border-t-BlackBlue border-t border-solid">
                    <div class="max-w-full w-full sm:container px-5">
                        <div class="sm:flex flex-wrap mx-minus-15px items-center">
                            <div class="w-full basis-4/12 2xl:w-4/12 2xl:basis-4/12 xl:w-4/12 xl:basis-4/12 lg:w-5/12 lg:basis-5/12 md:w-7/12 md:basis-7/12 sm:w-full sm:basis-full xsm:w-full xsm:basis-full relative px-4">
                                <div class="footer-widget mt-0 mb-12 mx-0 ">
                                    <div class="footer-logo logo mt-0 mb-8 mx-0">
                                        <a href="index.html">
                                            <img className='w-56' src={logo} alt="logo" />
                                        </a>
                                    </div>
                                    <div class="footer-text mr-5 font-normal">
                                        <p class="desc text-base text-grey mt-0 mb-6 mx-0">Lorem ipsum dolor sitamet consectur adipiscing Duis esollici tudin augue euismod. Nulla ullam dolor sitamet consectetur</p>
                                        <p class="social-title text-base font-bold uppercase text-white leading-none mt-0 mb-6 mx-0">Active <span class=" text-green">With Us <i class="fas fa-angle-double-right"></i></span></p>
                                        <div class="footer-social flex flex-wrap gap-[10px_20px]">
                                            <a class="block" href="#b"><img className='max-w-7' src={Icon1} alt="icon" /></a>
                                            <a class="block" href="#b"><img className='max-w-7' src={Icon2} alt="icon" /></a>
                                            <a class="block" href="#b"><img className='max-w-7' src={Icon3} alt="icon" /></a>
                                            <a class="block" href="#b"><img className='max-w-7' src={Icon4} alt="icon" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full basis-2/12 2xl:w-2/12 2xl:basis-2/12 xl:w-2/12 xl:basis-2/12 lg:w-3/12 lg:basis-3/12 md:w-5/12 md:basis-5/12 sm:w-6/12 sm:basis-6/12 xsm:w-full xsm:basis-full relative px-4">
                                <div class="footer-widget mt-0 mb-12 mx-0 widget_nav_menu md:pl-0 sm:pl-10 xsm:pl-0">
                                    <h4 class="fw-title uppercase font-bold text-xl text-white mt-0 mb-7 mx-0 ">quick link</h4>
                                    <ul class="list-wrap m-0 p-0  menu">
                                        <li class=" mt-0 mb-1.5 mx-0"><a class=" text-base inline-block text-grey relative hover:text-green  after:content-[''] after:absolute after:w-full after:h-px after:origin-[right_top] after:transition-transform after:duration-[0.4s] after:ease-[cubic-bezier(0.74,0.72,0.27,0.24)] after:scale-x-0 after:scale-y-100 after:left-0 after:bottom-0 after:bg-green  hover:after:origin-[left_top] hover:after:scale-100" href="#b">Gaming</a></li>
                                        <li class=" mt-0 mb-1.5 mx-0"><a class=" text-base inline-block text-grey relative hover:text-green  after:content-[''] after:absolute after:w-full after:h-px after:origin-[right_top] after:transition-transform after:duration-[0.4s] after:ease-[cubic-bezier(0.74,0.72,0.27,0.24)] after:scale-x-0 after:scale-y-100 after:left-0 after:bottom-0 after:bg-green  hover:after:origin-[left_top] hover:after:scale-100" href="#b">Product</a></li>
                                        <li class=" mt-0 mb-1.5 mx-0"><a class=" text-base inline-block text-grey relative hover:text-green  after:content-[''] after:absolute after:w-full after:h-px after:origin-[right_top] after:transition-transform after:duration-[0.4s] after:ease-[cubic-bezier(0.74,0.72,0.27,0.24)] after:scale-x-0 after:scale-y-100 after:left-0 after:bottom-0 after:bg-green  hover:after:origin-[left_top] hover:after:scale-100" href="#b">All NFTs</a></li>
                                        <li class=" mt-0 mb-1.5 mx-0"><a class=" text-base inline-block text-grey relative hover:text-green  after:content-[''] after:absolute after:w-full after:h-px after:origin-[right_top] after:transition-transform after:duration-[0.4s] after:ease-[cubic-bezier(0.74,0.72,0.27,0.24)] after:scale-x-0 after:scale-y-100 after:left-0 after:bottom-0 after:bg-green  hover:after:origin-[left_top] hover:after:scale-100" href="#b">Social Network</a></li>
                                        <li class=" mt-0 mb-1.5 mx-0"><a class=" text-base inline-block text-grey relative hover:text-green  after:content-[''] after:absolute after:w-full after:h-px after:origin-[right_top] after:transition-transform after:duration-[0.4s] after:ease-[cubic-bezier(0.74,0.72,0.27,0.24)] after:scale-x-0 after:scale-y-100 after:left-0 after:bottom-0 after:bg-green  hover:after:origin-[left_top] hover:after:scale-100" href="#b">Domain Names</a></li>
                                        <li class=" mt-0 mb-1.5 mx-0"><a class=" text-base inline-block text-grey relative hover:text-green  after:content-[''] after:absolute after:w-full after:h-px after:origin-[right_top] after:transition-transform after:duration-[0.4s] after:ease-[cubic-bezier(0.74,0.72,0.27,0.24)] after:scale-x-0 after:scale-y-100 after:left-0 after:bottom-0 after:bg-green  hover:after:origin-[left_top] hover:after:scale-100" href="#b">Collectibles</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="w-full basis-2/12 2xl:w-2/12 2xl:basis-2/12 xl:w-2/12 xl:basis-2/12 lg:w-3/12 lg:basis-3/12 md:w-5/12 md:basis-5/12 sm:w-6/12 sm:basis-6/12 xsm:w-full xsm:basis-full relative px-[15px]">
                                <div class=" mt-0 mb-12 mx-0 sm:pl-12 md:pl-0 xsm:pl-0">
                                    <h4 class="uppercase text-white font-bold text-xl mt-0 mb-7 mx-0 ">Supports</h4>
                                    <ul class=" m-0 p-0  menu">
                                        <li class=" mt-0 mb-1.5 mx-0"><a class=" text-base inline-block text-grey relative hover:text-green  after:content-[''] after:absolute after:w-full after:h-px after:origin-[right_top] after:transition-transform after:duration-[0.4s] after:ease-[cubic-bezier(0.74,0.72,0.27,0.24)] after:scale-x-0 after:scale-y-100 after:left-0 after:bottom-0 after:bg-green  hover:after:origin-[left_top] hover:after:scale-100" href="#b">Setting &amp; Privacy</a></li>
                                        <li class=" mt-0 mb-1.5 mx-0"><a class=" text-base inline-block text-grey relative hover:text-green  after:content-[''] after:absolute after:w-full after:h-px after:origin-[right_top] after:transition-transform after:duration-[0.4s] after:ease-[cubic-bezier(0.74,0.72,0.27,0.24)] after:scale-x-0 after:scale-y-100 after:left-0 after:bottom-0 after:bg-green  hover:after:origin-[left_top] hover:after:scale-100" href="#b">Help &amp; Support</a></li>
                                        <li class=" mt-0 mb-1.5 mx-0"><a class=" text-base inline-block text-grey relative hover:text-green  after:content-[''] after:absolute after:w-full after:h-px after:origin-[right_top] after:transition-transform after:duration-[0.4s] after:ease-[cubic-bezier(0.74,0.72,0.27,0.24)] after:scale-x-0 after:scale-y-100 after:left-0 after:bottom-0 after:bg-green  hover:after:origin-[left_top] hover:after:scale-100" href="#b">Live Auctions</a></li>
                                        <li class=" mt-0 mb-1.5 mx-0"><a class=" text-base inline-block text-grey relative hover:text-green  after:content-[''] after:absolute after:w-full after:h-px after:origin-[right_top] after:transition-transform after:duration-[0.4s] after:ease-[cubic-bezier(0.74,0.72,0.27,0.24)] after:scale-x-0 after:scale-y-100 after:left-0 after:bottom-0 after:bg-green  hover:after:origin-[left_top] hover:after:scale-100" href="#b">Item Details</a></li>
                                        <li class=" mt-0 mb-1.5 mx-0"><a class=" text-base inline-block text-grey relative hover:text-green  after:content-[''] after:absolute after:w-full after:h-px after:origin-[right_top] after:transition-transform after:duration-[0.4s] after:ease-[cubic-bezier(0.74,0.72,0.27,0.24)] after:scale-x-0 after:scale-y-100 after:left-0 after:bottom-0 after:bg-green  hover:after:origin-[left_top] hover:after:scale-100" href="#b">24/7 Supports</a></li>
                                        <li class=" mt-0 mb-1.5 mx-0"><a class=" text-base inline-block text-grey relative hover:text-green  after:content-[''] after:absolute after:w-full after:h-px after:origin-[right_top] after:transition-transform after:duration-[0.4s] after:ease-[cubic-bezier(0.74,0.72,0.27,0.24)] after:scale-x-0 after:scale-y-100 after:left-0 after:bottom-0 after:bg-green  hover:after:origin-[left_top] hover:after:scale-100" href="#b">Our News</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="w-full basis-4/12 pb-12 2xl:w-4/12 2xl:basis-4/12 xl:w-4/12 xl:basis-4/12 lg:w-5/12 lg:basis-5/12 md:w-7/12 md:basis-7/12 sm:w-full sm:basis-full xsm:w-full xsm:basis-full relative px-4">
                                <div class="mt-0 mb-12 mx-0 sm:pl-20 lg:pl-[0] md:pl-0 xsm:pl-0">
                                    <h4 class="uppercase text-white font-bold text-xl mt-0 mb-7 mx-0 ">Newsletter</h4>
                                    <div class="">
                                        <p class=" text-grey text-base mt-0 mb-5 mx-0">Subscribe our newsletter to get our latest update &amp; newsconsectetur</p>
                                        <form action="#" class="relative">
                                            <input type="email" placeholder="Your email address" class="block w-full rounded-8px text-base h-14 pl-5 pr-24 py-4 rounded-md border-none bg-[#1f2935] placeholder:text-base focus:ring-0 focus:!border-none" />
                                            <button type="submit" class="absolute w-16 h-full text-3xl text-BlackBlue flex items-center justify-center p-2.5 rounded-md border-0 right-0 top-0 bg-green hover:bg-[#ffbe18]">
                                                <i class="flaticon-paper-plane"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright__wrap px-0 py-5 bg-[#090d10]">
                    <div class="w-full">
                        <div class="flex flex-wrap mx-minus-15px md:flex-row flex-col justify-around items-center ">
                            <div class="relative px-4">
                                <div class="copyright__text text-left sm:text-center xsm:text-center">
                                    <p class=" text-sm font-semibold uppercase text-grey md:pb-0 pb-2 m-0 font-Barlow">Copyright © 2023 - All Rights Reserved By <span class=" text-green">Mykd</span></p>
                                </div>
                            </div>
                            <div class="relative px-[15px]">
                                <div class="copyright__card float-right sm:float-none sm:text-center sm:m-[0_auto] xsm:float-none xsm:text-center xsm:m-auto">
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
