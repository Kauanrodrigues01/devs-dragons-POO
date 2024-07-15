export class Personagem {
    nome
    vida = 100
    mana = 100
    level
    descricao

    constructor(nome, level) {
        this.nome = nome
        this.level = level
    }

    obterInsignia() {
        if (this.level >= 5){
            return `Implacavel ${this.constructor.tipo}`
        }
        return `${this.constructor.tipo} iniciante`
    }

    static verificarVencedor(personagem1, personagem2){
        if (personagem1.level === personagem2.level){
            return "Empate!!!"
        } else if(personagem1.level > personagem2.level){
            return `${personagem1.constructor.tipo} ${personagem1.nome} venceu`
        } else{
            return `${personagem2.constructor.tipo} ${personagem2.nome} venceu`
        }
    }
}