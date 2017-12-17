var ilosc1 = 3500;
var ilosc2 = 3000;
var ilosc3 = 7500;
var ilosc4 = 2500;

ilosc2 = 3000;

function policzSumeKasy(iloscOsoby1, iloscOsoby2, iloscOsoby3, iloscOsoby4, wiek) {
    'use strict';
    var sumaKasy;
    
    sumaKasy = iloscOsoby1 + iloscOsoby2 + iloscOsoby3 + iloscOsoby4;
    
    var osoba = [sumaKasy, wiek];
    
    return osoba;
}

var wynikObliczen = policzSumeKasy(ilosc1, ilosc2, ilosc3, ilosc4, 25);

console.log(wynikObliczen);