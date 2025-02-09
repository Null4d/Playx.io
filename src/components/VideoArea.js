
function VideoArea() {

  return (
    <>
      <section className="w-full py-60 relative h-full bg-fixed bg-cover bg-center bg-[url('/src/img/bg/video_bg.jpg')] 
            before:content-[''] before:absolute before:w-full before:h-full before:opacity-[0.2] before:z-1 before:left-0 before:top-0 before:bg-[#1b242e]
            after:content-[''] after:absolute after:w-full after:h-full after:bg-[url(./img/others/video_overlay.png)] after:bg-center after:bg-cover after:opacity-[0.38] after:z-2 after:left-0 after:top-0 
            ">
        <div className="relative text-center drop-shadow-2xl z-3">
          <h3 className="pb-4 text-4xl font-bold text-white md:text-5xl">
            JOIN THE <span className="text-green">COMMUNITY</span>
          </h3>
          <p className="pb-6 text-lg font-semibold text-white">
            Join our Discord community and choosec onsteur
          </p>

          <a className="tg-btn-1 group/greenBtn text-white px-12 py-4 relative z-1 inline-flex min-w-195px justify-center overflow-hidden px-49px py-0-875 text-center text-sm font-extrabold uppercase tracking-wide 
                  before:absolute before:left-0 before:top-2/4 before:z-1 before:h-[calc(100%+6px)] before:w-30px before:-translate-y-2/4 before:bg-white-arrow before:bg-cover before:bg-center before:bg-no-repeat 
                  after:absolute after:right-0 after:top-2/4 after:z-1 after:h-[calc(100%+6px)] after:w-30px after:-translate-y-2/4 after:bg-white-arrow after:bg-cover after:bg-center after:bg-no-repeat after:rotate-[180deg]
                  "href="#b">
            <p className="text-black after:z-minus-1 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:border-t-2 after:border-b-2 after:border-solid after:border-y-white 
                    after:bg-green after:transition-all after:delay-0 after:duration-150 after:ease-out after:[clip-path:polygon(28px_0,calc(85%+2px)_0,100%_50%,calc(85%+1px)_100%,28px_100%,0%_50%)] after:group-hover/greenBtn:bg-green">
              JOIN DISCORD
            </p>
          </a>
        </div>
      </section>
    </>
  );
}

export default VideoArea;
