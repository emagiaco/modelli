import { Component, OnInit } from '@angular/core';
import { Animale } from 'src/models/animale.models';
import { Utenti } from 'src/models/utenti.models';
import { Auto } from 'src/models/auto.models';
import { Apparecchio } from 'src/models/apparecchio.models';
import { Impiegato } from 'src/models/impiegato.models';
import { Azienda } from 'src/models/azienda.models';
import { Giocatori } from 'src/models/giocatori.modules';
import { Squadra } from 'src/models/squadre.models';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrls: ['./elenco.component.css']
})
export class ElencoComponent implements OnInit {

  animali: Array<Animale> = [
    new Animale('cane', 4, 'città', 'onnivoro', 15),
    new Animale('gatto', 4, 'città', 'onnivoro', 15),
    new Animale('pappagallo', 2, 'foresta', 'onnivoro', 5),  
    ];

  utenti: Array<Utenti> = [
    new Utenti ('Marco','Rossi', 'Via 1, Roma', 'Via 1, Roma', 3448890232, 2018, 2015, 2018 ),
    new Utenti ('Maria','Rosetta', 'Via 2, Milano', 'Via 2, Milano', 3448890232, 2018, 2015, 2018 ),
    new Utenti ('Aldo','Carusi', 'Via 3, Firenze', 'Via 3, Firenze', 3448890232, 2018, 2015, 2018 ),
    ];

  autos: Array<Auto> = [
    new Auto ('Audi','A3', 2013, 9092021, 2015),
    new Auto ('Mercedes','Classe A', 2018, 9092021, 2019),
    new Auto ('Ford', 'Fiesta', 2009, 21012902, 2010),

    ];
  
  apparecchi: Array<Apparecchio> = [
    new Apparecchio ('Samsung', 'Ed39', 2018, 122012, 2019),
    new Apparecchio ('Hitachi', 'Boo', 2016, 120912, 2019),
    new Apparecchio ('Sharp', 'Fridge', 2017, 121122, 2018)
  ];

  impiegati: Array<Impiegato> = [
    new Impiegato ('Mario', 'Rossi', 1988, 'Direttore Vendite', 2016, 5, 2000),
    new Impiegato ('Michele', 'Bevilacqua', 1982, 'Direttore Marketing', 2016, 5, 2000),
    new Impiegato ('Luigi', 'Einaudi', 1980, 'Direttore Generale', 2016, 5, 2000)
  ];

  aziende: Array<Azienda> = [
    new Azienda ('ISC', 'Roma, via di tor pagnotta 94', 'Roma, via di tor pagnotta 94', 2014, this.impiegati),
    new Azienda ('HTML.it', 'Roma, via Giacinta 94', 'Roma, via Giacintaa 94', 2014, this.impiegati),
    new Azienda ('Aranzulla srl', 'Milano, corso Milano 94', 'Milano, corso Milano 94', 2014, this.impiegati)

  ];

  giocatori: Array<Giocatori> = [
    new Giocatori ('Ciro', 'Immobile', 'Attaccante', 11, 'destro', 2016, '1 MLN €'),
    new Giocatori ('Miorslav', 'Klose', 'Attaccante', 11, 'destro', 2016, '2 MLN €'),
    new Giocatori ('Beppe', 'Signori', 'Attaccante', 11, 'destro', 1998, '5 MLD £')
  ];
  
  squadre: Array<Squadra> = [
    new Squadra ('SS Lazio', 'Roma, via di tor pagnotta 94', 1900, this.giocatori),
    new Squadra ('AS Roma', 'Roma, via Giacinta 94', 1927, this.giocatori),
    new Squadra ('AC Milan', 'Milano, corso Milano 94', 1889, this.giocatori)

  ];

  

  constructor() { }

  ngOnInit() {
  }

}
