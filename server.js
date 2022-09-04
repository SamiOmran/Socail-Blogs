import express from "express";
const app = express()
const port = 3000
import connect from './core/db.js'

connect().then(() => {
    console.log('Connected to db');

    app.listen(3000, () => {
        console.log(`Server is listening on localhost:${port}`);
    })
})


