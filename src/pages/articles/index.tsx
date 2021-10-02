import Link from 'next/link'
import { Data } from '../../types'
import { GetStaticProps } from 'next'

const Articles = ({articles}: Data) => {

  return (
    <div>
      <h1>All Articles</h1>
      {articles.map((article) => (
        <Link href={`/articles/${article.id}`} key={article.id}>
          <a>
            <h2>{article.title}</h2>
          </a>
        </Link>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps<Data> = async () => {
  const res = await fetch('https://us-central1-vapan-next-ts.cloudfunctions.net/app/articles')
  const articles = await res.json()

  return {
    props: { articles },
  }
}

export default Articles
