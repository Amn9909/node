const express = require('express')
const port = 9090

const mockData = require('./MOCK_DATA.json')

const app = express()


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