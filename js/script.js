
// capturar elementos - form, inputTarefa, botaoAdd, ul, listaContainer, botaoMarcar, botaoExcluir
const listaContainer = document.getElementById('listaContainer')
const form = document.getElementById('form')
const inputTarefa = document.getElementById('inputTarefa')
const botaoAdd = document.getElementById('botaoAdd')
const tarefas = document.getElementById('tarefas')
const botaoMarcar = document.getElementById('botaoMarcar')
const botaoExcluir = document.getElementById('botaoExcluir')

// inserir um evento no form
form.addEventListener('submit', function(evento){
    //tira o default de form 
    evento.preventDefault()
    //criar div e atribuir classe
    const tarefinha = document.createElement('div')
    tarefinha.className = "tarefinha"
    tarefas.appendChild(tarefinha)

    //criar p que vai ter conteudo do valor digitado
    const valorDigitado = document.createElement('p')
    valorDigitado.className = "tarefa-digitada"
    valorDigitado.textContent = inputTarefa.value
    

    //criar p que vai ter x como conteúdo
    const paragrafoX = document.createElement('p')
    paragrafoX.textContent = "x"
    
    //estrututura de identação
    tarefinha.appendChild(valorDigitado)
    tarefinha.appendChild(paragrafoX)
    
    //ouvir o parágrafo x  e adicionar a classe que risca a tarefa e faz o inverso (toggle)
    paragrafoX.addEventListener('click', function(evento){
        if(valorDigitado.classList.contains('tarefa-digitada')){
            valorDigitado.classList.remove('tarefa-digitada')
            valorDigitado.classList.add('tarefa-executada')
        } else {
            valorDigitado.classList.add('tarefa-digitada')
            valorDigitado.classList.remove('tarefa-executada')
        }
       
    })
})


//ouvir o botaoMarcar tudo iterar todas as tarefas e add a classe que risca tudo
botaoMarcar.addEventListener('click', function(evento){
    for(let i = 1; i < tarefas.lentgh; i++) {
        if(valorDigitado.classList.contains('tarefa-digitada')){
            valorDigitado.classList.remove('tarefa-digitada')
            valorDigitado.classList.add('tarefa-executada')
        } else {
            valorDigitado.classList.add('tarefa-digitada')
            valorDigitado.classList.remove('tarefa-executada')
        }
    }
})









//ouvir o botaoExcluir, iterar e criar uma nodelist vazia, excluir todos os itens ou resetar 
//form.reset();


