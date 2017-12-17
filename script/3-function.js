'use strict';
function obliczOdsetki(kapital, procent) {
    var kapitalZOdsetkami = kapital + kapital * procent;
    
    return kapitalZOdsetkami;
    
}

// document.write(obliczOdsetki(10000000,0.015)); 

var inwestycjaAnety = obliczOdsetki(10000000,0.015);

var inwestycjaKuby = obliczOdsetki(1000,0.05);

console.log(inwestycjaKuby);

console.log(inwestycjaAnety); 



