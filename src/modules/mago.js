import { Personagem } from './personagem.js'

export class Mago extends Personagem{ // Extends é usado para herdar as propriedades e métodos da classe pai, no caso, Personagem
    elementoMagico
    levelMagico
    inteligencia
    static tipo = "Mago"
 
   constructor(nome, level, elementoMagico, levelMagico, inteligencia){
        super(nome, level) // Super é usado para chamar o construtor da classe pai, no caso, Personagem
        this.elementoMagico = elementoMagico
        this.levelMagico = levelMagico
        this.inteligencia =  inteligencia
    }
    
    obterInsignia(){
        if (this.levelMagico >= 5 && this.inteligencia >= 5){
            return `Mestre do ${this.elementoMagico}`
        } else{
            return super.obterInsignia() // Super é usado para chamr o obterInsignia da classe pai
        }
    }

    
}