export class Impiegato{
    nome: string;
    cognome: string;
    data_nascita: number;
    mansione: string;
    stipula_contratto: number;
    anzianita: number;
    stipendio_mese: number;


    constructor(n:string, c:string, dn:number, m:string, sc:number, anz:number, stm:number){
        this.nome=n;
        this.cognome=c;
        this.data_nascita=dn;
        this.mansione=m;
        this.stipula_contratto=sc;
        this.anzianita=anz;
        this.stipendio_mese=stm;
    }

    stipendio_anno(){
       return this.stipendio_mese*12;
    }

    infoImpiegato(){
        return `Nome: ${this.nome} ${this.cognome} Nato il: ${this.data_nascita} Mansione: ${this.mansione} Contratto stipulato il: ${this.stipula_contratto} Livello di Anzianità: ${this.anzianita} Stipendio Mensile Lordo: ${this.stipendio_mese} Stipendio Annuale Lordo ${this.stipendio_anno()}`
    }
}
