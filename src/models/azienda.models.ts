import { Impiegato } from "./impiegato.models";


export class Azienda{
    nome: string;
    sede_legale: string;
    sede_operativa: string;
    anno_fondazione: number;
    lista_impiegati: Array<Impiegato>;

    constructor(n:string, sl:string, so:string, ann_fond:number, lis_imp:Array<Impiegato>,){
        this.nome=n;
        this.sede_legale=sl;
        this.sede_operativa=so;
        this.anno_fondazione=ann_fond;
        this.lista_impiegati=lis_imp;
    }


    infoAzienda(){
        var app='';
        for (let i = 0; i < this.lista_impiegati.length; i++) {
            app = app + this.lista_impiegati[i].nome +', ';
            
        }
    
        return `Nome: ${this.nome}, Sede Legale: ${this.sede_legale}, Sede Operativa: ${this.sede_operativa}, Anno Fondazione: ${this.anno_fondazione} Lista Impiegati: ${app}`
    }
}