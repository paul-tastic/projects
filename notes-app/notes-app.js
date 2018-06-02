// document.getElementById('mine').textContent = 'Hi'

// const p = document.querySelector('p')
// p.remove()

const ps = document.querySelectorAll('p')
ps.forEach(function(p) {
    p.textContent = 'This is a censored text content'
    console.log(p.textContent)
})