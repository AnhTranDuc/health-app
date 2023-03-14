export default function Banner() {
  return (
    <>
      <div className="flex flex-wrap bg-[#2E2E2E]">
        <div className="w-[45%]">
          <img
            className="h-full w-full"
            src="/assets/home-page/main_photo.png"
            alt=""
          />
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
