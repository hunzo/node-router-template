const control02 = (req, res) => {
    console.log(req.headers)
    res.send({
        controller: "02"
    })

}

module.exports = {
    control02,
}