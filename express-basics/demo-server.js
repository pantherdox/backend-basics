const express = require("express")

const app = express();

app.use(express.json())

let users = [
    {id: 1, name: "aryaman"},
    {id: 2, name: "nitin"}, 
    {id: 3, name: "techible"}
]


//Route Parameters
app.get("/users/:id/:name/:age/:phone", (req, res) => {
    console.log(req.params);
})


//Query Parameters
app.get("/products", (req,res) => {
    console.log(req.query)
})

// request body
app.post("/userss", (req, res) => {
    console.log(req.body)
})

app.get("/info", (req, res) => {
    console.log(req.headers)
})

// combine everything
app.post("/users/:id/orders", (req, res) => {
    console.log("Params: ", req.params);
    console.log("Query: ", req.query);
    console.log("Headers: ", req.headers);
    console.log("Body: ", req.body)

    res.send("check terminal")
})


app.listen(5051, () => {
    console.log("Server is running now on port 5051")
})


// get all users
app.get("/users", (req, res) => {
    res.status(200).json(users)
})


//get single user
app.get("/users/:id", (req, res) => {
    console.log(req.url)
    const id = parseInt(req.params.id)
    const user = users.find(key => key.id === id)

    if(!user) {
        return res.status(404).json({message: "User not found inside the array"})
    }

    res.json(user)
})


// create user
app.post("/users", (req, res) => {

    const name = req.body.name

    if(!name){
        return res.status(400).json({message:"Name is required"})
    }
    const newUser = {
        id: users.length + 1,
        name: name
    }

    users.push(newUser);
    res.status(201).json(newUser)
})


// update user (PATCH)
app.patch("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id)

    if(!user){
        return res.status(404).json({
            message: "User not found"
        })
    }

    user.name = req.body.name

    res.json(user)
})


// delete user
app.delete("/users/:id" , (req, res) => {
    const id = parseInt(req.params.id)
    users = users.filter(key => key.id !== id);

    res.status(204).send()
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