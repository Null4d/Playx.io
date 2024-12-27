import nft1 from '../img/nft/nft_img01.jpg';
import nft2 from '../img/nft/nft_img02.jpg';
import nft3 from '../img/nft/nft_img03.jpg';
import nftAvatar from '../img/nft/nft_avatar01.png';

function NftItems() {
  return (
    <>
      <section className="flex justify-center px-0 pt-24 pb-20 bg-customDark">
        <div className="flex flex-wrap justify-center w-full">
          <div className="relative px-4 w-4\/12 basis-4\/12 ">
            <div className="flex flex-col bg-[linear-gradient(0deg,#0c0e12_0%,rgba(31,41,53,0.36078)_100%)] items-end p-8 pr-8 mx-0 mt-0 mb-8 transition-all duration-150 border border-transparent sm:p-6 sm:pr-20 sm:flex-row rounded-8px rounded-xlbg-custom-gradient hover:border-emerald-800">
              <div className="mx-auto sm:mr-6 max-w-48">
                <a className="" href="#b">
                  <img className='rounded-lg' src={nft1} alt="nft1" />
                </a>
              </div>
              {/* Nft Img */}

              <div className="nft_item">
                <h4 className="mx-0 mt-2 mb-4 text-lg font-bold tracking-wider text-center text-white sm:text-lg sm:mt-0 title">
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

                <div className="flex items-center mr-0 sm:mr-minus-45px bg-custom-gradientTwo border border-gray-800 pl-5 pr-4 py-3.5 rounded-lg ">
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
            <div className="flex flex-col bg-[linear-gradient(0deg,#0c0e12_0%,rgba(31,41,53,0.36078)_100%)] items-end p-8 pr-8 mx-0 mt-0 mb-8 transition-all duration-150 border border-transparent sm:p-6 sm:pr-20 sm:flex-row rounded-8px rounded-xl  bg-custom-gradient hover:border-emerald-800">
              <div className="mx-auto sm:mr-6 max-w-48">
                <a className="" href="#b">
                  <img className='rounded-lg' src={nft2} alt="nft1" />
                </a>
              </div>
              {/* Nft Img */}

              <div className="">
                <h4 className="mx-0 mt-2 mb-4 text-lg font-bold tracking-wider text-center text-white sm:text-lg sm:mt-0 title">
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

                <div className="flex items-center mr-0 sm:mr-minus-45px bg-custom-gradientTwo border border-gray-800 pl-5 pr-4 py-3.5 rounded-lg ">
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
                {/* Nft Item */}
            </div>
          </div>
          {/* Nft Box */}

          <div className="relative px-4 w-4\/12 basis-4\/12">
            <div className="flex flex-col bg-[linear-gradient(0deg,#0c0e12_0%,rgba(31,41,53,0.36078)_100%)] items-end p-8 pr-8 mx-0 mt-0 mb-8 transition-all duration-150 border border-transparent sm:p-6 sm:pr-20 sm:flex-row rounded-8px rounded-xl bg-custom-gradient hover:border-emerald-800">
              <div className="mx-auto sm:mr-6 max-w-48">
                <a className="" href="#b">
                  <img className='rounded-lg' src={nft3} alt="nft1" />
                </a>
              </div>
              {/* Nft Img */}

              <div className="nft_item">
                <h4 className="mx-0 mt-2 mb-4 text-lg font-bold tracking-wider text-center text-white sm:text-lg sm:mt-0 title">
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

                <div className="flex items-center mr-0 sm:mr-minus-45px bg-custom-gradientTwo border border-gray-800 pl-5 pr-4 py-3.5 rounded-lg ">
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
