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

const sortTodos = function (todos) {
    todos.sort(function(a, b){
        if (a.completed < b.completed) {
            return -1
        } else if (b.completed < a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)

// function getThingsTodo(todoList) {
//     // check complted === true
//     return todoList.filter(function(todo) {
//         return !todo.completed
//     })
// }

// console.log(getThingsTodo(todos))

    
// console.log(todos)
// console.log('************************')
// //remove a todo by text value

// function deleteTodo(todos, todoTitle) {
//     // get index # of match
//     let match = todos.findIndex(function (todos){
//         return todos.text.toLowerCase() === todoTitle.toLowerCase()
//     })
//         if (match > -1) {
//         // delete that array index
//             todos.splice(match, 1)
//         }
// }

// const findNote = function() {

// }

// deleteTodo(todos, 'Eat lunch')
// console.log(todos)