import React from 'react';
import logo from '../img/logo/logo.png';

const SideBar = ({ isVisible, toggleSidebar }) => {
    return (
        <>
            <div
                onClick={toggleSidebar}
                className={`fixed top-0 right-0 z-10 w-full h-full transition-opacity duration-300 ease-out bg-BlackBlue ${isVisible ? 'opacity-80 visible' : 'opacity-0 invisible'}`}
            ></div>
            <div className={`fixed overflow-y-auto w-[485px] h-full bg-BlackBlue z-10 transition-all duration-500 ease-[cubic-bezier(0.785,0.135,0.15,0.86)] flex flex-col right-0 top-0 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col flex-1">
                    <div className="flex items-center px-10 pb-6 border-b border-solid pt-9 border-b-BlackBlue">
                        <div className=" logo">
                            <a className="inline-block" href="index.html">
                                <img className='max-w-44' src={logo} alt="logo" />
                            </a>
                        </div>
                        <div onClick={toggleSidebar} className="w-12 h-12 flex items-center justify-center text-xl text-slate-300 cursor-pointer transition-all duration-150 delay-0 ml-auto rounded-50% hover:text-gray-900 hover:bg-green ">
                            <i className="flaticon-swords-in-cross-arrangement"></i>
                        </div>
                    </div>
                    <div className="px-10 pt-6 pb-10">
                        <h2 className="mx-0 mt-0 text-3xl font-bold tracking-wide text-white uppercase title pb-7">Best Seller of Month Ideas for <span className=" text-green">NFT Wallet</span></h2>
                        <div className="mx-0 mt-0 mb-10 ">
                            <h4 className="mx-0 mt-0 mb-6 text-base font-semibold tracking-wider text-white small-title">CONTACT US</h4>
                            <ul className="p-0 m-0 list-wrap">
                                <li className="text-grey font-medium relative mt-0 mb-2 mx-0 pl-6 before:content-[''] before:absolute before:w-2 before:h-2 before:transition-all before:duration-150 before:delay-0 before:left-0 before:top-3 last:m-0 font-Barlow before:bg-grey hover:before:bg-green">
                                    <a className="text-grey hover:text-green" href="tel:93332225557">+9 333 222 5557</a>
                                </li>
                                <li className="text-grey font-medium relative mt-0 mb-2 mx-0 pl-6 before:content-[''] before:absolute before:w-2 before:h-2 before:transition-all before:duration-150 before:delay-0 before:left-0 before:top-3 last:m-0 font-Barlow before:bg-grey hover:before:bg-green">
                                    <a className="text-grey hover:text-green" href="mailto:info@webmail.com">info@webmail.com</a>
                                </li>
                                <li className="text-grey font-medium relative mt-0 mb-2 mx-0 pl-6 before:content-[''] before:absolute before:w-2 before:h-2 before:transition-all before:duration-150 before:delay-0 before:left-0 before:top-3 last:m-0 font-Barlow before:bg-grey hover:before:bg-green">
                                    New Central Park W7 Street ,New York
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <h4 className="mx-0 mt-0 mb-6 text-base font-semibold tracking-wider uppercase small-title text-green">Subscribe</h4>
                            <form action="#" className="relative mx-0 mt-0 mb-5">
                                <input
                                    type="email"
                                    placeholder="Get News &amp; Updates"
                                    className="block w-full border text-sm font-medium transition-all duration-150 delay-0 pl-4 mb-6 pr-20 py-[15px] border-solid border-[#535d68] font-Barlow bg-transparent focus:!ring-[none] focus:!border-[#535d68] focus:border-solid focus:!outline-offset-0  focus:outline-0"
                                />
                                <button
                                    type="submit"
                                    className="absolute w-14 text-mb-6 border-none right-0 inset-y-0 bg-transparent before:content-[''] before:absolute before:w-px before:left-0 before:inset-y-1.5 before:bg-[#535d68] group">
                                    <i className=" text-green group-hover:text-amber-400"></i>
                                </button>
                            </form>

                            <p className="m-0 text-sm font-bold text-grey">Subscribe dolor sitamet, consectetur adiping eli. Duis esollici tudin augue.</p>
                        </div>
                        <ul className="flex items-center flex-wrap gap-[10px_28px] mt-12 pt-10 py-8 border-t-[#535d68] border-t border-solid">
                            <li className="leading-none "><a className="block text-base text-white hover:text-green" href="#b"><i className="flaticon-twitter"></i></a></li>
                            <li className="leading-none "><a className="block text-base text-white hover:text-green" href="#b"><i className="flaticon-facebook"></i></a></li>
                            <li className="leading-none "><a className="block text-base text-white hover:text-green" href="#b"><i className="flaticon-twitch"></i></a></li>
                            <li className="leading-none "><a className="block text-base text-white hover:text-green" href="#b"><i className="flaticon-youtube"></i></a></li>
                        </ul>
                    </div>
                    <div className="px-10 py-8 mx-0 mt-auto mb-0 bg-BlackBlue">
                        <p className="m-0 text-sm font-semibold tracking-wider uppercase text-slate-300 font-Barlow">Copyright © 2023 - By <span className=" text-green">PlayX</span></p>
                    </div>
                </div>
            </div>
        </>
    );
}


export default SideBar;
