var fs = require('fs')
var data = require('./data.json')



console.log(data.name);


fs.readFile('./data.json','utf-8',(err,data) =>{
   var data1= JSON.parse(data)
    console.log(data1.name)
})

var testData = {
    name: 'Tester'
}

fs.writeFile('data.json',JSON.stringify(testData),(err,data) =>{
    console.log('write finished', err)
})   