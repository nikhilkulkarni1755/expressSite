const express = require('express')

const app = express()

//or pug
app.set('view engine', 'ejs')



//app.get, app.post etc

app.get('/', (req, res) => {
    //console.log('in root')
    res.render('index', {text: 'World'})
    //res.render('index')
    //res.render('index')
    //res.download('path/to/file')
    //res.sendStatus(500).send({message: "Error"})
    //res.sendStatus(500).send("Hello")
    //res.sendStatus(500) error
    //generic
    //res.send('Hello World!')
}) //next can be third param

app.get('/users', (req, res) => {

})

app.get('/users/new', (req, res) => {

})

app.listen(3000)

