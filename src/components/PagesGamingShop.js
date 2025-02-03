import product1 from '../img/galerry/product01.jpg';
import product2 from '../img/galerry/product02.jpg';
import product3 from '../img/galerry/product03.jpg';
import product4 from '../img/galerry/product04.jpg';
import product5 from '../img/galerry/product05.jpg';
import product6 from '../img/galerry/product06.jpg';
import product7 from '../img/galerry/product07.jpg';
import product8 from '../img/galerry/product08.jpg';
import product9 from '../img/galerry/product09.jpg';

function PagesGamingShop() {
    return (
        <>
            <section className="px-0 bg-LightBlue py-[120px]">
                <div className="container mx-auto">
                    <div className="flex flex-col flex-wrap items-center justify-center xl:items-baseline xl:flex-row mx-minus-15px">
                        <div className="relative order-2 w-full px-4 mt-16 xl:mt-0 md:w-3/4 lg:w-6/12 xl:w-3/12 xl:order-1 basis-3/12">
                            <aside className="px-4 mr-0 xl:px-0 xl:mr-4">
                                <div className="mx-0 mt-0 mb-10 border border-gray-700 border-solid rounded-8px">
                                    <h4 className="text-lg relative flex items-baseline gap-x-2.5 leading-none m-0 px-5 py-5 uppercase text-white font-bold bg-LightBlue">
                                        ▶ Search
                                    </h4>
                                    <div className="border p-5 rounded-[0_0_5px_5px] border-solid border-gray-900 bg-gray-950">
                                        <div className="flex items-center leading-none">
                                            <input type="text" placeholder="Search here" className="block grow font-medium pl-0 pr-5 py-0 bg-transparent placeholder:opacity-65 placeholder:font-medium border-none focus:!ring-0 focus:!border-none" />
                                            <button className="p-0 text-sm duration-300 -rotate-90 bg-transparent border-0 text-grey hover:text-green">
                                                <i className="flaticon-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* Search Box */}

                                <div className="mx-0 mt-0 mb-10 border border-gray-800 border-solid rounded-8px">
                                    <h4 className="text-lg relative flex items-baseline gap-x-2.5 leading-none m-0 px-5 py-5 uppercase text-white font-bold bg-LightBlue">
                                        ▶ Filter by Price
                                    </h4>
                                    <div className="border -m-px p-5 rounded-[0_0_5px_5px] border-solid border-gray-900 bg-gray-950">
                                        <div className="mt-1">

                                            <div id="slider-range" className="h-1.5 rounded-none border-none bg-gray-950 ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                                                <div className="ui-slider-range ui-widget-header ui-corner-all" style={{ left: "14.2857%", width: "61.2245%" }}></div>
                                                <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex="0" style={{ left: "14.2857%" }}></span>
                                                <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex="0" style={{ left: "75.5102%" }}></span>
                                            </div>

                                            <div className="flex justify-between mt-4 leading-none">
                                                <input type="submit" value="Filter" className="p-0 border-0 leading-none grow text-left uppercase font-bold text-white tracking-wider text-base bg-transparent border-none focus:!border-none focus:!ring-0" />
                                                <input type="text" id="amount" name="price" placeholder="$80 - $380" className="text-right w-6/12 flex-[0_0_auto] font-bold text-base pointer-events-none p-0 border-none bg-transparent focus:!border-none focus:!ring-0" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* Filter by Price */}

                                <div className="mx-0 mt-0 mb-10 border border-gray-800 border-solid rounded-8px">
                                    <h4 className="text-lg relative flex items-baseline gap-x-2.5 leading-none m-0 px-5 py-5 uppercase text-white font-bold bg-LightBlue">
                                        ▶ Related Products
                                    </h4>
                                    <div className="border -m-px p-5 rounded-[0_0_5px_5px] border-solid border-gray-900 bg-gray-950">

                                        {[{ src: product2, name: "Headphone", price: "$350" }, { src: product3, name: "Replika Axe", price: "$230" }, { src: product6, name: "Ultima Axe", price: "$120" }].map((product, index) => (
                                            <div key={index} className={`flex items-center ${index < 2 ? 'mb-5' : 'm-0'} related__products-item`}>
                                                <div className="related__products-thumb w-20 h-20 flex-[0_0_auto] mr-5">
                                                    <a href="#b">
                                                        <img className="border border-gray-800 border-solid rounded-8px" src={product.src} alt={product.name} />
                                                    </a>
                                                </div>
                                                <div className="related__products-content grow">
                                                    <h4 className="mt-0 mb-1 text-sm product-name">
                                                        <a className="font-bold text-white uppercase duration-500 hover:text-green" href="#b">
                                                            {product.name}
                                                        </a>
                                                    </h4>
                                                    <span className="block text-base font-bold amount font-Barlow text-grey">
                                                        {product.price}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                                {/* Related Products */}

                                <div className="m-0 border border-gray-800 border-solid rounded-8px">
                                    <h4 className="text-lg relative flex items-baseline gap-x-2.5 leading-none m-0 px-5 py-5 uppercase text-white font-bold bg-LightBlue">
                                        ▶ Categories
                                    </h4>
                                    <div className="border -m-px p-5 rounded-[0_0_5px_5px] border-solid border-gray-900 bg-gray-950">
                                        <ul className="p-0 m-0 product-categories list-wrap">
                                            {[{ name: "Controller", count: "12" }, { name: "Headphone", count: "03" }, { name: "Tournaments", count: "18" }, { name: "E-Sports", count: "05" }].map((category, index) => (
                                                <li key={index} className={`flex items-center justify-between font-bold text-sm leading-none transition-all duration-[0.3s] ease-[ease-out] delay-[0s] ${index < 3 ? 'border-b-gray-800 mb-[18px] pb-[18px] border-b border-solid' : 'mb-2.5 pb-0'} hover:text-white font-Barlow`}>
                                                    <a className="block uppercase duration-300 text-grey hover:text-white" href="shop.html">
                                                        {category.name}
                                                    </a>
                                                    <span className="float-right ml-auto font-bold text-grey">
                                                        {category.count}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                {/* Categories */}
                            </aside>
                        </div>

                        <div className="relative order-1 w-full px-4 xl:w-9/12 xl:order-2 basis-9/12">
                            <div className="mt-0 mb-[30px] mx-0">
                                <div className="flex flex-wrap flex-col md:flex-row mx-[-15px] items-center ">
                                    <div className="relative px-4 pb-4 md:pb-0 md:w-8/12 basis-8/12">
                                        <div className="xsm:text-center">
                                            <p className="m-0 text-sm font-bold tracking-wider uppercase text-grey">Showing 1 - 9 of 15 results</p>
                                        </div>
                                    </div>

                                    <div className="relative px-4 md:w-4/12 basis-4/12">
                                        <div className="flex relative w-[187px] ml-auto">
                                            <select name="orderby" className="orderby !bg-[linear-gradient(0deg,#1215187d_0%,#1f29355c_100%)] bg-gray-950 border border-[none] text-grey font-medium text-sm capitalize appearance-none w-full pl-5 pr-10 py-3 rounded-[5px] border-solid border-gray-700 focus:!ring-0 focus:!border-gray-700 focus-visible:!ring-0 focus-visible:!border-gray-700 focus-visible:!border-[none] focus-visible:outline-none">
                                                <option value="Default sorting">Default sorting</option>
                                                <option value="Sort by popularity">Sort by popularity</option>
                                                <option value="Sort by average rating">Sort by average rating</option>
                                                <option value="Sort by latest">Sort by latest</option>
                                                <option value="Sort by latest">Sort by latest</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative w-full px-4 mx-auto basis-9/12">
                                {/* Product Grid Container: Uses CSS grid to layout products */}
                                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 mx-minus-15px">
                                    {[
                                        // Array of product objects containing image, alt text, title, price, and category.
                                        { src: product1, alt: "product1", title: "Nintendo Switch", price: "$29", category: "E-SPORTS" },
                                        { src: product2, alt: "product2", title: "Headphone", price: "$69", category: "accessories" },
                                        { src: product3, alt: "product3", title: "replica Axe", price: "$39", category: "E-SPORTS" },
                                        { src: product4, alt: "product4", title: "ps5 controller", price: "$49", category: "accessories" },
                                        { src: product5, alt: "product5", title: "Golden Crown", price: "$19", category: "gaming" },
                                        { src: product6, alt: "product6", title: "gaming mouse", price: "$49", category: "accessories" },
                                        { src: product7, alt: "product7", title: "Headphone - X", price: "$29", category: "accessories" },
                                        { src: product8, alt: "product8", title: "replica gun", price: "$59", category: "E-SPORTS" },
                                        { src: product9, alt: "product9", title: "gun robot", price: "$109", category: "E-SPORTS" }
                                    ].map((product, index) => (

                                        <div key={index} className="px-4">
                                            <div className="w-full rounded-8px bg-[#161d24] bg-contain bg-[top_center] bg-no-repeat m-[0_auto_35px] pt-5 px-5 pb-12">

                                                {/* Product Image and Wishlist Button Container */}
                                                <div className="relative flex items-center justify-center min-h-[262px] rounded-lg bg-[#0f161b]">
                                                    {/* Link wrapping the product image that navigates to product details */}
                                                    <a href="#b" aria-label={product.title}>
                                                        <img className="rounded-lg" src={product.src} alt={product.alt} />
                                                    </a>
                                                    {/* Wishlist button: an empty link with an aria-label for accessibility */}
                                                    <a href="#b" className="absolute leading-none wishlist-button text-grey right-5 top-5 hover:text-green" aria-label={`Add ${product.title} to wishlist`}></a>
                                                </div>

                                                {/* Divider line between image and content */}
                                                <div className="block z-2 w-full h-px opacity-15 mt-5 mb-6 mx-0 bg-[radial-gradient(circle,#f5f6f9_0%,#ffffff00_100%)]"></div>

                                                {/* Product Information Container */}
                                                <div className="">
                                                    {/* Top section: Product title and price */}
                                                    <div className="flex items-center justify-between mx-0 mt-0 mb-3 leading-none">
                                                        <h4 className="m-0 overflow-hidden text-lg leading-none title grow whitespace-nowrap text-ellipsis">
                                                            {/* Link for product title (navigates to product details) */}
                                                            <a className="font-bold text-white uppercase duration-500 hover:text-green" href="#b" aria-label={product.title}>
                                                                {product.title}
                                                            </a>
                                                        </h4>
                                                        {/* Display of product price */}
                                                        <div className="ml-5 text-lg font-bold text-green font-Barlow">
                                                            {product.price}
                                                        </div>
                                                    </div>

                                                    {/* Bottom section: Product category */}
                                                    <div className="block text-sm font-medium leading-none uppercase text-grey">
                                                        <a className="font-bold tracking-widest text-grey hover:text-green" href="shop.html" aria-label={`View more ${product.category}`}>
                                                            {product.category}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="order-3 mx-0 mt-5 mb-0">
                            {/* Pagination Container */}
                            <ul className="m-0 p-0 flex flex-wrap justify-center gap-[10px_15px] sm:gap-[10px] xsm:gap-[10px]">

                                <li>
                                    <a href="#b" className="flex items-center justify-center px-4 py-3 bg-[linear-gradient(0deg,#1215187d_0%,#1f29355c_100%)] bg-gray-950 border border-gray-700 text-[#adb0bc] font-bold rounded-[5px] border-solid font-Barlow">
                                        01
                                    </a>
                                </li>

                                <li>
                                    <a href="#b" className="flex items-center justify-center px-4 py-3 border font-bold rounded-[5px] border-solid font-Barlow current bg-none border-green bg-green text-[#201f2a]">
                                        02
                                    </a>
                                </li>

                                <li>
                                    <a href="#b" className="flex items-center justify-center px-4 py-3 bg-[linear-gradient(0deg,#1215187d_0%,#1f29355c_100%)] bg-gray-950 border border-gray-700 text-[#adb0bc] font-bold rounded-[5px] border-solid font-Barlow">
                                        03
                                    </a>
                                </li>

                                <li>
                                    <a href="#b" className="flex items-center justify-center px-4 py-3 bg-[linear-gradient(0deg,#1215187d_0%,#1f29355c_100%)] bg-gray-950 border border-gray-700 text-[#adb0bc] font-bold rounded-[5px] border-solid font-Barlow">
                                        ....
                                    </a>
                                </li>

                                <li>
                                    <a href="#b" className="flex items-center justify-center px-4 py-3 bg-[linear-gradient(0deg,#1215187d_0%,#1f29355c_100%)] bg-gray-950 border border-gray-700 text-[#adb0bc] font-bold rounded-[5px] border-solid font-Barlow">
                                        →
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
}

export default PagesGamingShop;
