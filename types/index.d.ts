export type Jpn = {
  fullDSD: string
  furiDSD: string
}

export type Eng = {
  free: string
  literal?: string
}

export type PersonInfo = {
  name: string
  src: string
}

export type LineInfo = {
  id: number
  personName: string
  jpn: Jpn
  eng: Eng
  desc?: string
}

export type ArticleData = {
  id: number
  title: string
  date: string
  url: string
  personInfoList: PersonInfo[]
  lineInfoList: LineInfo[]
}

export type Data = {
  articles: ArticleData[]
}