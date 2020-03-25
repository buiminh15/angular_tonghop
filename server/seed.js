const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const colors = require('colors')
// Load models
const Tour = require('./models/tourModel')

// Connect to DB
// const MONGO_URI = 'mongodb+srv://minhbb:12345@cluster0-d9dj2.mongodb.net/natours-fake?retryWrites=true&w=majority'

dotenv.config({path: './config.env'})

const MONGO_URI = process.env.DATABASE.replace(
  '<PASSWORD>', process.env.DATABASE_PASSWORD
)

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`, 'utf-8'))

// Import into DB
const importData = async () => {
    try {
        await Tour.create(tours)
        console.log('Data imported...'.green.inverse)
        process.exit()
    } catch (error) {
        console.error(error);
    }
}

// Delete data
const deleteData = async () => {
    try {
        await Tour.deleteMany()
        console.log('Data Destroyed...'.red.inverse)
        process.exit()
    } catch (error) {
        console.error(error);
    }
}

if (process.argv[2] === '-i') {
    importData()
} else if (process.argv[2] === '-d') {
    deleteData()
}