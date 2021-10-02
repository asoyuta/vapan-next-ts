import { GetStaticPaths, GetStaticProps } from 'next'
import { ArticleData } from '../../types'
import { Dialogue, Title } from '../../comps/index'

type Props = {
  article: ArticleData
}

const Details = ({ article }: Props) => {
  if (article) {
    const { personInfoList } = article

    for (let i = 0; i < personInfoList.length; i++) {
      personInfoList[i].src = require(`../../../public/livers/${personInfoList[i].name}.png`).default
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
  const res = await fetch('https://us-central1-vapan-next-ts.cloudfunctions.net/app/articles')
  const articles: ArticleData[] = await res.json()

  const paths = articles.map((article) => `/articles/${article.id}`)

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const res = await fetch(`https://us-central1-vapan-next-ts.cloudfunctions.net/app/articles/${params!.id}`)
  const article: ArticleData = await res.json()

  return {
    props: { article },
  }
}

export default Details
