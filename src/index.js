import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Guerreiro } from "./modules/guerreiro.js"

let personagens = JSON.parse(localStorage.getItem('personagens')) || []

const baralho = new PersonagemView(personagens)

const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault() // Corrigido para chamar diretamente no evento

    const listaRespostas = { // Armazena as respostas do formulário
        nome: event.target.elements["nome"].value,
        level: parseInt(event.target.elements["level"].value), // Certifique-se de converter para número
        descricao: event.target.elements["descricao"].value,
        tipo: event.target.elements["tipo"].value,
    }

    console.log(listaRespostas)

    let novoPersonagem = criaNovoPersonagem(listaRespostas)

    personagens.push(novoPersonagem)

    baralho.renderNewPersonagem(novoPersonagem) // Renderiza apenas o novo personagem

    salvarPersonagens() // Salva a lista atualizada no localStorage

    form.reset()
})

function criaNovoPersonagem(listaRespostas) {
    let novoPersonagem

    if (listaRespostas.tipo === 'mago') {
        novoPersonagem = new Mago(listaRespostas.nome, listaRespostas.level, listaRespostas.descricao)
    } else if (listaRespostas.tipo === 'arqueiro') {
        novoPersonagem = new Arqueiro(listaRespostas.nome, listaRespostas.level, listaRespostas.descricao)
    } else if (listaRespostas.tipo === 'arqueiro-mago') {
        novoPersonagem = new ArqueiroMago(listaRespostas.nome, listaRespostas.level, listaRespostas.descricao)
    } else {
        novoPersonagem = new Guerreiro(listaRespostas.nome, listaRespostas.level, listaRespostas.descricao)
    }

    return novoPersonagem
}

function salvarPersonagens() {
    localStorage.setItem('personagens', JSON.stringify(personagens))
}