const chalk = require("chalk")
const notes = require("./notes.js") // importing file
const yargs = require("yargs")

// Create add command
yargs.command ({
    command: 'add',
    describe: "Add a note",
    builder:{
        title: {
            describe: "Note title",  // brief about the title option
            demandOption: true,  // making title a must argument
            type: 'string'  // specifying specific data type for the title
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: "Remove a note",
    builder: {
        title : {
            describe: "Title",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: "list",
    describe: "List all the notes",
    handler: function() {
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: "read",
    describe: "Reads the notes present",
    builder: {
        title :{
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        notes.readNotes(argv.title)
    }
})

yargs.parse()