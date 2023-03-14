export default function Category() {
  return (
    <div className="container flex items-center justify-evenly py-[24px]">
      {categories.map((item, i) => (
        <div
          className="hexagon bg-gradient-primary flex aspect-[1/1.15] w-[134px] cursor-pointer flex-col items-center justify-center"
          key={i}
        >
          <img className="w-[56px]" src={item?.icon} alt="" />
          <p className="text-[20px] text-white">{item?.label}</p>
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
