import { Personagem } from "./personagem";

export class Guerreiro extends Personagem{
    static tipo = "Guerreiro"
    static descricao = "Você será esmagado pela fúria do Guerreiro!"
    forca 

    constructor(nome, level, forca){
        super(nome, level)
        this.forca = forca
    }

    obterInsignia(){
        if (this.forca >= 5){
            return `Guerreiro furioso`
        }
        return super.obterInsignia()
    }
}