const fs = require('fs')
const chalk = require("chalk")

function getNotes (){
    return "Some notes here...."
}

function addNotes (title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note){
        return note.title === title
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.bold("New note added!"))
    }else{
        console.log(chalk.red.bold("Note with title already exists !"))
    }
}

function removeNote(title){
    const notes = loadNotes()

    var updatedNotes = notes.filter(
        function (note){
            return note.title != title;
        })
    
    if(notes.length > updatedNotes.length){
        saveNotes(updatedNotes)
        console.log(chalk.green.bold("Note removed!"))
    }else{
        console.log(chalk.red.bold("Note not found!"))
    }
}

function loadNotes() {
    try {    
        const dataBuffer = fs.readFileSync('notes.json')
        const JSONdata = dataBuffer.toString()   // converting dataBuffer into JSON
        const parsedJSON = JSON.parse(JSONdata)  // Converting JSON to string/object
        return parsedJSON
    }catch (e){
        return []
    }
}

function saveNotes(notes) {
    const JSONdata = JSON.stringify(notes)  // converting javascript object into JSON
    fs.writeFileSync('notes.json', JSONdata)
}

module.exports = {
    "getNotes": getNotes,
    "addNotes": addNotes,
    "removeNote": removeNote
}