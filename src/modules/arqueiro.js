import { Personagem } from "./personagem.js"

export class Arqueiro extends Personagem{ // Extends é usado para herdar as propriedades e métodos da classe pai, no caso, Personagem
    destreza
    static tipo = "Arqueiro"

    constructor(nome, level, destreza){
        super(nome, level) // Super é usado para chamar o construtor da classe pai, no caso, Personagem
        this.destreza = destreza
    }

    obterInsignia(){
        if (this.destreza >= 5){
            return `Dominador de flechas`
        } else{
            return super.obterInsignia() // Super é usado para chamr o obterInsignia da classe pai
        }
    }
}