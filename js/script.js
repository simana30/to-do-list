
// capturar elementos - form, inputTarefa, botaoAdd, ul, listaContainer, botaoMarcar, botaoExcluir
const listaContainer = document.getElementById('listaContainer')
const form = document.getElementById('form')
const inputTarefa = document.getElementById('inputTarefa')
const botaoAdd = document.getElementById('botaoAdd')
const ul = document.getElementById('tarefas')
const botaoMarcar = document.getElementById('botaoMarcar')
const botaoExcluir = document.getElementById('botaoExcluir')

// inserir um evento no form
form.addEventListener('submit', function(evento){
    //tira o default de form 
    evento.preventDefault()
     // criar uma li
    const valorDigitado =  document.createElement('li')
    //capturar valor do input da tarefa
    valorDigitado.textContent = inputTarefa.value
    // inserir input tarefa dentro do li

    console.log(valorDigitado)
 })








