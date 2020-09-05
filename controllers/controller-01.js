module.exports = {
    control01(req, res) {
        console.log(req.headers)
        return res.send({
            controller: '01'
        })

    }
}