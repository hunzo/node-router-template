const ex = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const r1 = require('./routes/router-01')
const r2 = require('./routes/router-02')
const r3 = require('./routes/router-03')

const app = ex()

app.use(morgan('combined'))
app.use(bodyParser())

app.use('/r1', r1)
app.use('/r2', r2)
app.use('/r3', r3)

app.listen(process.env.PORT || 8080)
