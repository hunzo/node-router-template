const callapi = require('../services/callApi')

const control03 = (req, res) => {
    callapi.getuser()
    .then(rs => {
        res.send(rs.data)
    })
    .catch(e => {
        res.send(e)
    })
}

module.exports = {
    control03,
}