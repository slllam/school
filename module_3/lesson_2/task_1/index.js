const yargs = require('yargs')
const {addNote, printNotes, delNote} = require('./notes.controller')

yargs.command({
    command: 'add',
    describe: 'Add new note to list',
    builder: {
        title: {
            type: 'string',
            describe: 'Note title',
            demandOption: true
        }
    },
    handler({title}) {
        addNote(title)
    }
})

yargs.command({
    command: 'list',
    describe: 'Print all notes',
    async handler() {
        printNotes()
    }
})

yargs.command({
    command: 'del',
    describe: 'del note with specific ID',
    async handler({noteId}) {
        delNote(noteId)
    }
})

yargs.parse()