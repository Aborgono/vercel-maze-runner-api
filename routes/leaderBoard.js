const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const data = {}
data.leaderBoard = require ('../data/users.json')

    router.route("/")
        .get((req, res) => {
            res.json(data.leaderBoard)
        })

module.exports = router