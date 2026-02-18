let users = [
    {id: 1, name: "aryaman"},
    {id: 2, name: "nitin"}, 
    {id: 3, name: "techible"}
]

exports.getAllUsers = (req, res) => {
    res.json(users)
}