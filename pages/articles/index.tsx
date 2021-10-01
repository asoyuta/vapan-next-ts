import Link from 'next/link'
import firebase from '../../firebase/clientApp'
import { useCollection } from 'react-firebase-hooks/firestore'

const Articles = () => {
  const db = firebase.firestore()

  const [value, loading, error] = useCollection(db.collection('articles'), {})

  const articles: any[] = []
  if (!loading && value) {
    value.docs.map(
      (doc) => {
        articles.push(doc.data())
      }
    )
  }

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

// export const getStaticProps: GetStaticProps<Data> = async () => {
//   const res = await fetch('http://localhost:8000/articles')
//   const articles = await res.json()

//   return {
//     props: { articles },
//   }
// }

export default Articles
