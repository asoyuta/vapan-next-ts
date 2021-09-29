// import styles from '../../styles/Articles.module.css'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { Data } from '../../types/index.d'

const Articles = ({ articles }: Data) => {
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
  const res = await fetch('http://localhost:8000/articles')
  const articles = await res.json()

  return {
    props: { articles },
  }
}

export default Articles
