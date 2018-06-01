const todos = [{
    text: 'study coding',
    completed: true
}, {
    text: 'get dry cleaning',
    completed: false
}, {
    text: 'eat lunch',
    completed: true
}, {
    text: 'code emowme shell',
    completed: false
}, {
    text: 'clean litter box',
    completed: false
}]
    
console.log(todos)
console.log('************************')
//remove a todo by text value

function deleteTodo(todos, todoTitle) {
    // get index # of match
    let match = todos.findIndex(function (todos){
        return todos.text.toLowerCase() === todoTitle.toLowerCase()
    })

    if (match > -1) {
    // delete that array index
        todos.splice(match, 1)
    }
    
}


deleteTodo(todos, 'Eat lunch')
console.log(todos)