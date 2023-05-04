const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const chefs = require('./chef.json')
const recipes = require('./recipes.json')
app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/chefs', (req, res) => {
    res.send(chefs)
})
app.get('/chef/:id', (req, res) => {
    const id = req.params.id
    const singleChef = chefs.find(chef=> chef.chef_id == id)
    res.send(singleChef)
})
app.get('/recipes', (req, res) => {
    res.send(recipes)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})