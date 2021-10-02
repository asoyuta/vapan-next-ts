type Props = {
  toggled: boolean
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void
}

const Toggle = ({ toggled, onClick }: Props) => {
  return (
    <div onClick={onClick} className={`toggle${toggled ? " on" : ""}`}>
      <div className="notch"/>
    </div>
  )
}

export default Toggle