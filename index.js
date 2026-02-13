const fs = require("fs")

const readStream = fs.createReadStream("data.txt")
const writeStream = fs.createWriteStream("copy.txt")

readStream.pipe(writeStream);





// const fs = require("fs");

// const readStream = fs.createReadStream("data.txt", "utf-8")

// readStream.on("data", (chunk) => {
//     console.log("chunk received: ");
//     console.log(chunk)
// })

// readStream.on("end", () => {
//     console.log("Finished reading")
// })






// const fs = require("fs/promises")

// async function readFiles() {
//     try{
//         const data = await fs.readFile("data.txt", "utf-8");
//         console.log(data);
//     } catch(error){
//         console.log(error)
//     }
// }

// readFiles();











// const fs = require("fs")

// fs.readFile("a.txt", "utf-8", (err, dataA) => {
//     fs.readFile("b.txt", "utf-8", (err, dataB) => {
//         fs.readFile("c.txt", "utf-8", (err, dataC) => {
//             console.log(dataA, dataB, dataC);
//         })
//     })
// })







// function greet(name, callback){
//     console.log("Hello", name);
//     callback();
// }

// greet("Aryaman", ()=> {
//     console.log("Goodbye")
// })






// setTimeout(() => {
//     console.log("time out 1")
// },0) // sent to background

// setTimeout(() => {
//     console.log("time out 2")
// },500)

// setTimeout(() => {
//     console.log("time out 3")
// },1500)

// setTimeout(() => {
//     console.log("time out 4")
// },2000)

// console.log("start"); //executed

// console.log("end") //executed













// const path = require("path")

// const fullPath = path.join(__dirname, "data.txt")
// console.log(fullPath)









// const file = require("fs")

// file.writeFile("code/data.txt", "Anything", () => {
//     console.log("Written")
// })



// const add = require("./math")

// console.log(add(7,3))

// const userService = require("./userService")

// console.log(userService.createUser("Aryaman"))
// console.log(userService.getUsers())















//Types of modules
// 1. Core Modules (built - in)
// 2. Local Modules (your files)
// 3. npm Modules (third - party)


//. /home/user/data.txt - Linux
//. C:/users/data.txt