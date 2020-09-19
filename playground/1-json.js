const fs = require("fs")

// const book = {
//     title: "Ego is the Enemy",
//     author: "Ryan Holiday"
// }

// const bookJSON = JSON.stringify(book)   // string to JSON

// fs.writeFileSync("json-1.json", bookJSON)

// const dataBuffer = fs.readFileSync("json-1.json")
// const JSONdata = dataBuffer.toString()
// const data = JSON.parse(JSONdata)
// console.log(data.author)

const dataBuffer = fs.readFileSync("1-json.json")
const JSONdata = dataBuffer.toString()
const JSONstring = JSON.parse(JSONdata)  // JSON to object

JSONstring.name = "Yuvraj"
JSONstring.age = 19

fs.writeFileSync("1-json.json", JSON.stringify(JSONstring))
console.log(JSONstring)

const UpdatedData = fs.readFileSync("1-json.json").toString() // Converting data buffer to string
console.log(UpdatedData)