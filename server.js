const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const req = require('express/lib/request')
const app = express() 

mongoose.connect('mongodb://localhost/blog', {useNewUrlParser: true, useUnifiedTopology: true})

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req,res) => {

    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test description',
    },
    {
        title: 'Test Article2',
        createdAt: new Date(),
        description: 'Test description2', 
    }]
    res.render('articles/index', {articles: articles})  
})

app.listen(5000)