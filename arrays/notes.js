const notes = [{}, {
    title: 'My next trip',
    body: 'I want to go to Spain'
}, {
    title: 'habits to work on',
    body: 'eating better'
}, {
    title: 'home remodels',
    body: 'remodel bathrooms'
}]

console.log('***********************')

const findNote2 = function(notes, noteTitle) {
    return notes.find(function (note, index){
        return note.title === noteTitle
    })
}
const note2 = findNote2(notes, 'home remodels')
console.log(note2)


// const findNote = function(notes, noteTitle) {
//     const index = notes.findIndex(function (note, index){
//         return note.title === noteTitle
//     })
//     return notes[index]
// }

// const note = findNote(notes, 'home remodels')
// console.log(note)

// console.log(notes.length)
// console.log(notes)
// console.log('***********************')
// //console.log(notes.indexOf({}))
// // what makes 2 objects equal is they are the same exact object in memory
// console.log('***********************')

// how to get index of, of an empty object

// const index = notes.findIndex(function(note, index) {
//     console.log(note)
//     return note.title === 'habits to work on'
// })

//console.log(index)

// notes.push("My new note")

// console.log(notes)
// console.log(notes.length)

// let deleted = notes.pop()
// console.log(`You removed: ${deleted}`)
// console.log(notes.length)

// shift - delets first item in array
// unshift - adds to beginning

// splice
// notes.splice(1, 1, 'Replace the item with this text')
// notes[1] = 'new new text'

// notes[2] = "This is a new item!"

// notes.forEach(function(item, index) {
//     console.log(index)
//     console.log(item)
// })

// for (let i=0; i < notes.length; i++) {
//     console.log(notes[i])
// }