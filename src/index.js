import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"

const magoAntonio = new Mago('Antonio', 4, 'fogo', 4, 3)
const magaJulia = new Mago('Julia', 8, 'gelo', 7, 10)
const arqueiroPedro = new Arqueiro('Pedro', 3, 5)
const arqueiraMaria = new Arqueiro('Maria', 6, 2)

const arqueiroMagoJoao = new ArqueiroMago('Joao', 5, 6, 'agua', 5, 5)
const personagens = [magoAntonio, magaJulia, arqueiroPedro, arqueiraMaria, arqueiroMagoJoao]

const baralho = new PersonagemView(personagens)

console.log(Personagem.verificarVencedor(magoAntonio, magaJulia))