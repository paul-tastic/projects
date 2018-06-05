const notes = [{
    title: 'My next trip',
    body: 'I want to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'eating better'
}, {
    title: 'Home remodels',
    body: 'remodel bathrooms'
}]

const filters = {
    searchText: ''
}

const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    //delete notes before filtering
    document.querySelector('#notes').innerHTML = ''

    //populate based on search
    filteredNotes.forEach(function (notes) {
        const noteEl = document.createElement('p')
        noteEl.textContent = notes.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e) {
    e.target.textContent = 'CLICKED!'
})
//use input to allow filter in real time
document.querySelector("#search-text").addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})
document.querySelector('#filter-by').addEventListener('change', function(e){
    console.log(e.target.value)
})