export default function Category() {
  return (
    <div className="container flex items-center justify-evenly space-x-2 py-[24px]">
      {categories.map((item, i) => (
        <div
          className="hexagon bg-gradient-primary flex aspect-[1/1.15] w-[134px] cursor-pointer flex-col items-center justify-center"
          key={i}
        >
          <img
            className="w-[24px] xs:w-[32px] sm:w-[56px]"
            src={item?.icon}
            alt=""
          />
          <p className="text-[12px] text-white xs:text-[14px] sm:text-[20px]">
            {item?.label}
          </p>
        </div>
      ))}
    </div>
  )
}

const categories = [
  {
    label: 'Morning',
    icon: '/assets/home-page/icon_knife.svg',
  },
  {
    label: 'Lunch',
    icon: '/assets/home-page/icon_knife.svg',
  },
  {
    label: 'Dinner',
    icon: '/assets/home-page/icon_knife.svg',
  },
  {
    label: 'Snack',
    icon: '/assets/home-page/icon_cup.svg',
  },
]
