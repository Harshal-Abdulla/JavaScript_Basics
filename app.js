 const element = document.querySelector('#select')
// element.innerHTML = "This is from JS"
// element.style.color = "cyan"
// element.style.fonrSize = "40px"
// element.style = 'display:none'

// console.log(element.classList)
// element.classList.add('five')
// console.log(element.classList)
// element.classList.remove('one')
// console.log(element.classList)

const doc = document.querySelector('body')
console.log(doc.classList.toggle('dark'))

//the above will toggle if else fuction so we can add or remove the dark mode is given in the body if {dothis} else (dothat ) this is done here

const value = element.classList.contains('six')

console.log(value)
//this allows you to check whether the class is present or not
