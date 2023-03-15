import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-[56px] flex min-h-[128px] items-center bg-[#414141]">
      <div className="container inline-flex flex-col flex-wrap items-start sm:flex-row sm:items-center">
        {menu.map((item, i) => (
          <Link to={item?.path} key={i} className="mr-[32px] block">
            <p className="font-noto font-light leading-loose text-white hover:underline">
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
