const express = require('express')
const app = express()

app.use(express.json())

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

// Info Page
app.get('/info', (request, response) => {
  response
    .send(`
    <div>Phone book has info for ${persons.length} people.</div>
    <br>
    <div>${date}</div>`)
})

// Get all persons
app.get('/api/persons', (request, response) => {
  response.json(persons)
})


// Get one person by id
app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

// Delete person
app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})


const generateId = () => {
  const randomNumber = Math.floor(Math.random() * 10000)
  return randomNumber
}
// Add person
app.post('/api/persons', (request, response) => {
  const body = request.body
  console.log('request', request)

  if (!body.name) {
    return response.status(400).json({ 
      error: 'Name missing.' 
    })
  }

  if (!body.number) {
    return response.status(400).json({ 
      error: 'Number missing.' 
    })
  }

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number
  }

  persons = persons.concat(person)

  response.json(person)
})



// Run Port 3001
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})