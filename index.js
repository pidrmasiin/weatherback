const express = require('express')
const app = express()

const bodyParser = require('body-parser')

const cors = require('cors')

app.use(bodyParser.json())

app.use(cors())

app.use(express.static('build'))


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})