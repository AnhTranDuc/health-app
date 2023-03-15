import BodyChart from './BodyChart'
import Diary from './Diary'
import Exercise from './Exercise'
import Recommend from './Recommend'

export default function RecordPage() {
  return (
    <div id="record-page" className="container mt-[56px] space-y-[56px]">
      <Recommend />
      <BodyChart />
      <Exercise />
      <Diary />
    </div>
  )
}
