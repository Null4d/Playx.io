import logo from '../img/logo/logo2_00000.png';
import search from '../img/icons/search.png';


const Header = ({ toggleSidebar }) => {
    return (
        <>
            <div className="header">
                <div id="header" className="absolute flex justify-center w-full h-auto px-0 transition-all duration-100 z-3 ">
                        <div className="flex flex-wrap w-full">
                            <div className="relative w-full px-5 mx-auto max-w-screen-2xl basis-full">
                                <div className="header-menu">
                                    <nav className="flex flex-wrap items-center justify-start w-full">
                                        <div className="flex items-center">
                                            <a className="inline-block" href="index.html">
                                                <img className='w-56' src={logo} alt="logo" />
                                            </a>
                                        </div>

                                        <div className="flex justify-center navbar-wrap grow"> 
                                            <ul className="flex-row flex-wrap hidden navigation mcc:flex xl:ml-16 2xl:ml-28">
                                                <li className="relative block list-none group">
                                                    <a className="text-base font-bold uppercase block leading-none relative tracking-[0.8px] z-3 px-6 py-9 font-Barlow before:content-[''] before:absolute before:w-11 before:h-px before:transition-all before:duration-150 before:ease-[ease-out] before:delay-[0s] before:mx-auto before:my-0 before:top-2/4 before:inset-x-0 before:bg-green text-green before:opacity-100 before:-translate-y-2/4 before:rotate-[-40deg]"
                                                        href="#section">
                                                        WEBSITE IN PROGRESS
                                                    </a>
                                                </li>
                                                {/* <li className="relative block list-none group">
                                                    <a className="text-base font-bold uppercase text-white block leading-none relative tracking-[0.8px] z-[1] px-6 py-9 font-Barlow before:content-[''] before:absolute before:w-11 before:h-px before:-translate-y-2/4 before:rotate-0 before:opacity-0 before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:mx-auto before:my-0 before:top-2/4 before:inset-x-0 before:bg-[#45f882] group-hover:text-[#45f882]  group-hover:before:opacity-100 group-hover:before:-translate-y-2/4 group-hover:before:rotate-[-40deg]"
                                                        href="#section">
                                                        ABOUT US
                                                    </a>
                                                </li>
                                                <li className="relative block list-none group">
                                                    <a className="text-base font-bold uppercase text-white block leading-none relative tracking-[0.8px] z-[1] px-6 py-9 font-Barlow before:content-[''] before:absolute before:w-11 before:h-px before:-translate-y-2/4 before:rotate-0 before:opacity-0 before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:mx-auto before:my-0 before:top-2/4 before:inset-x-0 before:bg-[#45f882] group-hover:text-[#45f882]  group-hover:before:opacity-100 group-hover:before:-translate-y-2/4 group-hover:before:rotate-[-40deg]"
                                                        href="#section">
                                                        TOURNAMENT
                                                    </a>

                                                </li>
                                                <li className="relative block list-none group">
                                                    <a className="text-base font-bold uppercase text-white block leading-none relative tracking-[0.8px] z-[1] px-6 py-9 font-Barlow before:content-[''] before:absolute before:w-11 before:h-px before:-translate-y-2/4 before:rotate-0 before:opacity-0 before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:mx-auto before:my-0 before:top-2/4 before:inset-x-0 before:bg-[#45f882] group-hover:text-[#45f882]  group-hover:before:opacity-100 group-hover:before:-translate-y-2/4 group-hover:before:rotate-[-40deg]"
                                                        href="#section">
                                                        PAGES
                                                    </a>
                                                </li>
                                                <li className="relative block list-none group">
                                                    <a className="text-base font-bold uppercase text-white block leading-none relative tracking-[0.8px] z-[1] px-6 py-9 font-Barlow before:content-[''] before:absolute before:w-11 before:h-px before:-translate-y-2/4 before:rotate-0 before:opacity-0 before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:mx-auto before:my-0 before:top-2/4 before:inset-x-0 before:bg-[#45f882] group-hover:text-[#45f882]  group-hover:before:opacity-100 group-hover:before:-translate-y-2/4 group-hover:before:rotate-[-40deg]"
                                                        href="#section">
                                                        NEWS
                                                    </a>
                                                </li>
                                                <li className="relative block list-none group">
                                                    <a className="text-base font-bold uppercase text-white block leading-none relative tracking-[0.8px] z-[1] px-6 py-9 font-Barlow before:content-[''] before:absolute before:w-11 before:h-px before:-translate-y-2/4 before:rotate-0 before:opacity-0 before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:mx-auto before:my-0 before:top-2/4 before:inset-x-0 before:bg-[#45f882] group-hover:text-[#45f882]  group-hover:before:opacity-100 group-hover:before:-translate-y-2/4 group-hover:before:rotate-[-40deg]"
                                                        href="#section">
                                                        contact
                                                    </a>
                                                </li> */}

                                            </ul>
                                        </div>

                                        <div className="block ml-auto">
                                            <ul className="list-wrap m-0 p-0  flex items-center ml-2.5">
                                                <li className="relative hidden ml-0 search md:flex">
                                                    <a className="block text-xl text-white hover:text-white" href="#section">
                                                        <img className='w-5' src={search} alt="logo" />
                                                    </a>
                                                </li>
                                                <li className="relative ml-6 pl-[25px] before:content-[''] before:absolute before:-translate-y-2/4 before:w-1.5 before:h-7 before:bg-[#131b22] before:shadow-[inset_0px_3px_7px_0px_rgba(0,0,0,0.61)] before:left-0 before:top-2/4 hidden md:flex">
                                                    <a className='font-bold text-white' href='#b'>
                                                        ~SIGN IN
                                                    </a>
                                                </li>
                                               
                                                <li onClick={toggleSidebar} className=" group/burger relative ml-6 flex flex-col min-w-w-11 gap-2.5 cursor-pointer">
                                                    <span
                                                        className="block h-1 transition-all duration-300 ease-out bg-white delay-0 w-7 group-hover/burger:w-w-11"></span>
                                                    <span
                                                        className="block h-1 transition-all duration-300 ease-out bg-white delay-0 w-11 group-hover/burger:w-w-11"></span>
                                                    <span
                                                        className="self-end block h-1 transition-all duration-300 ease-out bg-white delay-0 w-7 group-hover/burger:w-w-11"></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
}

export default Header;
