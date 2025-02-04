import ShopNav1 from '../img/others/shop_nav01.jpg';
import ShopNav2 from '../img/others/shop_nav02.jpg';
import ShopNav3 from '../img/others/shop_nav03.jpg';
import ShopDetails1 from '../img/others/shop_details01.jpg';
import ShopDetails2 from '../img/others/shop_details02.jpg';
import ShopDetails3 from '../img/others/shop_details03.jpg';
import product1 from '../img/galerry/product01.jpg';
import product2 from '../img/galerry/product02.jpg';
import product3 from '../img/galerry/product03.jpg';
import product4 from '../img/galerry/product04.jpg';

function PagesGamingShop() {
    return (
        <>
            <section className="px-0 py-32 pb-24 bg-[#0f161b] pt-py-32">
                <div className="container mx-auto">
                    <div className="flex flex-col px-4 md:px-0 lg:flex-row mx-minus-15px">
                        {/* Left section - Product images and thumbnails */}
                        <div className="flex flex-col lg:flex-row w-full lg:w-[55%] flex-[0_0_auto] px-3">

                            {/* Thumbnail images list */}
                            <ul className="grid order-2 lg:order-1 grid-cols-3 lg:grid-cols-1 gap-[13px] w-80 lg:w-24 h-full lg:h-24 mr-5 border-none">
                                <li className="block">
                                    {/* Thumbnail button for first image */}
                                    <button className="block w-full p-3 rounded-8px bg-[#1b242e] dark:border-transparent">
                                        <img className='rounded' src={ShopNav1} alt="ShopNav1" />
                                    </button>
                                </li>

                                <li className="block">
                                    {/* Thumbnail button for second image */}
                                    <button className="block w-full p-3 rounded-8px bg-[#1b242e] dark:border-transparent">
                                        <img className='rounded' src={ShopNav2} alt="ShopNav2" />
                                    </button>
                                </li>

                                <li className="block">
                                    {/* Thumbnail button for third image */}
                                    <button className="block w-full p-3 rounded-8px bg-[#1b242e] dark:border-transparent">
                                        <img className='rounded' src={ShopNav3} alt="ShopNav3" />
                                    </button>
                                </li>
                            </ul>

                            <div className='order-1 mb-8 lg:mb-0'>
                                {/* First product image (active) */}
                                <div className="p-4 rounded-lg bg-[#1b242e] active">
                                    <a href="assets/img/products/shop_details01.jpg">
                                        <img className=' w-full h-full xl:w-[600px] rounded-lg' src={ShopDetails1} alt="ShopDetails1" />
                                    </a>
                                </div>
                                {/* Second product image (hidden by default) */}
                                <div className="p-5 rounded-lg bg-[#1b242e] hidden">
                                    <a href="assets/img/products/shop_details02.jpg">
                                        <img className='rounded-lg' src={ShopDetails2} alt="ShopDetails2" />
                                    </a>
                                </div>
                                {/* Third product image (hidden by default) */}
                                <div className="p-5 rounded-lg bg-[#1b242e] hidden">
                                    <a href="assets/img/products/shop_details03.jpg">
                                        <img className='rounded-lg' src={ShopDetails3} alt="ShopDetails3" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right section - Product details */}
                        <div className='w-full lg:w-[44%] pt-10 lg:pt-0 flex-[0_0_auto] ml-auto px-3'>
                            {/* Product rating */}
                            <div className="mx-0 mt-0 mb-2 text-sm">
                                <span className="ml-1 tracking-wideont-sesemibold text-grey">⭐⭐⭐⭐⭐ ( 3 Customer Review )</span>
                            </div>

                            {/* Product title */}
                            <h2 className="mx-0 mt-0 mb-3 text-4xl font-extrabold tracking-wide text-white uppercase xl:text-5xl title">
                                game controller
                            </h2>

                            {/* Price and stock status */}
                            <div className="mx-0 mt-4 font-semibold uppercase mb-7">
                                <span className="text-lg text-white">$25.45 <span className="text-base font-bold stock-status text-green">- IN STOCK</span></span>
                            </div>

                            {/* Product description */}
                            <div className="mx-0 mt-0 mb-7">
                                <p className="text-lg font-semibold text-grey">
                                    Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum
                                    <br /> solliciin is yaugue euismods Nulla ullaorper.
                                </p>
                            </div>

                            {/* Product model selection */}
                            <div className="flex items-center mx-0 mt-0 mb-9">
                                <p className="m-0 text-lg font-bold text-white">Model:</p>
                                <ul className="m-0 p-0 flex items-center gap-2.5 ml-[15px]">
                                    <li className="block shadow-[0px_3px_7px_0px_rgba(0,0,0,0.18)] text-grey uppercase font-extrabold text-sm leading-none cursor-pointer px-4 py-2 rounded-sm border-2 border-[#282f36] border-solid bg-[#1b242e]">Gat</li>
                                    <li className="block shadow-[0px_3px_7px_0px_rgba(0,0,0,0.18)] text-grey uppercase font-extrabold text-sm leading-none cursor-pointer px-4 py-2 rounded-sm border-2 border-[#282f36] border-solid bg-[#1b242e]">dat4</li>
                                    <li className="block shadow-[0px_3px_7px_0px_rgba(0,0,0,0.18)] text-grey uppercase font-extrabold text-sm leading-none cursor-pointer px-4 py-2 rounded-sm border-2 border-[#282f36] border-solid bg-[#1b242e]">rt30</li>
                                </ul>
                            </div>

                            {/* Quantity and add to cart button */}
                            <div className="pt-8 pb-0 px-0 border-t-[#1b242e] border-t border-solid">
                                <div className="flex flex-wrap items-center gap-3">
                                    {/* Quantity input */}
                                    <form action="#" className="relative w-24">
                                        <input type="text" className="w-full h-14 text-grey font-extrabold text-sm pl-6 pr-10 py-3 rounded-8px border-2 border-[#282f36] border-solid bg-[#1b242e] focus:!ring-0 focus:!border-[#282f36]" value="1" readonly />
                                        <div className="flex flex-col absolute h-full leading-none items-center justify-center right-[18px] top-0">
                                            <span className="text-white cursor-pointer">↑</span>
                                            <span className="text-white cursor-pointer">↓</span>
                                        </div>
                                    </form>
                                    {/* Add to cart button */}
                                    <button className="duration-300 pagesShopBtn">add to cart</button>
                                </div>
                            </div>

                            {/* Product metadata: Categories, Tags, and Share options */}
                            <div className="mx-0 mb-0 mt-9">

                                {/* Categories section */}
                                <div className="flex items-baseline mb-3 posted_in">
                                    <b className="text-white text-lg font-semibold mr-1.5">Categories :</b>
                                    <a className="inline-block ml-1 text-base font-semibold tracking-wide duration-300 text-grey hover:text-green" href="#b">Gamdias,</a>
                                    <a className="inline-block ml-1 text-base font-semibold tracking-wide duration-300 text-grey hover:text-green" href="#b">Apple,</a>
                                    <a className="inline-block ml-1 text-base font-semibold tracking-wide duration-300 text-grey hover:text-green" href="#b">Huawei</a>
                                </div>

                                {/* Tags section */}
                                <div className="flex items-baseline mb-3 tagged_as">
                                    <b className="text-white text-lg font-semibold mr-1.5">Tags :</b>
                                    <a className="inline-block ml-1 text-base font-semibold tracking-wide duration-300 text-grey hover:text-green" href="#b">Silver,</a>
                                    <a className="inline-block ml-1 text-base font-semibold tracking-wide duration-300 text-grey hover:text-green" href="#b">Pink,</a>
                                    <a className="inline-block ml-1 text-base font-semibold tracking-wide duration-300 text-grey hover:text-green" href="#b">Green</a>
                                </div>

                                {/* Social media share options */}
                                <div className="flex items-baseline product_share">
                                    <b className="text-white text-lg font-semibold mr-1.5">Share :</b>
                                    <a className="inline-block text-base tracking-wide font-semibold text-grey ml-1 hover:text-green duration-300 mr-2.5" href="#b"><i className="duration-300 flaticon-facebook"></i></a>
                                    <a className="inline-block text-base tracking-wide font-semibold text-grey ml-1 hover:text-green duration-300 mr-2.5" href="#b"><i className="duration-300 flaticon-twitter"></i></a>
                                    <a className="inline-block ml-1 text-base font-semibold tracking-wide duration-300 text-grey hover:text-green" href="#b"><i className="duration-300 flaticon-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap px-2 md:px-0 mx-minus-15px">
                        <div className="relative w-full px-4 basis-full">
                            <div className="mx-0 mt-24 mb-0">
                                <ul className="flex flex-wrap mr-5 border-b-[#1b242e] mt-0 mb-1 mx-0 border-b border-solid">
                                    <li className="mx-0 mt-0 -mb-px">
                                        <button className="uppercase font-bold text-lg text-green border px-6 py-3 rounded-[3px] border-solid border-transparent hover:border-transparent">Description</button>
                                    </li>

                                    <li className="mx-0 mt-0 -mb-px">
                                        <button className="uppercase font-bold text-lg text-grey border px-6 py-3 rounded-[3px] border-solid border-transparent hover:border-transparent">Additional Information</button>
                                    </li>

                                    <li className="mx-0 mt-0 -mb-px">
                                        <button className="uppercase font-bold text-lg text-grey border px-6 py-3 rounded-[3px] border-solid border-transparent hover:border-transparent">Reviews (0)</button>
                                    </li>
                                </ul>

                                <div className="px-8 py-6 rounded-8x bg-[#161e26]">
                                    <div className="animate-none fade">
                                        <p className="mb-4 text-lg font-semibold text-grey">Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                            ever since the 1500s.</p>
                                        <p className="text-lg font-semibold text-grey">Don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour.</p>
                                    </div>

                                    <div className="hidden animate-none fade">
                                        <table className="table w-full m-0 table-sm">
                                            <tbody>
                                                <tr>
                                                    <th className="text-left border px-6 py-2.5 border-[#30363d] border-solid text-white text-lg font-semibold w-3/12">General</th>
                                                    <td className=" text-grey font-semibold italic text-lg border px-6 py-2.5 border-[#30363d] border-solid">PS5 Digital Platform</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-left border px-6 py-2.5 border-[#30363d] border-solid text-white text-lg font-semibold w-3/12">Technical Information</th>
                                                    <td className=" text-grey font-semibold italic text-lg border px-6 py-2.5 border-[#30363d] border-solid">Qualcomm Snapdragon XR2</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-left border px-6 py-2.5 border-[#30363d] border-solid text-white text-lg font-semibold w-3/12">Display</th>
                                                    <td className=" text-grey font-semibold italic text-lg border px-6 py-2.5 border-[#30363d] border-solid">3664 x 1920</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-left border px-6 py-2.5 border-[#30363d] border-solid text-white text-lg font-semibold w-3/12">RAM &amp; Storage</th>
                                                    <td className=" text-grey font-semibold italic text-lg border px-6 py-2.5 border-[#30363d] border-solid">8GB/256GB</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-left border px-6 py-2.5 border-[#30363d] border-solid text-white text-lg font-semibold w-3/12">Included</th>
                                                    <td className=" text-grey font-semibold italic text-lg border px-6 py-2.5 border-[#30363d] border-solid">PS5 VR Streaming Assistant</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="hidden animate-none fade">
                                        <div className="border px-7 py-[25px] rounded-[5px] border-solid border-[#30363d]">
                                            <div className="text-2xl font-bold text-white uppercase mb-15">
                                                <h5>Customer Reviews (0)</h5>
                                            </div>

                                            <div className="text-lg font-semibold text-grey">
                                                <p>No reviews yet</p>
                                            </div>

                                            <div className="pt-5 text-lg font-semibold text-green font-lg">
                                                <a href="#b">Write a review</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative px-4 md:px-0 ">
                        <div className="px-0 pb-0 pt-28">
                            <h2 className="mx-0 mt-0 text-4xl font-extrabold tracking-wider text-left text-white uppercase mb-9">Related Products</h2>
                            <div className="grid grid-cols1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-minus-15px">
                                <div className="px-4">
                                    <div className="w-full rounded-8px bg-[#161d24] m-[0_auto_35px] pt-5 px-5 pb-12">
                                        {/* Product Image and Wishlist Button Container */}
                                        <div className="relative flex items-center justify-center min-h-[262px] rounded-lg bg-[#0f161b]">
                                            {/* Link wrapping the product image that navigates to product details */}
                                            <a href='#b'>
                                                <img className='w-48' src={product1} alt="product1" />
                                            </a>
                                            {/* Wishlist button: an empty link with an aria-label for accessibility */}
                                            <a href="#b" className="absolute leading-none wishlist-button text-grey right-5 top-5 hover:text-green">❤️</a>
                                        </div>

                                        {/* Divider line between image and content */}
                                        <div className="block z-2 w-full h-px opacity-15 mt-6 mb-6 mx-0 bg-[radial-gradient(circle,#f5f6f9_0%,#ffffff00_100%)]"></div>

                                        {/* Top section: Product title and price */}
                                        <div className="flex items-center justify-between mx-0 mt-0 mb-4 leading-none">
                                            <h4 className="m-0 overflow-hidden text-lg leading-none title grow">
                                                {/* Link for product title (navigates to product details) */}
                                                <a className="text-xl font-bold text-white uppercase duration-500 hover:text-green" href="#b">
                                                    Nintendo Switch
                                                </a>
                                            </h4>
                                            {/* Display of product price */}
                                            <div className="ml-5 text-xl font-bold text-green font-Barlow">
                                                $29
                                            </div>
                                        </div>

                                        {/* Bottom section: Product category */}
                                        <div className="block text-sm font-medium leading-none uppercase text-grey">
                                            <a className="font-bold tracking-widest duration-500 text-grey hover:text-green" href="#b">
                                                E-SPORTS
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-4">
                                    <div className="w-full rounded-8px bg-[#161d24] m-[0_auto_35px] pt-5 px-5 pb-12">
                                        {/* Product Image and Wishlist Button Container */}
                                        <div className="relative flex items-center justify-center min-h-[262px] rounded-lg bg-[#0f161b]">
                                            {/* Link wrapping the product image that navigates to product details */}
                                            <a href='#b'>
                                                <img className='w-48' src={product2} alt="product2" />
                                            </a>
                                            {/* Wishlist button: an empty link with an aria-label for accessibility */}
                                            <a href="#b" className="absolute leading-none wishlist-button text-grey right-5 top-5 hover:text-green">❤️</a>
                                        </div>

                                        {/* Divider line between image and content */}
                                        <div className="block z-2 w-full h-px opacity-15 mt-6 mb-6 mx-0 bg-[radial-gradient(circle,#f5f6f9_0%,#ffffff00_100%)]"></div>

                                        {/* Top section: Product title and price */}
                                        <div className="flex items-center justify-between mx-0 mt-0 mb-4 leading-none">
                                            <h4 className="m-0 overflow-hidden text-lg leading-none title grow">
                                                {/* Link for product title (navigates to product details) */}
                                                <a className="text-xl font-bold text-white uppercase duration-500 hover:text-green" href="#b">
                                                    Nintendo Switch
                                                </a>
                                            </h4>
                                            {/* Display of product price */}
                                            <div className="ml-5 text-xl font-bold text-green font-Barlow">
                                                $29
                                            </div>
                                        </div>

                                        {/* Bottom section: Product category */}
                                        <div className="block text-sm font-medium leading-none uppercase text-grey">
                                            <a className="font-bold tracking-widest duration-500 text-grey hover:text-green" href="#b">
                                                E-SPORTS
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-4">
                                    <div className="w-full rounded-8px bg-[#161d24] m-[0_auto_35px] pt-5 px-5 pb-12">
                                        {/* Product Image and Wishlist Button Container */}
                                        <div className="relative flex items-center justify-center min-h-[262px] rounded-lg bg-[#0f161b]">
                                            {/* Link wrapping the product image that navigates to product details */}
                                            <a href='#b'>
                                                <img className='w-48' src={product3} alt="product3" />
                                            </a>
                                            {/* Wishlist button: an empty link with an aria-label for accessibility */}
                                            <a href="#b" className="absolute leading-none wishlist-button text-grey right-5 top-5 hover:text-green">❤️</a>
                                        </div>

                                        {/* Divider line between image and content */}
                                        <div className="block z-2 w-full h-px opacity-15 mt-6 mb-6 mx-0 bg-[radial-gradient(circle,#f5f6f9_0%,#ffffff00_100%)]"></div>

                                        {/* Top section: Product title and price */}
                                        <div className="flex items-center justify-between mx-0 mt-0 mb-4 leading-none">
                                            <h4 className="m-0 overflow-hidden text-lg leading-none title grow">
                                                {/* Link for product title (navigates to product details) */}
                                                <a className="text-xl font-bold text-white uppercase duration-500 hover:text-green" href="#b">
                                                    Nintendo Switch
                                                </a>
                                            </h4>
                                            {/* Display of product price */}
                                            <div className="ml-5 text-xl font-bold text-green font-Barlow">
                                                $29
                                            </div>
                                        </div>

                                        {/* Bottom section: Product category */}
                                        <div className="block text-sm font-medium leading-none uppercase text-grey">
                                            <a className="font-bold tracking-widest duration-500 text-grey hover:text-green" href="#b">
                                                E-SPORTS
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-4">
                                    <div className="w-full rounded-8px bg-[#161d24] m-[0_auto_35px] pt-5 px-5 pb-12">
                                        {/* Product Image and Wishlist Button Container */}
                                        <div className="relative flex items-center justify-center min-h-[262px] rounded-lg bg-[#0f161b]">
                                            {/* Link wrapping the product image that navigates to product details */}
                                            <a href='#b'>
                                                <img className='w-48' src={product4} alt="product4" />
                                            </a>
                                            {/* Wishlist button: an empty link with an aria-label for accessibility */}
                                            <a href="#b" className="absolute leading-none wishlist-button text-grey right-5 top-5 hover:text-green">❤️</a>
                                        </div>

                                        {/* Divider line between image and content */}
                                        <div className="block z-2 w-full h-px opacity-15 mt-6 mb-6 mx-0 bg-[radial-gradient(circle,#f5f6f9_0%,#ffffff00_100%)]"></div>

                                        {/* Top section: Product title and price */}
                                        <div className="flex items-center justify-between mx-0 mt-0 mb-4 leading-none">
                                            <h4 className="m-0 overflow-hidden text-lg leading-none title grow">
                                                {/* Link for product title (navigates to product details) */}
                                                <a className="text-xl font-bold text-white uppercase duration-500 hover:text-green" href="#b">
                                                    Nintendo Switch
                                                </a>
                                            </h4>
                                            {/* Display of product price */}
                                            <div className="ml-5 text-xl font-bold text-green font-Barlow">
                                                $29
                                            </div>
                                        </div>

                                        {/* Bottom section: Product category */}
                                        <div className="block text-sm font-medium leading-none uppercase text-grey">
                                            <a className="font-bold tracking-widest duration-500 text-grey hover:text-green" href="#b">
                                                E-SPORTS
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default PagesGamingShop;
