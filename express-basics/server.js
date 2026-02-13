const express = require("express")

const app = express();

app.use(express.json())

let users = [
    {id: 1, name: "aryaman"},
    {id: 2, name: "nitin"}, 
    {id: 3, name: "techible"}
]

app.get("/users", (req, res) => {
    res.status(200).json(users)
})

app.get("/users/:id", (req, res) => {
    console.log(req.url)
    const id = parseInt(req.params.id)
    const user = users.find(key => key.id === id)

    if(!user) {
        return res.status(404).json({message: "User not found"})
    }

    res.json(user)
})

app.post("/users", (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    }

    users.push(newUser);
    res.status(201).json(newUser)
})


app.listen(5051, () => {
    console.log("Server is running now on port 5051")
})
// app.get("/", (req, res) => {
//     res.send("Hello i am a express server")
// })

// app.get("/about", (req, res)=>{
//     res.send("We are at the about page")
// })

// app.get("/contact", (req, res)=>{
//     res.send("We are at the contact page")
// })

// app.get("/info", (req, res)=>{
//     console.log(req.method);
//     console.log(req.url);
//     res.status(404).send("not found anything here")
// })

// app.get("/api/user", (req, res) => {
//     res.json({
//         id: "007",
//         name: "Aryaman"
//     })
// })