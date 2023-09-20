const express = require('express')
const router = require('express').Router()
const data = {}
data.users = require ('../data/users.json')

// const userMethod = () => {

    router.route("/users")
        .get((req, res) => {
            res.json(data.users)
        })
        .post((req, res) => {
            res.json({
                "user": req.body,
                "difficulty": req.body,
                "score": req.body
            })
        })

module.exports = router