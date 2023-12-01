const express = require('express')
require('dotenv').config()
const dbConnect = require('./config/dbconnect')
const initRoutes = require('./routes')
const cookieParser = require('cookie-parser')
const cors = require('cors');

const app = express()
app.use(cookieParser())
app.use(
    cors({
        origin: 'http://localhost:3000',
    })
);

const port = process.env.PORT || 8888
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
dbConnect()
initRoutes(app)

app.listen(port, () => {
    console.log('Server running on the port: ' + port);
})


