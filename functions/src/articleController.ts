import { Response } from 'express'
import { db } from './config/firebase'

type ArticleData = {
  title: string
  date: string
  url: string
  personInfoList: {
    name: string
    src: string
  }
  lineInfoList: {
    id: number
    personName: string
    jpn: {
      fullDSD: string
      furiDSD: string
    }
    eng: {
      free: string
      literal: string
    }
    desc: string
  }
}

type Request = {
  body: ArticleData
  params: { articleId: string }
}

const addArticle = async (req: Request, res: Response) => {
  const { title, date, url, personInfoList, lineInfoList } = req.body
  const {
    params: { articleId },
  } = req
  try {
    const article = db.collection('articles').doc(articleId)
    const articleObject = {
      id: article.id,
      title,
      date,
      url,
      personInfoList,
      lineInfoList,
    }

    article.set(articleObject)

    res.status(200).send({
      status: 'success',
      message: 'article added successfully',
      data: articleObject,
    })
  } catch (error) {
    res.status(500).json(error)
  }
}

const getAllArticles = async (req: Request, res: Response) => {
  try {
    const allArticles: ArticleData[] = []
    const querySnapshot = await db.collection('articles').get()
    querySnapshot.forEach((doc: any) => allArticles.push(doc.data()))

    return res.status(200).json(allArticles)
  } catch (error) {
    return res.status(500).json(error)
  }
}

const getArticle = async (req: Request, res: Response) => {
  const {
    params: { articleId },
  } = req
  try {
    const article = (await db.collection('articles').doc(articleId).get()).data()

    return res.status(200).json(article)
  } catch (error) {
    return res.status(500).json(error)
  }
}

const updateArticle = async (req: Request, res: Response) => {
  const {
    body: { title, date, url, personInfoList, lineInfoList },
    params: { articleId },
  } = req

  try {
    const article = db.collection('articles').doc(articleId)
    const currentData = (await article.get()).data() || {}

    const articleObject = {
      title: title || currentData.title,
      date: date || currentData.date,
      url: url || currentData.url,
      personInfoList: personInfoList || currentData.personInfoList,
      lineInfoList: lineInfoList || currentData.lineInfoList,
    }

    await article.set(articleObject)

    return res.status(200).json({
      status: 'success',
      message: 'article updated successfully',
      data: articleObject,
    })
  } catch (error) {
    return res.status(500).json(error)
  }
}

const deleteArticle = async (req: Request, res: Response) => {
  const { articleId } = req.params

  try {
    const article = db.collection('article').doc(articleId)

    await article.delete()

    return res.status(200).json({
      status: 'success',
      message: 'article updated successfully',
    })
  } catch (error) {
    return res.status(500).json(error)
  }
}

export { addArticle, getAllArticles, getArticle, updateArticle, deleteArticle }
