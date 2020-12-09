const express = require('express')
const path=require('path')
const morgan=require('morgan')
const handlebars=require('express-handlebars')
const app = express()
const port=3000
//HTTP logger
app.use(morgan('combined'))
//template engine
app.engine('hbs',handlebars({
  extname:'.hbs'
}))
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'resources/views'))

app.get('/news', (req, res) => {
  res.render('news')
})
 
app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port,() => console.log(`Listening at http://localhost:${port}`))