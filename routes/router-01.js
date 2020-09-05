const ex = require('express')
const r = ex.Router()
const c = require('../controllers/controller-01')

r.get('/', (req, res) => {
    res.send({
        router: "router 01"
    })
})

r.get('/c1', c.control01)

module.exports = r