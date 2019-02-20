export class Auto {
    marca: string;
    modello: string;
    anno_costruzione: number;
    numero_seriale: number;
    data_acquisto: number;


constructor (mar:string, mod:string, ann_cos:number, num_ser:number, dat_acq:number){
        this.marca = mar;
        this.modello = mod;
        this.anno_costruzione=ann_cos;
        this.numero_seriale = num_ser;
        this.data_acquisto = dat_acq;
    }

    infoAuto(){
        return `L'auto ${this.marca}, modello ${this.modello} è stata immatricolata nel ${this.anno_costruzione}. Il numero seriale dell'auto è ${this.numero_seriale} ed è stata venduta nel ${this.data_acquisto}.`;
    }
}

