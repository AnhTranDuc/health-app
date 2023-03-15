export default function Exercise() {
  return (
    <div className="bg-[#414141] p-[16px]">
      <div className="flex items-center text-white">
        <p className="w-[96px] text-[15px] leading-[1.15]">
          BODY
          <br />
          EXERCISE
        </p>
        <p className="text-[22px]">2021.05.21</p>
      </div>
      <div className="mt-[16px] h-[192px] overflow-y-auto">
        <div className="grid gap-y-[6px] md:grid-cols-2">
          {[...new Array(39)].map((item, i) => (
            <div
              className="mr-[18px] flex items-center justify-between border-b border-[#777777] sm:mr-[36px]"
              key={i}
            >
              <div className="relative pl-[16px]">
                <div className="absolute top-[8px] left-0 h-[5px] w-[5px] rounded-full bg-white" />
                <p className="font-noto text-[15px] font-light leading-normal text-white">
                  家事全般（立位・軽い）
                </p>
                <p className="text-[15px] leading-tight text-[#FFCC21]">
                  26kcal
                </p>
              </div>
              <div className="text-[18px] leading-tight text-[#FFCC21]">
                10 min
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
