export class Animale {
    razza: string;
    zampe: number;
    habitat: string;
    alimentazione: string;
    vita_media: number;


constructor (r:string, z:number, h:string, a:string, vm:number){
        this.razza = r;
        this.zampe = z;
        this.habitat = h;
        this.alimentazione = a;
        this.vita_media = vm
    }

    infoAnimale(){
        return 'razza: ' + this.razza +' '+'zampe: ' + this.zampe +' '+'habitat: ' + this.habitat +' '+'alimentazione: ' + this.alimentazione +' '+ 'vita media: ' + this.vita_media
    }
}