import logo from '../img/logo/logo2_00000.png';
import search from '../img/icons/search.png';


function Header() {
    return (
        <>
            <div className="header">
                <div id="header" className="tg-header__area transparent-header absolute w-full z-[9] h-auto left-0 top-0 transition-all duration-[0.4s] ease-[ease] px-0 py-[11px] lg:py-[25px] md:py-[25px] sm:py-[25px] xsm:py-[25px] flex justify-center">
                    <div className="container">
                        <div className="flex flex-wrap mx-[-15px]">
                            <div className="w-full basis-full relative px-[15px]">
                                <div className="header-menu">
                                    <nav className="header-menu flex items-center flex-wrap justify-start lg:justify-between md:justify-between">
                                        <div className="logo flex items-center">
                                            <a className="inline-block" href="index.html">
                                                <img className='w-56' src={logo} alt="logo" />
                                            </a>
                                        </div>

                                        <div className="header-menu navbar-wrap tgmenu__main-menu flex grow">
                                            <ul
                                                className="navigation flex flex-row flex-wrap ml-[122px] mr-auto my-0 p-0 xl:flex xl:ml-[65px]  xl:mr-auto  xl:my-0">
                                                <li
                                                    className="active menu-item-has-children block relative list-none group lg:group-disabled  md:group-disabled  sm:group-disabled xsm:group-disabled">
                                                    <a className=" text-[15px] font-bold uppercase block leading-none relative tracking-[0.8px] z-[1] px-[23px] py-[38px] font-Barlow before:content-[''] before:absolute before:w-[42px] before:h-px before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:mx-auto before:my-0 before:top-2/4 before:inset-x-0 before:bg-[#45f882] text-[#45f882] before:opacity-100 before:-translate-y-2/4 before:rotate-[-40deg]"
                                                        href="#section">
                                                        Home
                                                    </a>
                                                </li>
                                                <li className="block relative list-none group">
                                                    <a className=" text-[15px] font-bold uppercase text-[#fff] block leading-none relative tracking-[0.8px] z-[1] px-[23px] py-[38px] font-Barlow before:content-[''] before:absolute before:w-[42px] before:h-px before:-translate-y-2/4 before:rotate-0 before:opacity-0 before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:mx-auto before:my-0 before:top-2/4 before:inset-x-0 before:bg-[#45f882] group-hover:text-[#45f882]  group-hover:before:opacity-100 group-hover:before:-translate-y-2/4 group-hover:before:rotate-[-40deg]"
                                                        href="#section">
                                                        ABOUT US
                                                    </a>
                                                </li>
                                                <li className="block relative list-none group">
                                                    <a className=" text-[15px] font-bold uppercase text-[#fff] block leading-none relative tracking-[0.8px] z-[1] px-[23px] py-[38px] font-Barlow before:content-[''] before:absolute before:w-[42px] before:h-px before:-translate-y-2/4 before:rotate-0 before:opacity-0 before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:mx-auto before:my-0 before:top-2/4 before:inset-x-0 before:bg-[#45f882] group-hover:text-[#45f882]  group-hover:before:opacity-100 group-hover:before:-translate-y-2/4 group-hover:before:rotate-[-40deg]"
                                                        href="#section">
                                                        TOURNAMENT
                                                    </a>

                                                </li>
                                                <li className="block relative list-none group">
                                                    <a className="text-[15px] font-bold uppercase text-[#fff] block leading-none relative tracking-[0.8px] z-[1] px-[23px] py-[38px] font-Barlow before:content-[''] before:absolute before:w-[42px] before:h-px before:-translate-y-2/4 before:rotate-0 before:opacity-0 before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:mx-auto before:my-0 before:top-2/4 before:inset-x-0 before:bg-[#45f882] group-hover:text-[#45f882]  group-hover:before:opacity-100 group-hover:before:-translate-y-2/4 group-hover:before:rotate-[-40deg]"
                                                        href="#section">
                                                        PAGES
                                                    </a>
                                                </li>
                                                <li className="block relative list-none group">
                                                    <a className="text-[15px] font-bold uppercase text-[#fff] block leading-none relative tracking-[0.8px] z-[1] px-[23px] py-[38px] font-Barlow before:content-[''] before:absolute before:w-[42px] before:h-px before:-translate-y-2/4 before:rotate-0 before:opacity-0 before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:mx-auto before:my-0 before:top-2/4 before:inset-x-0 before:bg-[#45f882] group-hover:text-[#45f882]  group-hover:before:opacity-100 group-hover:before:-translate-y-2/4 group-hover:before:rotate-[-40deg]"
                                                        href="#section">
                                                        NEWS
                                                    </a>
                                                </li>
                                                <li className="block relative list-none group">
                                                    <a className="text-[15px] font-bold uppercase text-[#fff] block leading-none relative tracking-[0.8px] z-[1] px-[23px] py-[38px] font-Barlow before:content-[''] before:absolute before:w-[42px] before:h-px before:-translate-y-2/4 before:rotate-0 before:opacity-0 before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:mx-auto before:my-0 before:top-2/4 before:inset-x-0 before:bg-[#45f882] group-hover:text-[#45f882]  group-hover:before:opacity-100 group-hover:before:-translate-y-2/4 group-hover:before:rotate-[-40deg]"
                                                        href="#section">
                                                        contact
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="tgmenu__action block lg:mr-10 md:mr-10 ">
                                            <ul className="list-wrap m-0 p-0  flex items-center ml-2.5">
                                                <li className="search relative ml-0">
                                                    <a className="block text-[20px] hover:text-[#45f882] text-[#fff]" href="#section">
                                                    <img className='w-5' src={search} alt="logo" />
                                                    </a>
                                                </li>
                                                <li className="header-btn relative ml-[25px] pl-[25px] before:content-[''] before:absolute before:-translate-y-2/4 before:w-1.5 before:h-7 before:bg-[#131b22] before:shadow-[inset_0px_3px_7px_0px_rgba(0,0,0,0.61)] before:left-0 before:top-2/4
                                        lg:before:shadow-[inset_0px_3px_7px_0px_#45f882] lg:before:opacity-10
                                        md:before:shadow-[inset_0px_3px_7px_0px_#45f882] md:before:opacity-10
                                        sm:before:shadow-[inset_0px_3px_7px_0px_#45f882] sm:before:opacity-10
                                        xsm:before:shadow-[inset_0px_3px_7px_0px_#45f882] xsm:before:opacity-10
                                        ">
                                                    <a className="tg-border-btn text-[#fff] font-bold" href="#section">
                                                        <i className="flaticon-edit">
                                                            
                                                        </i>
                                                        ~SIGN IN
                                                    </a>
                                                </li>
                                                <li
                                                    className="side-toggle-icon group/burger relative ml-[25px] flex flex-col min-w-[45px] gap-2.5 cursor-pointer">
                                                    <span
                                                        className="block h-[3px] bg-[#fff] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] w-[26px]  group-hover/burger:w-[45px]"></span>
                                                    <span
                                                        className="block h-[3px] bg-[#fff] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] w-[45px]  group-hover/burger:w-[45px]"></span>
                                                    <span
                                                        className="block h-[3px] bg-[#fff] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] w-[26px] self-end  group-hover/burger:w-[45px]"></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
