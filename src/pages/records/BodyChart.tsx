import { useState } from 'react'

enum StatisticType {
  Day,
  Week,
  Month,
  Year,
}

export default function BodyChart() {
  const [statisticType, setStatisticType] = useState(StatisticType.Year)

  return (
    <div className="bg-[#414141] p-[8px] sm:p-[16px]">
      <div className="flex items-center text-white">
        <p className="w-[96px] text-[15px] leading-[1.15]">
          BODY
          <br />
          RECORD
        </p>
        <p className="text-[22px]">2021.05.21</p>
      </div>
      <div className="py-[4px] sm:px-[24px]">
        <img className="w-full" src="/assets/record-page/chart.svg" alt="" />
      </div>
      <div className="flex flex-wrap space-x-4 font-noto font-light">
        {btnSelect.map((item, i) => (
          <div
            className={
              'w-[40px] cursor-pointer rounded-full text-center text-[15px] leading-[24px] transition-all sm:w-[56px]' +
              ` ${
                item.type === statisticType
                  ? 'bg-[#FFCC21] text-white'
                  : 'bg-white text-[#FFCC21]'
              }`
            }
            key={i}
            onClick={() => setStatisticType(item.type)}
          >
            {item?.label}
          </div>
        ))}
      </div>
    </div>
  )
}

const btnSelect = [
  {
    label: '日',
    type: StatisticType.Day,
  },
  {
    label: '週',
    type: StatisticType.Week,
  },
  {
    label: '月',
    type: StatisticType.Month,
  },
  {
    label: '年',
    type: StatisticType.Year,
  },
]
