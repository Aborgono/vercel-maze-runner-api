const express = require ('express')
const cors = require ('cors')
const mongoose = require ('mongoose')
const app = express()
const PORT = 8080

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
})



