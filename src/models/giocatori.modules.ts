export class Giocatori {
    nome: string;
    cognome: string;
    ruolo: string;
    numero_maglia: number;
    piede_preferito: string;
    data_ingaggio: number;
    ingaggio: string;


constructor (n:string, c:string, ruol:string, num_mag:number, p_pref:string, d_ing:number, ing:string){
        this.nome = n;
        this.cognome = c;
        this.ruolo = ruol;
        this.numero_maglia = num_mag;
        this.piede_preferito = p_pref;
        this.data_ingaggio = d_ing;
        this.ingaggio = ing;
    }

    infoGiocatori(){
        return `Nome e Cognome: ${this.nome} ${this.cognome}. Ruolo: ${this.ruolo}. Numero Maglia: ${this.numero_maglia}. Piede Preferito: ${this.piede_preferito}. Data Ingaggio: ${this.data_ingaggio}. Ingaggio Annuale: ${this.ingaggio}.`
    }
}