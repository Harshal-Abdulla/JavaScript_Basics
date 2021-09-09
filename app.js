//watch day 18 for fun ctions
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissor = document.querySelector('#scissor')

const handler = (action)=>{
    console.log("You clicked "+action)
}
  
rock.addEventListener('click', () => {handler('rock') })
paper.addEventListener('click', () => {handler('paper') })
scissor.addEventListener('click', () => {handler('scissor') }) 