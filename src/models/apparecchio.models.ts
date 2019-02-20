export class Apparecchio{
    marca: string;
    modello: string;
    anno_costruzione: number;
    numero_serie: number;
    data_acquisto: number;

constructor(mar:string, mod:string, ann:number, num_ser:number, data:number){
        this.marca = mar;
        this.modello = mod;
        this.anno_costruzione = ann;
        this.numero_serie = num_ser;
        this.data_acquisto = data;
    };

    infoApparecchio(){
        return `${this.marca} ${this.modello} ${this.anno_costruzione} ${this.numero_serie} ${this.data_acquisto}`
    }
};