import { Line, Toggle, Button } from './index'
import { PersonInfo, LineInfo } from '../types/index'
import { useState } from 'react'

type Props = {
  date: string
  url: string
  personInfoList: PersonInfo[]
  lineInfoList: LineInfo[]
}

const Dialogue = ({ date, url, personInfoList, lineInfoList }: Props) => {
  const [furiOn, setFuriOn] = useState(true)
  const [tranOn, setTranOn] = useState(true)
  const [firstPersonId, setFirstPersonId] = useState(0)

  const handleClickFuri = () => {
    setFuriOn((prevState) => !prevState)
  }
  const handleClickTran = () => {
    setTranOn((prevState) => !prevState)
  }
  const handleClickFirstPersonId = () => {
    setFirstPersonId((prevState) => (prevState + 1) % personInfoList.length)
  }

  return (
    <div className="dialogue">
      <div className="settings">
        <div className="furi-tran">
          <p>Furigana</p>
          <Toggle toggled={furiOn} onClick={handleClickFuri} />
        </div>
        <div className="furi-tran">
          <p>Translation</p>
          <Toggle toggled={tranOn} onClick={handleClickTran} />
        </div>
        <div className="person">
          <p>First Person</p>
          <Button
            value={personInfoList[firstPersonId].name}
            onClick={handleClickFirstPersonId}
            className="person-button"
          />
        </div>
      </div>
      <div className="display">
        <div className="date">
          <a href={url}>
            <div className="date-box">
              <p>{date.split('T')[0].replace(/-/g, '/')}</p>
            </div>
          </a>
        </div>
        {lineInfoList.map((lineInfo) => (
          <>
            {personInfoList.map(
              (personInfo) =>
                personInfo.name === lineInfo.personName && (
                  <Line
                    personInfo={personInfo}
                    lineInfo={lineInfo}
                    furiOn={furiOn}
                    tranOn={tranOn}
                    firstPerson={personInfoList[firstPersonId].name}
                    key={lineInfo.id}
                  />
                ),
            )}
          </>
        ))}
      </div>
    </div>
  )
}

export default Dialogue