type Props = {
  title: string
}

const Title = ({ title }: Props) => {
  return <h1 className="title">{title}</h1>
}

export default Title
