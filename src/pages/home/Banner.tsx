export default function Banner() {
  return (
    <>
      <div className="flex flex-wrap bg-[#2E2E2E]">
        <div className="relative w-[45%]">
          <img
            className="h-full w-full"
            src="/assets/home-page/main_photo.png"
            alt=""
          />
          <div className="absolute top-1/2 left-1/2 w-[100px] -translate-x-1/2 -translate-y-1/2 sm:w-[200px]">
            <svg
              fill="none"
              viewBox="0 0 36 36"
              className="process circular-chart orange stroke-none"
            >
              <path
                className="circle stroke-white stroke-[0.8] shadow shadow-black"
                stroke-dasharray="75, 100"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
          </div>
          <div className="process-text absolute top-1/2 left-0 w-full -translate-y-1/2 text-center text-white">
            <span className="text-[12px] sm:text-[18px]">15/21 </span>
            <span className="text-[16px] sm:text-[25px]">75%</span>
          </div>
        </div>
        <div className="w-[55%] p-[16px]">
          <img
            className="mx-auto h-full max-w-full object-contain"
            src="/assets/home-page/main_graph.png"
            alt=""
          />
        </div>
      </div>
    </>
  )
}
