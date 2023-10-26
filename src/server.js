import express from 'express'
import sql from 'sqlite3'

const sqlite3 = sql.verbose()

// Create an in memory table to use
const db = new sqlite3.Database(':memory:')

const app = express()
app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'pug')
app.use(express.urlencoded({ extended: false }))

app.get('/', function (req, res) {
  //TODO You will need to load your tasks from the data base here
  console.log('GET called')
  res.render('index')
})

// Start the web server
app.listen(3000, function () {
  console.log('Listening on port 3000...')
})
