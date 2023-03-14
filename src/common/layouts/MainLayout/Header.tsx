import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className="fixed z-50 w-full bg-[#414141] font-noto font-light leading-none text-white">
        <div className="container flex h-[64px] items-center justify-between">
          <img
            className="h-[48px] pt-[8px]"
            src="/assets/main-layout/logo.svg"
            alt=""
          />
          <div>
            {menu.map((item, i) => (
              <Link
                to={item?.path}
                className="float-left flex w-[160px] items-center"
                key={i}
              >
                <img className="m-[8px] w-[32px]" src={item?.icon} alt="" />
                <p>{item?.label}</p>
              </Link>
            ))}
            <div className="float-left ml-[80px]">
              <img
                className="m-[8px] w-[32px]"
                src="/assets/main-layout/icon_menu.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </header>
      <div className="fixed"></div>
      <div className="h-[64px]"></div>
    </>
  )
}

export default Header

const menu = [
  {
    label: '自分の記録',
    path: '#',
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
