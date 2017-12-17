'use strict';
  

/* var konPolski = {
    
    rasa: "Konik polski",
    nogi: 4,
    masc: "kara",
    wzrost: "145cm",
    odmiany: "brak",
    paszportKonia: function() {console.log(this.rasa + " " + this.wzrost)}
}

var hanover = {
    
    rasa: "hanowerski",
    nogi: 4,
    masc: "gniada",
    wzrost: "175cm",
    odmiany: "chrapka",
    paszportKonia: function() {console.log(this.rasa + " " + this.wzrost)}
}

hanover.paszportKonia();
konPolski.paszportKonia();

console.log(konPolski.odmiany);

hanover.waga = 600;
hanover.wyswietlDetale = function() {console.log(this.masc + " " + this.waga + " " + this.rasa)
}

hanover.wyswietlDetale(); */


class Kon {
    
    constructor(imie, masc, plec, rasa) {
        
        this.imie = imie;
        this.masc = masc;
        this.plec = plec;
        this.rasa = rasa;
    }
    
    wyswietlCalosc() {
        document.write("Imię: " + this.imie+ " " + "maść: " + this.masc + " " + "płeć: " + this.plec + " " + this.rasa);
    }
}

var konikPolski = new Kon("Kajzer", "myszata", "wałach", "konik polski");

var konFryzyjski = new Kon("Perła", "kara", "klacz", "koń fryzyjski");

console.log(konikPolski);
console.log(konFryzyjski);

konikPolski.wyswietlCalosc();

konFryzyjski.wyswietlCalosc();

