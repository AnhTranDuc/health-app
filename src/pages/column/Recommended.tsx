import React from 'react'

export default function Recommended() {
  return (
    <div className='container px-4 mt-[120px] grid grid-cols-2 md:flex gap-4'>
        {listRecommended.map((item, i) => (
        <div className='bg-[#2E2E2E] flex flex-col items-center box-border w-full md:w-[25%] xl:px-8' key={i}>
            <div className='md:w-full mt-[24px] xs:w-auto box-border sm:w-[50%] xs:[]'>
                <p className='text-[#FFCC21] font-normal font-inter text-center text-[15px] lg:text-[22px] md:text-[18px] xs:text-[17px] sm:text-[20px] '>RECOMMENDED<br/>{item.label}</p>
            </div>
            <div className='w-[56px] border border-solid mt-[10px]'></div>
            <div className='mt-[8px] mb-[12px]'>
                <p className='text-[#FFFFFF]'>{item.summary}</p>
            </div>
        </div>
        ))}
    </div>
  )
}

const listRecommended = [
    {
        label: 'COLUMN',
        summary: 'オススメ'
    },
    {
        label: 'DIET',
        summary: 'ダイエット'
    },
    {
        label: 'BEAUTY',
        summary: '美容'
    },
    {
        label: 'HEALTH',
        summary: '健康'
    },
]
    
