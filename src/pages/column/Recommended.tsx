import React from 'react'

export default function Recommended() {
  return (
    <div className='container mt-[120px] grid grid-cols-2 md:flex gap-4'>
        {listRecommended.map((item, i) => (
        <div className='bg-[#2E2E2E] w-full md:w-[25%] flex flex-col items-center box-border' key={i}>
            <div className='w-[70%] text-center mt-[24px]'>
                <p className='text-[#FFCC21] text-[22px] font-normal font-inter'>{item.label}</p>
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
        label: 'RECOMMENDED COLUMN',
        summary: 'オススメ'
    },
    {
        label: 'RECOMMENDED DIET',
        summary: 'ダイエット'
    },
    {
        label: 'RECOMMENDED BEAUTY',
        summary: '美容'
    },
    {
        label: 'RECOMMENDED HEALTH',
        summary: '健康'
    },
]
    
