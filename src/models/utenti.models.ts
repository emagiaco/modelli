export class Utenti {
    nome: string;
    cognome: string;
    residenza: string;
    domicilio: string;
    telefono: number;
    contratto: number;
    data_stipula: number;
    ultima_bolletta: number;


constructor (n:string, c:string, r:string, d:string, t:number, ct:number, ds:number, ub:number){
        this.nome = n;
        this.cognome = c;
        this.residenza = r;
        this.domicilio = d;
        this.telefono = t;
        this.contratto = ct;
        this.data_stipula = ds;
        this.ultima_bolletta = ub;
    }

    infoUtenti(){
        return `Nome e Cognome: ${this.nome} ${this.cognome}, residente in ${this.residenza}, domiciliato in ${this.domicilio}, telefono: ${this.telefono}, contratto: ${this.contratto}, data stipula: ${this.data_stipula}, ultima bolletta: ${this.ultima_bolletta}`
    }
}