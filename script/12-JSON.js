"use strict"

var jsonOsoby = {
    "osoby": [
        {
            imie: "Krystian",
            nazwisko: "Dziopa",
            wzrost: 180,
            oczy: "niebieskie",
            zainteresowania: [
                { nazwa: "podroze" },
                { nazwa: "gotowanie" }
            ]
        },
        {
            imie: "Dominik",
            nazwisko: "Gomuła",
            wzrost: 170,
            oczy: "brązowe",
            zainteresowania: [
                { nazwa: "gotowanie" },
                { nazwa: "języki" }
            ]
        },
        {
            imie: "Claudia",
            nazwisko: "Żelazowska",
            wzrost: 167,
            oczy: "brązowe",
            zainteresowania: [
                { nazwa: "programowanie" },
                { nazwa: "podroze" },
                { nazwa: "języki" }
            ]

        }
    ]
}

jsonOsoby.osoby.forEach(function(e) {
                        console.log(e.wzrost);
                        } );

jsonOsoby.osoby[2].zainteresowania.forEach( function (z) {
    console.log(z.nazwa);
});