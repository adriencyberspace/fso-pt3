const express = require('express')
const app = express()

let persons = [
  {
    id: 1,
    name: "Katie",
    number: "555-555-5555"
  },
  {
    id: 2,
    name: "Adrien",
    number: "666-666-6666"
  },
  {
    id: 3,
    name: "Sparky",
    number: "777-777-7777"
  },
  {
    id: 4,
    name: "Abby",
    number: "888-888-8888"
  },
]

const date = new Date()

app.get('/info', (request, response) => {
  response
    .send(`
    <div>Phone book has info for ${persons.length} people.</div>
    <br>
    <div>${date}</div>`)
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})