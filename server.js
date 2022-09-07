import express from "express"
import connect from './core/db.js'
import user from './modules/user/routes.js'
const app = express()
const port = 3000

connect().then(() => {
    console.log('Connected to db');

    // app.use(bodyParser.json()) // for parsing application/json    
    // app.use(bodyParser.urlencoded({ extended: true }))
    app.use(express.json());

    app.use('/users', user)

    app.listen(3000, () => {
        console.log(`Server is listening on localhost:${port}`);
    })
})


