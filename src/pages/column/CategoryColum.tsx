import React, {useEffect, useState} from 'react'

export default function CategoryColum() {
  const [items, setItems] = useState<(typeof categories)[0][]>([])
 
  const handleShowMore = () => {
    setItems((state) => [...state, ...categories])
  }

  useEffect(() => {
    setItems(categories)
  }, [])

  return (
    <div className='container mt-[56px] px-4'>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-y-6 sm:gap-4">
        {items.map((item, i) => (
          <div
            className="relative cursor-pointer overflow-hidden h-auto"
            key={i}
          >
            <div className='relative'>

            <img
              className="h-[144px] w-full object-cover transition-all duration-300 hover:scale-105 overflow-hidden"
              src={item.icon}
              alt=""
            />
            <div className="pointer-events-none absolute bottom-0 xs:w-[120px] w-full text-[13px] whitespace-nowrap bg-[#FFCC21] p-[8px] leading-none text-white">
              {item?.date} {item.time}
            </div>
            </div>
            <p className='text-[#414141] leading-[22px] mt-[7.5px] text-[11px] md:text-[15px] sm:text-[16px] xs:text-[14px]'>{item?.decription}</p>
            <p className='text-[#FF963C] leading-[22px] mb-4 text-[10px] md:text-[12px] sm:text-[15px] xs:text-[12px]'>{item?.title}</p>
          </div>
        ))}
        </div>
        {/* <ScrollToTop/> */}
      <button
        className="bg-gradient-primary mx-auto mt-[36px] block w-full max-w-[296px] rounded-md font-noto text-[18px] font-light leading-[56px] text-white xs:w-[50%]"
        onClick={handleShowMore}
      >
        コラムをもっと見る
      </button>
    </div>
  )
}

const categories = [
    {
        icon: '/assets/column-page/grid-item/icon-1.svg',
        decription: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        title: '#魚料理  #和食  #DHA',
        date: '2021.05.07',
        time: '23:25'
    },
    {
        icon: '/assets/column-page/grid-item/icon-2.svg',
        decription: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        title: '#魚料理  #和食  #DHA',
        date: '2021.05.07',
        time: '23:25'
    },
    {
        icon: '/assets/column-page/grid-item/icon-3.svg',
        decription: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        title: '#魚料理  #和食  #DHA',
        date: '2021.05.07',
        time: '23:25'
    },
    {
        icon: '/assets/column-page/grid-item/icon-4.svg',
        decription: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        title: '#魚料理  #和食  #DHA',
        date: '2021.05.07',
        time: '23:25'
    },
    {
        icon: '/assets/column-page/grid-item/icon-5.svg',
        decription: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        title: '#魚料理  #和食  #DHA',
        date: '2021.05.07',
        time: '23:25'
    },
    {
        icon: '/assets/column-page/grid-item/icon-6.svg',
        decription: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        title: '#魚料理  #和食  #DHA',
        date: '2021.05.07',
        time: '23:25'
    },
    {
        icon: '/assets/column-page/grid-item/icon-1.svg',
        decription: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        title: '#魚料理  #和食  #DHA',
        date: '2021.05.07',
        time: '23:25'
    },
    {
        icon: '/assets/column-page/grid-item/icon-1.svg',
        decription: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        title: '#魚料理  #和食  #DHA',
        date: '2021.05.07',
        time: '23:25'
    },
]
