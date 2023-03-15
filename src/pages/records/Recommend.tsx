export default function Recommend() {
  return (
    <div className="flex flex-wrap justify-center space-y-4 sm:flex-nowrap sm:justify-between sm:space-y-0 sm:space-x-4">
      {recommends.map((item, i) => (
        <div
          className="relative w-full max-w-[288px] border-[22px] border-[#FFCC21] bg-[#2E2E2E] sm:w-[33%]"
          key={i}
        >
          <div
            className="absolute inset-0 z-0 grayscale"
            style={{
              backgroundImage: `url(${item?.image})`,
            }}
          ></div>
          <div className="relative flex aspect-square flex-col items-center justify-center">
            <img src="" alt="" />
            <div className="text-center text-[25px] leading-[30px] text-[#FFCC21]">
              {item?.title}
            </div>
            <div className="mt-[8px] w-full max-w-[160px] bg-[#FF963C] text-center font-noto text-[14px] font-light leading-[24px] text-white opacity-100">
              {item?.text}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const recommends = [
  {
    title: 'BODY RECORD',
    text: '自分のカラダの記録',
    image: '/assets/record-page/MyRecommend-1.png',
  },
  {
    title: 'MY EXERCISE',
    text: '自分の運動の記録',
    image: '/assets/record-page/MyRecommend-2.png',
  },
  {
    title: 'MY DIARY',
    text: '自分の日記',
    image: '/assets/record-page/MyRecommend-3.png',
  },
]
