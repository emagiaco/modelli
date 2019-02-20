import { Giocatori } from "./giocatori.modules";

export class Squadra{
    nome: string;
    sede_legale: string;
    anno_fondazione: number;
    lista_calciatori: Array<Giocatori>;

    constructor(n:string, sl:string, ann_fond:number, lis_imp:Array<Giocatori>,){
        this.nome=n;
        this.sede_legale=sl;
        this.anno_fondazione=ann_fond;
        this.lista_calciatori=lis_imp;
    }


    infoSquadre(){
        var app='';
        for (let i = 0; i < this.lista_calciatori.length; i++) {
            app = app + this.lista_calciatori[i].nome + ' '+this.lista_calciatori[i].cognome +', ';
            
        }
    
        return `Nome squadra: ${this.nome}, Sede Legale: ${this.sede_legale}, Anno Fondazione: ${this.anno_fondazione} Lista Calciatori: ${app}`
    }
}