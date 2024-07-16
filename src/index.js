import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"

const magoAntonio = new Mago('Antonio', 4, 'fogo', 4, 3)
const magaJulia = new Mago('Julia', 8, 'gelo', 7, 10)
const magoLucas = new Mago('Lucas', 6, 'raio', 5, 8)
const magaAna = new Mago('Ana', 7, 'terra', 6, 9)
const arqueiroCarlos = new Arqueiro('Carlos', 4, 3)
const arqueiraLuisa = new Arqueiro('Luisa', 5, 4)
const arqueiroMagoRafael = new ArqueiroMago('Rafael', 7, 5, 'fogo', 6, 7)
const magoIsabela = new Mago('Isabela', 5, 'gelo', 4, 6)
const magaGustavo = new Mago('Gustavo', 6, 'raio', 5, 8)
const arqueiroPedro = new Arqueiro('Pedro', 3, 5)
const arqueiraMaria = new Arqueiro('Maria', 6, 2)
const arqueiroMagoJoao = new ArqueiroMago('Joao', 5, 6, 'agua', 5, 5)

const personagens = [
    magoAntonio, 
    magaJulia, 
    arqueiroPedro, 
    arqueiraMaria, 
    arqueiroMagoJoao,
    magoLucas, 
    magaAna, 
    arqueiroCarlos, 
    arqueiraLuisa, 
    arqueiroMagoRafael, 
    magoIsabela, 
    magaGustavo, 
    arqueiroPedro, 
    arqueiraMaria, 
    arqueiroMagoJoao
]

const baralho = new PersonagemView(personagens)

const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    debugger
    event.preventDefault()
    const listaRespostas = { // Armazena as respostas do formulário
        "nome": event.target.elements["nome"].value,
        "level": parseInt(event.target.elements["level"].value),
        "descricao": event.target.elements["descricao"].value,
        "tipo": event.target.elements["tipo"].value,
    }

    criaNovoPersonagem(listaRespostas)

    form.reset()

    window.location.href = "../index.html"
})

function criaNovoPersonagem(listaRespostas) {
    let novoPersonagem

    if (listaRespostas.tipo == 'mago') {
        novoPersonagem = new Mago(listaRespostas.nome, listaRespostas.level, listaRespostas.descricao)
    } else if (listaRespostas.tipo == 'arqueiro') {
        novoPersonagem = new Arqueiro(listaRespostas.nome, listaRespostas.level, listaRespostas.descricao)
    } else if (listaRespostas.tipo == 'arqueiro-mago') {
        novoPersonagem = new ArqueiroMago(listaRespostas.nome, listaRespostas.level, listaRespostas.descricao)
    } else {
        novoPersonagem = new Guerreiro(listaRespostas.nome, listaRespostas.level, listaRespostas.descricao)
    }

    personagens.push(novoPersonagem)
    const personagemView = new PersonagemView(personagens)
}