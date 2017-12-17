'use strict';

var wzrostMateusza = 190;
var wzrostOlgi = 150;
var wzrostJadzi = 195;

if ( wzrostMateusza > wzrostJadzi) {
    console.log("Mateusza skrócić o głowę");
}

else if  (wzrostJadzi < wzrostOlgi) {
    
    console.log("Jadzię skrócić o głowę");
}

else {
    console.log("Niezły bałagan");
}


var kolor = "brzoskwiniowy";

switch (kolor) {
        
    case "pomarańczowy":
        console.log("Kolor pomarańczowy")
        break;
    
    case "niebieski":
        console.log("Kolor niebieski")
        break;
        
    case "czerwony":
        console.log("Kolor czerwony")
        break;
    
    default: 
        console.log("brak koloru")
}