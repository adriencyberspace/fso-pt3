const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

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


morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :response-time ms - :body'));

app.get('/', function (req, res) {
  res.send('hello, world!')
})

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

// Generate random id for added person
const generateId = () => {
  const randomNumber = Math.floor(Math.random() * 10000)
  return randomNumber
}

// Add person
app.post('/api/persons', (request, response) => {
  const body = request.body
  console.log('request', request)

  
  // If trying to post without name or number, throw error
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

  // If person already exists in phonebook, throw error
  const personExists = persons.find(person => person.name === body.name)

  if (personExists) {
    return response.status(400).json({
      error: 'Person already exists.'
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
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})