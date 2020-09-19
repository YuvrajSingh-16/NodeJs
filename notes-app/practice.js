const fs = require("fs")
const chalk = require("chalk")
const yargs = require("yargs")
const notes = require("./notes.js")

yargs.command({
    command: 'add',
    describe: 'Add note',
    builder:{
        title: {
            describe: "Title",
            demandOption: true,
            type:"string"
        },
        body: {
            describe: "Body",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
})


yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function(){
        notes.listNotes()
    }
})


yargs.command({
    command: 'remove',
    describe: 'Remove note',
    builder: {
        title: {
            describe: "title",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title);
    }
})


yargs.command({
    command: 'read',
    describe: 'Read note',
    builder: {
        title:{
            describe: "title",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv){
        notes.readNotes(argv.title)
    }
})

yargs.parse()