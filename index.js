const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('tiny'))

app.get('/gs', (req, res) => {
    res.header("Content-Type",'application/json');
    res.json({ 
            name: 'Mehmet Şirin Usanmaz',
            champion : 'Şampiyon Galatasaray'
        })
})

app.listen('1905')