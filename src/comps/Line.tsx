import { SpeechBubble } from './index'
import { PersonInfo, LineInfo } from '../types'
import Image from 'next/image'

type Props = {
  personInfo: PersonInfo
  lineInfo: LineInfo
  furiOn: boolean
  tranOn: boolean
  firstPerson: string
}

const Line = ({ personInfo, lineInfo, furiOn, tranOn, firstPerson }: Props) => {
  return (
    <div
      className={`line ${
        firstPerson === personInfo.name ? 'line-first' : personInfo.name !== 'THIRD' ? 'line-second' : 'line-third'
      }`}
    >
      <div className="img">
        <Image src={personInfo.src} alt="icon" />
      </div>
      <SpeechBubble lineInfo={lineInfo} furiOn={furiOn} tranOn={tranOn} />
    </div>
  )
}

export default Line
