import express from 'express'
import { login } from './controllers/user'

const app = express()

const port = 3000

app.get('/', (req: any, res: any) => {
  res.send('hello world')
})

app.get('/login', login)

app.listen(port, () => {
  console.log('started')
})