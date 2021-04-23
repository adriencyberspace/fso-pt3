const mongoose = require('mongoose')

const password = process.argv[2]

const url =
 `mongodb+srv://adrien:${password}@cluster0.job3n.mongodb.net/person-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
  id: Number,
})

const Person = mongoose.model('Person', personSchema)

const name = process.argv[3]
const number = process.argv[4]

const randomNumber = Math.floor(Math.random() * 10000)

const person = new Person({
  name: `${name}`,
  number: `${number}`,
  id: `${randomNumber}`
})

if (process.argv.length === 3) {
  console.log('Phonebook:')
  Person.find({}).then(people => {
    people.forEach(person => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
} else if (process.argv.length === 5) {
  person.save().then(result => {
    console.log(`Added ${name} ${number} to the phonebook`)
    mongoose.connection.close()
  })
} else {
  console.log(`Command Line Format: 'node mongo.js <your-password> <name> <number>' `)
  process.exit(1)
}





