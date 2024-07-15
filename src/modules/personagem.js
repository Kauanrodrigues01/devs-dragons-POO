export class Personagem {
    #nome // a # indica que o atributo é privado
    vida = 100
    mana = 100
    #level
    descricao

    constructor(nome, level) {
        this.#nome = nome
        this.#level = 1
    }

    get nome(){ // getter possibilita acessar o atributo privado em outras classes
        return this.#nome
    }

    get level(){ // getter possibilita acessar o atributo privado em outras classes
        return this.#level
    }

    set level(novoLevel){ // setter possibilita alterar o atributo privado em outras classes
        if (novoLevel >= 1 && novoLevel <= 10){
            this.#level = novoLevel
        }
    }

    diminuirLevel(){
        this.level -= 1 // chama o setter level
    }

    aumentarLevel(){
        this.level += 1 // chama o setter level
    }

    

    obterInsignia() {
        if (this.#level >= 5){
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