import "./style.css";
import nft1 from '../img/nft/nft_img01.jpg';
import nft2 from '../img/nft/nft_img02.jpg';
import nft3 from '../img/nft/nft_img03.jpg';
import nftAvatar from '../img/nft/nft_avatar01.png';

function NftItems() {
  return (
    <>
      <section className="px-0 pt-24 pb-20 bg-customDark">
        <div className="flex flex-wrap justify-center mx-minus-15px">
          <div className="relative px-4 w-4\/12 basis-4\/12">
            <div className="flex items-end p-6 pr-20 mx-0 mt-0 mb-8 transition-all duration-150 border border-transparent rounded-xl bg-slate-900 bg-custom-gradient hover:border-emerald-800">
              <div className="mr-6 max-w-48">
                <a className="" href="#b">
                  <img className='rounded-lg' src={nft1} alt="nft1" />
                </a>
              </div>
              {/* Nft Img */}

              <div className="nft_item">
                <h4 className="mx-0 mt-0 mb-4 text-xl font-bold tracking-wider text-white title">
                  <a className="" href="#b">WOLF GAMING ART</a>
                </h4>
                {/* Nft Title */}

                <div className="flex items-center mx-0 mt-0 mb-5">
                  <div className="avatar-img flex-[0_0_auto] ml-0 mr-2.5 my-0">
                    <a className="" href="#b">
                      <img className='rounded-[50%]' src={nftAvatar} alt="nftAvatar" />
                    </a>
                  </div>

                  <div className="flex items-center ">
                    <h5 className="m-0 text-lg font-semibold text-gray-500 capitalize name">
                      <a className="" href="#b">Alax Max</a>
                    </h5>

                    <p className="designation text-xs font-bold uppercase text-gray-500 before:content-['|'] before:inline-block before:text-xs before:font-medium before:text-gray-700 before:pl-2.5 before:pr-2 before:py-0">
                      Creator
                    </p>
                  </div>
                </div>
                {/* Nft Mini Avatar */}

                <div className="flex items-center mr-minus-45px bg-custom-gradientTwo border border-gray-800 pl-5 pr-4 py-3.5 rounded-lg ">
                  <p className="m-0 text-base font-semibold text-slate-100 font-Barlow">
                    1.002
                    <span className="ml-1 text-lg font-bold uppercase currency text-amber-400">
                      ETH
                    </span>
                  </p>

                  <a className="bid-btn flex items-center gap-x-2.5 text-slate-900 capitalize font-semibold text-lg leading-none ml-auto px-3.5 py-3 rounded-md font-Barlow bg-amber-400 hover:bg-green" href="#b">
                    Bid
                  </a>
                </div>
                {/* Nft Button */}
              </div>


            </div>
          </div>
          {/* Nft Box */}

          <div className="relative px-4 w-4\/12 basis-4\/12">
            <div className="flex items-end p-6 pr-20 mx-0 mt-0 mb-8 transition-all duration-150 border border-transparent rounded-xl bg-slate-900 bg-custom-gradient hover:border-emerald-800">
              <div className="mr-6 max-w-48">
                <a className="" href="#b">
                  <img className='rounded-lg' src={nft2} alt="nft1" />
                </a>
              </div>
              {/* Nft Img */}

              <div className="nft_item">
                <h4 className="mx-0 mt-0 mb-4 text-xl font-bold tracking-wider text-white title">
                  <a className="" href="#b">FOREST PRINCESS</a>
                </h4>
                {/* Nft Title */}

                <div className="flex items-center mx-0 mt-0 mb-5">
                  <div className="avatar-img flex-[0_0_auto] ml-0 mr-2.5 my-0">
                    <a className="" href="#b">
                      <img className='rounded-[50%]' src={nftAvatar} alt="nftAvatar" />
                    </a>
                  </div>

                  <div className="flex items-center ">
                    <h5 className="m-0 text-lg font-semibold text-gray-500 capitalize name">
                      <a className="" href="#b">Alax Max</a>
                    </h5>

                    <p className="designation text-xs font-bold uppercase text-gray-500 before:content-['|'] before:inline-block before:text-xs before:font-medium before:text-gray-700 before:pl-2.5 before:pr-2 before:py-0">
                      Creator
                    </p>
                  </div>
                </div>
                {/* Nft Mini Avatar */}

                <div className="flex items-center mr-minus-45px bg-custom-gradientTwo border border-gray-800 pl-5 pr-4 py-3.5 rounded-lg ">
                  <p className="m-0 text-base font-semibold text-slate-100 font-Barlow">
                    1.053
                    <span className="ml-1 text-lg font-bold uppercase currency text-amber-400">
                      ETH
                    </span>
                  </p>

                  <a className="bid-btn flex items-center gap-x-2.5 text-slate-900 capitalize font-semibold text-lg leading-none ml-auto px-3.5 py-3 rounded-md duration-150 font-Barlow bg-amber-400 hover:bg-green" href="#b">
                    Bid
                  </a>
                </div>
                {/* Nft Button */}
              </div>


            </div>
          </div>
          {/* Nft Box */}

          <div className="relative px-4 w-4\/12 basis-4\/12">
            <div className="flex items-end p-6 pr-20 mx-0 mt-0 mb-8 transition-all duration-150 border border-transparent rounded-xl bg-slate-900 bg-custom-gradient hover:border-emerald-800">
              <div className="mr-6 max-w-48">
                <a className="" href="#b">
                  <img className='rounded-lg' src={nft3} alt="nft1" />
                </a>
              </div>
              {/* Nft Img */}

              <div className="nft_item">
                <h4 className="mx-0 mt-0 mb-4 text-xl font-bold tracking-wider text-white title">
                  <a className="" href="#b">GIRL FIREFLY ART</a>
                </h4>
                {/* Nft Title */}

                <div className="flex items-center mx-0 mt-0 mb-5">
                  <div className="avatar-img flex-[0_0_auto] ml-0 mr-2.5 my-0">
                    <a className="" href="#b">
                      <img className='rounded-[50%]' src={nftAvatar} alt="nftAvatar" />
                    </a>
                  </div>

                  <div className="flex items-center ">
                    <h5 className="m-0 text-lg font-semibold text-gray-500 capitalize name">
                      <a className="" href="#b">Alax Max</a>
                    </h5>

                    <p className="designation text-xs font-bold uppercase text-gray-500 before:content-['|'] before:inline-block before:text-xs before:font-medium before:text-gray-700 before:pl-2.5 before:pr-2 before:py-0">
                      Creator
                    </p>
                  </div>
                </div>
                {/* Nft Mini Avatar */}

                <div className="flex items-center mr-minus-45px bg-custom-gradientTwo border border-gray-800 pl-5 pr-4 py-3.5 rounded-lg ">
                  <p className="m-0 text-base font-semibold text-slate-100 font-Barlow">
                    1.024
                    <span className="ml-1 text-lg font-bold uppercase currency text-amber-400">
                      ETH
                    </span>
                  </p>

                  <a className="bid-btn flex items-center gap-x-2.5 text-slate-900 capitalize font-semibold text-lg leading-none ml-auto px-3.5 py-3 rounded-md duration-150 font-Barlow bg-amber-400 hover:bg-green" href="#b">
                    Bid
                  </a>
                </div>
                {/* Nft Button */}
              </div>


            </div>
          </div>
          {/* Nft Box */}
        </div>
      </section>
    </>
  );
}

export default NftItems;
