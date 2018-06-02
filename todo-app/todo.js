let p = document.querySelectorAll('p')
p.forEach(element => {
    if (element.textContent.toLowerCase().includes('the')) {
        element.remove()
    }
});