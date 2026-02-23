require("dotenv").config();
const express = require("express")
const mongoose = require("mongoose")
const app = express()

app.use(express.json())

// const sendNoti = (req, res, next) => {
//     console.log("Request received");
//     console.log("Request url is :::", req.url);
//     console.log("request method is :::", req.method)
//     next();
//     // return res.status(403).send("Forbidden");
// }

const bookRoutes = require("./routes/bookRoutes")
// const userRoutes = require("./routes/userRoutes")

app.use("/books", bookRoutes)
// app.use("/users", sendNoti, userRoutes)

mongoose.connect(process.env.MONGODB_URI)
.then(()=> {
    console.log("Mongo db is connected");
    app.listen(process.env.PORT, ()=> {
    console.log("Server is listening on port 5051")
})
}).catch(err => {
    console.log("connection failed: ", err)
})

// app.use((err, req, res, next)=> {
//     console.error(err.stack);

//     res.status(err.status || 500).json({
//         message: err.message || "internal server error"
//     })
// })

// app.use((req, res, next)=> {
//     console.log("Request received")
//     console.log("request url is :: ", req.url)
//     console.log("Middleware 1")
//     next();
// })

// app.use((req, res, next)=> {
//     console.log("Middleware 2")
//     next();
// })

// app.use((req, res, next)=> {
//     console.log("Middleware 3")
//     next();
// })