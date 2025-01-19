import breadcrumb from '../img/galerry/breadcrumb_img01.png';

function NftItems() {
  return (
    <>
      <section className="bg-[url('/src/img/bg/breadcrumb_bg01.jpg')] relative bg-center bg-cover min-h-[561px] flex items-center pt-28 pb-20 px-0">
        <div className="container mx-auto">
          <div className="relative px-0 py-0 lm:px-20 breadcrumb__wrapper">
            <div className="flex flex-col md:flex-row flex-wrap mx-[-15px]">

              <div className="relative w-full px-4 basis-full lm:w-6/12 lm:basis-6/12">
                <div className="text-center lm:text-left">
                  <h2 className="title text-6xl font-extrabold text-white tracking-[3px] leading-none m-0">
                    ABOUT US
                  </h2>
                  <nav aria-label="breadcrumb" className="w-full mt-3">
                    <ol className="flex flex-wrap justify-center w-full mx-auto mb-0 list-none lm:justify-start breadcrumb">
                      <li className="breadcrumb-item uppercase font-bold text-sm tracking-wider flex items-center after:content-[''] after:block after:w-2 after:h-2 after:transition-all after:duration-[0.3s] after:ease-[ease-out] after:delay-[0s] after:mx-2.5 after:my-0 after:rounded-[50%] text-green after:bg-green hover:after:bg-[#ffbe18]">
                        <a className="hover:text-[#ffbe18]" href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item uppercase font-bold text-sm tracking-wider flex items-center after:content-[''] text-white" aria-current="page">
                        ABOUT US
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>

              <div className="items-center justify-center flex-none hidden w-6/12 lm:flex basis-6/12">
                <div className="absolute">
                  <img className='shake' src={breadcrumb} alt="breadcrumb" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NftItems;
