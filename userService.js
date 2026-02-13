function createUser(name){
    return {id: Date.now(), name}
}

function getUsers(){
    return ["Aryaman", "Nitin"]
}

module.exports = {createUser, getUsers};