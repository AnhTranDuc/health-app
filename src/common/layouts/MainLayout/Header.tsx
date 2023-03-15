import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isOpenDrawer, setOpenDrawer] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)
  const toggleDrawerRef = useRef<HTMLDivElement>(null)

  useEffect(function () {
    function handleCloseDrawer(e: MouseEvent) {
      if (
        e.target !== drawerRef.current &&
        !drawerRef.current?.contains(e.target as Node) &&
        e.target !== toggleDrawerRef.current &&
        !toggleDrawerRef.current?.contains(e.target as Node)
      ) {
        setOpenDrawer(false)
      }
    }
    window.addEventListener('click', handleCloseDrawer)
    return () => {
      window.removeEventListener('click', handleCloseDrawer)
    }
  }, [])

  return (
    <>
      <header className="fixed z-50 w-full bg-[#414141] font-noto font-light leading-none text-white">
        <div className="container flex h-[64px] items-center justify-between">
          <Link to="/">
            <img
              className="h-[48px] pt-[8px]"
              src="/assets/main-layout/logo.svg"
              alt=""
            />
          </Link>
          <div>
            {menuHeader.map((item, i) => (
              <Link
                to={item?.path}
                className="float-left hidden w-[140px] items-center transition-all hover:text-[#FF963C] sm:flex md:w-[160px]"
                key={i}
              >
                <img className="m-[8px] w-[32px]" src={item?.icon} alt="" />
                <p>{item?.label}</p>
              </Link>
            ))}
            <div
              ref={toggleDrawerRef}
              className="float-left ml-[32px] cursor-pointer lg:ml-[80px]"
              onClick={() => setOpenDrawer(!isOpenDrawer)}
            >
              <img
                className="m-[8px] w-[32px]"
                src={
                  !isOpenDrawer
                    ? '/assets/main-layout/icon_menu.svg'
                    : '/assets/main-layout/icon_close.svg'
                }
                alt=""
              />
            </div>
          </div>
        </div>
      </header>
      <div
        ref={drawerRef}
        className={
          'fixed top-[64px] right-0 z-50 w-[280px] font-noto font-light text-white transition-all' +
          ` ${isOpenDrawer ? '' : ' translate-x-full'}`
        }
      >
        <div className="bg-[#777777]">
          {menuDrawer.map((item, i) => (
            <Link
              className="block border-t-[0.5px] border-b border-t-white border-b-[#2E2E2E] border-opacity-20 px-[28px] text-[18px] leading-[72px] transition-all hover:bg-[#666666] hover:text-[#FF963C]"
              to={item.path}
              key={i}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="h-[64px]"></div>
    </>
  )
}

export default Header

const menuHeader = [
  {
    label: '自分の記録',
    path: '/record',
    icon: '/assets/main-layout/icon_memo.svg',
  },
  {
    label: 'チャレンジ',
    path: '#',
    icon: '/assets/main-layout/icon_challenge.svg',
  },
  {
    label: 'お知らせ',
    path: '#',
    icon: '/assets/main-layout/icon_info.svg',
  },
]

const menuDrawer = [
  {
    label: '自分の記録',
    path: '/',
  },
  {
    label: '体重グラフ',
    path: '#',
  },
  {
    label: '目標',
    path: '#',
  },
  {
    label: '選択中のコース',
    path: '#',
  },
  {
    label: 'コラム一覧',
    path: '/column',
  },
  {
    label: '設定',
    path: '#',
  },
]
