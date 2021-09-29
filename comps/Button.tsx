type Props = {
  value: string
  onClick: (event: any) => void
  className?: string
}

const Button = ({ value, onClick, className }: Props) => {
  return (
    <button onClick={onClick} className={className}>
      {value}
    </button>
  )
}

export default Button
