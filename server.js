import express from "express";
const app = express()
const port = 3000
import connect from './core/db.js'
import post from './modules/post/routes.js'

connect().then(() => {
    console.log('Connected to db');
    
    app.use('/posts', post)

    app.listen(3000, () => {
        console.log(`Server is listening on localhost:${port}`);
    })
})


