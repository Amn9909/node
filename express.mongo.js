const express = require('express')
const port = 9191
const app = express()
const mongoose = require('mongoose');


// create mongoose connection 
mongoose
    .connect('mongodb://Main:Main123@localhost:27017/')
    .then((data) => console.log(`mongo db connected ${data}`))
    .catch((err) => console.log(`error while coneection ${err}`))
// create schema 
const usersSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
})
// create model 

const UserModel = new mongoose.model('user', usersSchema)


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

app.get('/users', async (req, res) => {
    try {
        console.log('inside route')
        const result = await UserModel.find({})
        console.log(result)
        res.json(result)
    } catch (error) {
        res.status(400).json(error)
    }
})


app.listen(port, () => {
    console.log(`Server is running ${port}`)
})