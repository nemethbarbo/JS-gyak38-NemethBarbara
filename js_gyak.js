/*Feladat: Hozzunk létre függvényt, amely bemenő paramétere egy tömb,
visszatérése pedig egy egész szám, ennyi prímszám található a tömbben.*/
function primEldont(szam){
    if (szam < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(szam); i++) {
        if (szam % i == 0) {
            return false;
        }
    }
    return true;
}

function primMegszamolTombben(tomb){
    let primekSzama = 0;
    for (let i = 0; i < tomb.length; i++) {
        if (primEldont(tomb[i])) {
            primekSzama++;
        }
    }
    console.log(primekSzama);
    return primekSzama;
}

const tomb = [45, 67, 3, 89, 12, 46, 90, 2, 24, 14, 5];

function primKiirTombben(){
    document.getElementById("primek").innerHTML = "Prím számok száma a tömbben: "+primMegszamolTombben(tomb);
}

/*2. Feladat: Készítsünk alkalmazást, amely űrlap segítségével egy leltárszámról eldönti jó –e a
formátuma! A leltárszám első 4 karaktere tetszőleges angol nagybetű, utána kötőjel, majd
6 darab egész szám következik, végül az aktuális dátum egyben!
Helyes formátum  ABCD-123456-20230523*/

function leltarSzamEllenoriz() {
    let leltarSzam = document.getElementById("leltarSzam").value;
    var helyesE = false;
    var formatum = /^[A-Z]{4}-[0-9]{6}-(19|20)\d\d(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/;
    var maiDatum = new Date();
    var year = Number(leltarSzam.slice(12, 16));
    var month = Number(leltarSzam.slice(16, 18));
    var day = Number(leltarSzam.slice(18, 20));
    if (formatum.test(leltarSzam) && year == maiDatum.getFullYear() && month == maiDatum.getMonth() + 1 && day == maiDatum.getDate()) {
        helyesE = true;
    }
    return helyesE;
}
function leltarSzamEllenorizKiir() {
    var leltarSzamHelyesE = leltarSzamEllenoriz(leltarSzam);
    if (leltarSzamHelyesE) {
        alert("A megadott leltárszám helyes!");
    }
    else {
        alert("A megadott leltárszám helytelen, a helyes formátum: FGTP-123456-20230523, vagyis 4 db angol nagybetű kötőjel 6 db szám kötőjel aktuális dátum egyben.");
    }
}


