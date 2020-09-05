const ex = require('express')
const r = ex.Router()
const c = require('../controllers/controller-02')

r.get('/', (req, res) => {
    res.send({
        router: "router 02"
    })
})

r.get('/c2', c.control02)

module.exports = r