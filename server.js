import express from 'express'
import path from 'path'
import { getAllNovels, getNovelByIdOrTitle } from './controllers/novels'
import { getAllAuthors, getAuthorByIdOrName } from './controllers/authors'

const app = express()

app.use(express.static('public'))

app.get('/api/authors', getAllAuthors)
app.get('/api/authors/:id', getAuthorByIdOrName)

app.get('/api/novels', getAllNovels)
app.get('/api/novels/:id', getNovelByIdOrTitle)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(1974, () => {
  console.log('Listening to 1974') // eslint-disable-line no-console
})
