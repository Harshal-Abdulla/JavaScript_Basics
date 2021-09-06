const button = document.querySelector('button')
const body = document.querySelector('body')

// button.addEventListener('click', () => {console.log('you clicked me')})
//addEventListener will add events lik if we click say the console shows you clicked you can make it hover, double click etc ctrl and space shows  many is there

button.addEventListener('dblclick', ()=> {
    body.classList.toggle('dark')
})
