import express from 'express'
import DB_connection from './DB/connection.js'
import authorrouter from './src/modules/author/author.routes.js'
import bookrouter from './src/modules/book/book.routes.js'
import { globalresponseerror } from './src/middleware/global-res-error.js'
const app=express()

DB_connection()
app.use(express.json())
app.use('/book',bookrouter)
app.use('/author',authorrouter)

app.use(globalresponseerror)





app.listen(3000,()=>console.log("app listen on port 3000"))