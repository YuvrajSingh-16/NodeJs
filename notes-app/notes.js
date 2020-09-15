const fs = require('fs')

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
        console.log("New note added!")
    }else{
        console.log("Note with title already exists !")
    }
}

function removeNotes(title){
    const notes = loadNotes()
    notes.remove(title)
}

function loadNotes() {
    try {    
        const dataBuffer = fs.readFileSync('notes.json')
        const JSONdata = dataBuffer.toString() 
        const parsedJSON = JSON.parse(JSONdata)
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
    "addNotes": addNotes
}