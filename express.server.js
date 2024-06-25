const express = require('express')
const port = 9090

const mockData = require('./MOCK_DATA.json')

const app = express()

// how to use middlewares in expreess js 

app.use((req, res, next) => {
    console.log('This is middleware one');
    // all the middleware task are fine forword req
    next()
    // this may go to next middleware or api paths 
})


app.get('/checkHealth', (req, res) => {
    const html = `<h1> Health is ok </h1>`
    res.send(html).json()
})

app.get('/', (req, res) => {
    const html = `<h1> home page </h1>`
    res.send(html).json()
})


app.get('/users', (req, res) => {
    const html = `<ul>${mockData.map((data) => `<li>${data?.first_name}</li>`).join("")}</ul>`
    const result = html
    res.send(result).json()
})

app.get('/api/users', (req, res) => {
    const result = mockData
    res.send(result).json()
})


app.listen(port, () => {
    console.log(`Server is running ${port}`)
})