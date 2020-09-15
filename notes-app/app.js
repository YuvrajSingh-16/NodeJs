const notes = require("./notes.js") // importing file
const chalk = require("chalk")
const yargs = require("yargs")

// const success = chalk.bold.green.inverse;
// console.log(success("Success!"))

// Create add command
yargs.command ({
    command: 'add',
    describe: "Add a note",
    builder:{
        title: {
            describe: "Note title",  // brief about the title option
            demandOption: true,  // making title a must argument
            type: 'string'  // specifying the data type for the title
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        notes.addNotes(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: "Remove a note",
    handler: function(){
        console.log("Removing a note!")
    }
})

// Create list command
yargs.command({
    command: "list",
    describe: "List all the notes",
    handler: function() {
        console.log("Listing all the notes..")
    }
})

// Create read command
yargs.command({
    command: "read",
    describe: "Reads the notes present",
    builder: {
        title :{
            describe: "Note title"
        }
    },
    handler: function () {
        console.log("Reading the notes..")
    }
})

yargs.parse()
// Customize the version to be used
//console.log(yargs.argv)