const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const data = {}
data.users = require ('../data/users.json')

    router.route("/")
        .post((req, res) => {
            const anonymousUser = req.body;
            console.log("this is test", anonymousUser);
        })

module.exports = router