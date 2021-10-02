import { Button, Furigana } from './index'
import { LineInfo } from '../types'
import { useState } from 'react'

type Props = {
  lineInfo: LineInfo
  furiOn: boolean
  tranOn: boolean
}

const SpeechBubble = ({ lineInfo, furiOn, tranOn }: Props) => {
  const [show, setShow] = useState(false)

  const toggle = () => {
    setShow((prevState) => !prevState)
  }

  const descList = lineInfo.desc?.split('\n')

  return (
    <div className="speech-bubble">
      <div className="bubble-content">
        <div className="jpn-line">
          <Furigana fullDSD={lineInfo.jpn.fullDSD} furiDSD={lineInfo.jpn.furiDSD} furiOn={furiOn} />
        </div>
        {tranOn ? <p className="eng-line">{lineInfo.eng.free}</p> : null}
        {lineInfo.desc || lineInfo.eng.literal ? (
          <Button value={show ? 'Close details' : 'Open details'} onClick={toggle} className="detail-button" />
        ) : null}
        {show ? (
          <div className="detail">
            {lineInfo.eng.literal ? (
              <div className="literal">
                <p className="literal-text">{lineInfo.eng.literal}</p>
              </div>
            ) : null}
            {lineInfo.desc ? (
              <div className="desc">
                <div className="desc-text">
                  {descList?.map((paragraph) => (
                    <p>{paragraph}</p>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default SpeechBubble
