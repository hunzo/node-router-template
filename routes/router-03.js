const ex = require('express')
const r = ex.Router()
const c = require('../controllers/controller-03')

r.get('/', (req, res) => {
    res.send({
        router: "router 03"
    })
})

r.get('/c3', c.control03)

module.exports = r