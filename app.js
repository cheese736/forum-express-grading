const express = require('express')
const routes = require('./routes')
const handlebars = require('express-handlebars')

const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(routes)
app.engine('hbs', handlebars({ extname: '.hbs' }))
app.set('view engine', 'hbs')

app.listen(port, () => {
  console.info(`Example app listening on port ${port}!`)
})

module.exports = app
