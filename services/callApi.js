const api = require('./Api')

module.exports = {
    getuser() {
        return api().get('/users', {
            payload: 'payload'
        })
    }
}