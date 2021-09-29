import { GetStaticPaths, GetStaticProps } from 'next'
import { ArticleData } from '../../types/index.d'
import { Dialogue, Title } from '../../comps/index'

type Props = {
  article: ArticleData
}

const Details = ({ article }: Props) => {
  if (article) {
    const { personInfoList } = article

    for (let i = 0; i < personInfoList.length; i++) {
      personInfoList[i].src = require(`../../public/img/livers/${personInfoList[i].name}.png`).default
    }
  }

  return (
    <div className="article">
      <Title title={article.title} />
      <Dialogue
        date={article.date}
        url={article.url}
        lineInfoList={article.lineInfoList}
        personInfoList={article.personInfoList}
      />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:8000/articles')
  const articles: ArticleData[] = await res.json()

  const paths = articles.map((article) => `/articles/${article.id}`)

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const res = await fetch(`http://localhost:8000/articles/${params!.id}`)
  const article: ArticleData = await res.json()

  return {
    props: { article },
  }
}

export default Details
