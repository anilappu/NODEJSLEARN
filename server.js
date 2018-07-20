var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
var messages = [
    {name: 'Tim', message: 'Hi'},
    {name: 'Jane', message: 'Hello'}
]

app.get('/messages',(req,res)=>{
    res.send(messages)
})

app.post('/messages',(req,res)=>{
    messages.push(req.body)
    res.sendStatus(200)
})

app.use(express.static(__dirname))

var server = app.listen(3000,()=>{
    console.log('server is listening on port', server.address().port)
})
