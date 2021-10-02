import * as functions from 'firebase-functions'
import * as express from 'express'
import { addEntry, deleteEntry, getEntry, getAllEntries, updateEntry } from './entryController'
import { addArticle, getAllArticles, getArticle, updateArticle, deleteArticle } from './articleController'

const app = express()

app.get('/', (req, res) => res.status(200).send('Hey there!'))

app.post('/entries', addEntry)
app.get('/entries', getAllEntries)
app.get('/entries/:entryId', getEntry)
app.patch('/entries/:entryId', updateEntry)
app.delete('/entries/:entryId', deleteEntry)

app.post('/articles', addArticle)
app.get('/articles', getAllArticles)
app.get('/articles/:articleId', getArticle)
app.patch('/articles/:articleId', updateArticle)
app.delete('/articles/:articleId', deleteArticle)

exports.app = functions.https.onRequest(app)
