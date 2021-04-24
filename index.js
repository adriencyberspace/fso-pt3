const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const Person = require('./models/person')

app.use(express.static('build'))
app.use(cors())
app.use(express.json())

// Handle errors - exception is if id is malformatted
const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }

  // Pass errors to Express to handle them
  next(error)
}

// Log request method, path and body
const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(requestLogger)

// Homepage
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

// Fetch all persons
app.get('/api/persons', (request, response) => {
  Person.find({}).then(people => {
    response.json(people)
  })
})

// Get one person by id
app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id).then(note => {
    response.json(note)
  })
})

// Generate random id for added person
const generateId = () => {
  const randomNumber = Math.floor(Math.random() * 10000)
  return randomNumber
}

// Add person
app.post('/api/persons', (request, response) => {
  const body = request.body

  if (body.name === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const person = new Person({
    name: body.name,
    number: body.number,
    date: new Date(),
  })

  person.save().then(savedPerson => {
    response.json(savedPerson)
  })
})

// TODO:
// If name already exists, update person
app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})

// Delete person
app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

// Catch nonexistent routes
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)
app.use(errorHandler)


// Run Port 3001
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})