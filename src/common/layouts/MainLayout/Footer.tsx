import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-[56px] bg-[#414141]">
      <div className="container flex h-[128px] items-center space-x-[32px]">
        {menu.map((item, i) => (
          <Link to={item?.path} key={i}>
            <p className="font-noto font-light text-white hover:underline">
              {item?.label}
            </p>
          </Link>
        ))}
      </div>
    </footer>
  )
}

const menu = [
  { label: '会員登録', path: '#' },
  { label: '運営会社', path: '#' },
  { label: '利用規約', path: '#' },
  { label: '個人情報の取扱について', path: '#' },
  { label: '特定商取引法に基づく表記', path: '#' },
  { label: 'お問い合わせ', path: '#' },
]
