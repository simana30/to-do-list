
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
    const paragrafoX = document.createElement('span')
    paragrafoX.textContent = "x"
    
    //estrututura de identação
    tarefinha.appendChild(valorDigitado)
    tarefinha.appendChild(paragrafoX)


    //ouvir parágrafo tarefinha e adicionar a classe que risca a tarefa e faz o inverso(toogle)
    valorDigitado.addEventListener('click', function(evento){
        if(valorDigitado.classList.contains('tarefa-digitada')){
            valorDigitado.classList.remove('tarefa-digitada')
            valorDigitado.classList.add('tarefa-executada')
        } else {
            valorDigitado.classList.add('tarefa-digitada')
            valorDigitado.classList.remove('tarefa-executada')
        }
       
    })
    //ouvir o parágrafo x  e excluir a tarefa
    paragrafoX.addEventListener('click', function(evento){
             
        if (valorDigitado.parentNode) {
            valorDigitado.parentNode.removeChild(valorDigitado)
            paragrafoX.parentNode.removeChild(paragrafoX)
        } 
       
    })
})


//ouvir o botaoMarcar tudo e add a classe que risca tudo, toggle clicar no botão de novo e desmarcar
botaoMarcar.addEventListener('click', function(e){
    if(tarefas.classList.contains('tarefas-marcadas')) {
        tarefas.classList.remove('tarefas-marcadas')
        tarefas.classList.add('tarefas-digitadas')
    } else {
    let tarefasMarcadas = tarefas.setAttribute('class', 'tarefas-marcadas')
    }    
})
//ouvir o botaoExcluir, iterar e criar uma nodelist vazia, excluir todos os itens ou resetar 
//form.reset();

botaoExcluir.addEventListener('click', function(e){
    if(tarefas.parentNode){
        tarefas.parentNode.removeChild(tarefas)
    }
})
    