import breadcrumb from '../img/galerry/breadcrumb_img01.png';

function NftItems() {
  return (
    <>
      <section className="bg-[url('/src/img/bg/breadcrumb_bg01.jpg')] relative bg-center bg-cover min-h-[561px] flex items-center pt-[110px] pb-[75px] px-0">
        <div className="container mx-auto">
          <div className="relative px-20 py-0 breadcrumb__wrapper">
            <div className="flex flex-wrap mx-[-15px]">

              <div className="w-6/12 basis-6/12 relative px-[15px]">
                <div className="text-left breadcrumb__content">
                  <h2 className="title text-[60px] font-extrabold text-white tracking-[3px] leading-none m-0">ABOUT US</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="flex flex-wrap justify-start mx-0 mt-3 mb-0 list-none breadcrumb">
                      <li className="breadcrumb-item uppercase font-bold text-[14px] tracking-[2px] flex items-center after:content-[''] after:block after:w-2 after:h-2 after:transition-all after:duration-[0.3s] after:ease-[ease-out] after:delay-[0s] after:mx-2.5 after:my-0 after:rounded-[50%] text-green after:bg-green hover:after:bg-[#ffbe18]"><a className=" hover:text-[#ffbe18]" href="index.html">Home</a></li>
                      <li className="breadcrumb-item uppercase font-bold text-[14px] tracking-[2px] flex items-center after:content-[''] text-white" aria-current="page">ABOUT US</li>
                    </ol>
                  </nav>
                </div>
              </div>

              <div className="flex items-center justify-center w-6/12 basis-6/12">
                <div className="absolute">
                  <img className='' src={breadcrumb} alt="breadcrumb" />
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
