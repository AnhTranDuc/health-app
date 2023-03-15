import { useEffect, useState } from 'react'

export default function Diary() {
  const [items, setItems] = useState<(typeof categories)[0][]>([])

  const handleShowMore = () => {
    setItems((state) => [...state, ...categories])
  }

  useEffect(() => {
    setItems(categories)
  }, [])

  return (
    <div className="">
      <p className="text-[22px]">MY DIARY</p>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {items.map((item, i) => (
          <div
            className="aspect-square cursor-pointer overflow-hidden border border-[#707070] p-[8px] leading-[1.25] text-[#414141] sm:p-[12px] lg:p-[16px]"
            key={i}
          >
            <p className="lg:text-[18px]">2021.05.21</p>
            <p className="lg:text-[18px]">23:25</p>
            <div className="mt-[8px] font-noto text-[12px] font-light leading-[1.35] sm:mt-[16px] xl:text-[16px]">
              <p className="line-clamp-2">私の日記の記録が一部表示されます。</p>
              <p className="line-clamp-3 xs:line-clamp-5 md:line-clamp-4 lg:line-clamp-5">
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストストテキストテキストテキストテキストストテキストテキストテキストテキスト
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="bg-gradient-primary mx-auto mt-[36px] block w-full max-w-[296px] rounded-md font-noto text-[18px] font-light leading-[56px] text-white"
        onClick={handleShowMore}
      >
        記録をもっと見る
      </button>
    </div>
  )
}

const categories = [
  {
    day: '05.21',
    session: 'Morning',
    image: '/assets/home-page/grid-item/1.png',
  },
  {
    day: '05.21',
    session: 'Lunch',
    image: '/assets/home-page/grid-item/2.png',
  },
  {
    day: '05.21',
    session: 'Diner',
    image: '/assets/home-page/grid-item/3.png',
  },
  {
    day: '05.21',
    session: 'Snack',
    image: '/assets/home-page/grid-item/4.png',
  },
  {
    day: '05.20',
    session: 'Morning',
    image: '/assets/home-page/grid-item/1.png',
  },
  {
    day: '05.20',
    session: 'Lunch',
    image: '/assets/home-page/grid-item/6.png',
  },
  {
    day: '05.20',
    session: 'Diner',
    image: '/assets/home-page/grid-item/7.png',
  },
  {
    day: '05.20',
    session: 'Snack',
    image: '/assets/home-page/grid-item/8.png',
  },
]
