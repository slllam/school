const fs = require('fs/promises')
const path = require('path')
const chalk = require('chalk');

const notesPath = path.join(__dirname, 'db.json')


async function addNote (title) {
    const notes = await getNotes()
    const note = {
        title,
        id: Date.now().toString()
    }
    notes.push(note)
    await fs.writeFile(notesPath, JSON.stringify(notes))
    console.log(chalk.green.inverse('Note was created'))
}

async function delNote (noteId) {
    const notes = await getNotes ()
    notes.forEach(note => {
        if (note.id == noteId) {
           notes.splice(notes.indexOf(note)) 
           console.log('элемент удален')
           fs.writeFile(notesPath, JSON.stringify(notes))
        }
    }) 
    
}

async function getNotes () {
    const notesData = await fs.readFile(notesPath, 'utf-8')
    return Array.isArray(JSON.parse(notesData)) ? JSON.parse(notesData) : []
}

async function printNotes () {
    const notes = await getNotes ()
    console.log(chalk.bold.blue.inverse('Here is list on notes:'))
    notes.forEach(note => {
        console.log(chalk.blue(note.id, note.title))
    });
}

module.exports = {
    addNote, printNotes, delNote
}