const fs = require('fs')
const chalk = require("chalk")

function addNotes (title, body){
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote){
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
     // Converting JSON to string/object
        return JSON.parse(JSONdata)
    }catch (e){
        return []
    }
}

function saveNotes(notes) {
    const JSONdata = JSON.stringify(notes)  // converting javascript object into JSON
    fs.writeFileSync('notes.json', JSONdata)
}

// List notes function
const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.blue.bold("Your notes :"))

    notes.forEach((note) => {
        console.log(note.title);
    })
}

const readNotes = (title) => {
    const notes = loadNotes()

    const requiredNote = notes.find((note) => note.title === title)
    
    if(!requiredNote){
        console.log(chalk.red.bold.inverse("Note not found!"))
    }else{
    console.log(chalk.yellow.bold(requiredNote.title))
    console.log(requiredNote.body)
    }
}

module.exports = {
    "addNotes": addNotes,
    "removeNote": removeNote,
    "listNotes": listNotes,
    "readNotes": readNotes
}