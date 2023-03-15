import React, {useEffect, useState} from 'react'

export default function CategoryColum() {
  const [items, setItems] = useState<(typeof categories)[0][]>([])
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  const handleShowMore = () => {
    setItems((state) => [...state, ...categories])
  }

  useEffect(() => {
    setItems(categories)
  }, [])

  return (
    <div className='container mt-[56px]'>
        <div className="grid grid-cols-4 gap-2">
        {items.map((item, i) => (
          <div
            className="relative aspect-square cursor-pointer overflow-hidden"
            key={i}
          >
            <img
              className="h-[144px] w-full object-cover transition-all duration-300 hover:scale-105"
              src={item.icon}
              alt=""
            />
            <p className='text-[#414141] leading-[22px] mt-[7.5px] font-[15px]'>{item?.decription}</p>
            <p className='text-[#FF963C] leading-[22px] text-[12px]'>{item?.title}</p>
            <div className="pointer-events-none absolute top-[112px] min-w-[120px] whitespace-nowrap bg-[#FFCC21] p-[8px] leading-none text-white">
              {item?.date} {item.time}
            </div>
          </div>
        ))}
        </div>
        <div className='fixed right-[8%] bottom-[48%] border-[#777777] rounded-full border w-[40px] h-[40px] justify-center items-center hidden cursor-pointer transition-all ease-out duration-1000'
          onClick={scrollToTop}
          style={{display: visible ? 'flex' : 'none'}}
        >
            <img
              className='w-[20px]'
              src='/assets/column-page/grid-item/icon-arrow.svg'
              alt=""
            />
        </div>
      <button
        className="bg-gradient-primary mx-auto mt-[36px] block w-full max-w-[296px] rounded-md font-noto text-[18px] font-light leading-[56px] text-white"
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
