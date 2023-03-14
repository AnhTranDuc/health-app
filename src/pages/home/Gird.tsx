import { useEffect, useState } from 'react'

export default function Gird() {
  const [items, setItems] = useState<(typeof categories)[0][]>([])

  const handleShowMore = () => {
    setItems((state) => [...state, ...categories])
  }

  useEffect(() => {
    setItems(categories)
  }, [])

  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-2">
        {items.map((item, i) => (
          <div
            className="relative aspect-square cursor-pointer overflow-hidden"
            key={i}
          >
            <img
              className="h-full w-full object-cover transition-all duration-300 hover:scale-105"
              src={item?.image}
              alt=""
            />
            <div className="pointer-events-none absolute bottom-0 left-0 min-w-[120px] whitespace-nowrap bg-[#FFCC21] p-[8px] leading-none text-white">
              {item?.day}.{item.session}
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
