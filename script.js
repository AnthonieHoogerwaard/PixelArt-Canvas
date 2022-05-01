var cursor = 0;
var meet = 0;
var achtergrond = document.getElementById("nu1")
function kleur() {
    switch (cursor) {
        case 0: achtergrond.style.backgroundColor = "white"; break;
        case 1: achtergrond.style.backgroundColor = "red"; break;
        case 2: achtergrond.style.backgroundColor = "orange"; break;
        case 3: achtergrond.style.backgroundColor = "yellow"; break;
        case 4: achtergrond.style.backgroundColor = "green"; break;
        case 5: achtergrond.style.backgroundColor = "purple"; break;
        case 6: achtergrond.style.backgroundColor = "pink"; break;
        case 7: achtergrond.style.backgroundColor = "blue"; break;
        case 8: achtergrond.style.backgroundColor = "gray"; break;
        case 9: achtergrond.style.backgroundColor = "black"; break;
        case 10: achtergrond.style.backgroundColor = "brown"; break;
        case 11: achtergrond.style.backgroundColor = "lightblue"; break;
        case 12: achtergrond.style.backgroundColor = "darkblue"; break;
        case 13: achtergrond.style.backgroundColor = "darkred"; break;
        case 14: achtergrond.style.backgroundColor = "lightsalmon"; break;
        case 15: achtergrond.style.backgroundColor = "white"; break;
        case 16: achtergrond.style.backgroundColor = "darkgreen"; break;
        case 17: achtergrond.style.backgroundColor = "firebrick"; break;
        case 18: achtergrond.style.backgroundColor = "crimson"; break;
        case 19: achtergrond.style.backgroundColor = "orangered"; break;
        case 20: achtergrond.style.backgroundColor = "tomato"; break;
        case 21: achtergrond.style.backgroundColor = "darkorange"; break;
        case 22: achtergrond.style.backgroundColor = "coral"; break;
        case 23: achtergrond.style.backgroundColor = "gold"; break;
        case 24: achtergrond.style.backgroundColor = "greenyellow"; break;
        case 25: achtergrond.style.backgroundColor = "lime"; break;
        case 26: achtergrond.style.backgroundColor = "limegreen"; break;
        case 27: achtergrond.style.backgroundColor = "navy"; break;
        case 28: achtergrond.style.backgroundColor = "mediumblue"; break;
        case 29: achtergrond.style.backgroundColor = "deepskyblue"; break;
        case 30: achtergrond.style.backgroundColor = "pink"; break;
        case 31: achtergrond.style.backgroundColor = "deeppink"; break;
        case 32: achtergrond.style.backgroundColor = "violet"; break;
        case 33: achtergrond.style.backgroundColor = "magenta"; break;
        case 34: achtergrond.style.backgroundColor = "darkgoldenrod"; break;
        case 35: achtergrond.style.backgroundColor = "sienna"; break;
        case 36: achtergrond.style.backgroundColor = "saddlebrown"; break;
    }
}
function red() {
    cursor = 1;
    kleur();
}
function orange() {
    cursor = 2;
    kleur();
}
function yellow() {
    cursor = 3;
    kleur();
}
function green() {
    cursor = 4;
    kleur();
}
function purple() {
    cursor = 5;
    kleur();
}
function pink() {
    cursor = 6;
    kleur();
}
function blue() {
    cursor = 7;
    kleur();
}
function gray() {
    cursor = 8;
    kleur();
}
function black() {
    cursor = 9;
    kleur();
}
function brown() {
    cursor = 10;
    kleur();
}
function lightblue() {
    cursor = 11;
    kleur();
}
function darkblue() {
    cursor = 12;
    kleur();
}
function darkred() {
    cursor = 13;
    kleur();
}
function lightsalmon() {
    cursor = 14;
    kleur();
}
function white() {
    cursor = 15;
    kleur();
}
function darkgreen() {
    cursor = 16;
    kleur();
}
function firebrick() {
    cursor = 17;
    kleur();
}
function crimson() {
    cursor = 18;
    kleur();
}
function orangered() {
    cursor = 19;
    kleur();
}
function tomato() {
    cursor = 20;
    kleur();
}
function darkorange() {
    cursor = 21;
    kleur();
}
function coral() {
    cursor = 22;
    kleur();
}
function gold() {
    cursor = 23;
    kleur();
}
function greenyellow() {
    cursor = 24;
    kleur();
}
function lime() {
    cursor = 25;
    kleur();
}
function limegreen() {
    cursor = 26;
    kleur();
}
function navy() {
    cursor = 27;
    kleur();
}
function mediumblue() {
    cursor = 28;
    kleur();
}
function deepskyblue() {
    cursor = 29;
    kleur();
}
function pink() {
    cursor = 30;
    kleur();
}
function deeppink() {
    cursor = 31;
    kleur();
}
function violet() {
    cursor = 32;
    kleur();
}
function magenta() {
    cursor = 33;
    kleur();
}
function darkgoldenrod() {
    cursor = 34;
    kleur();
}
function sienna() {
    cursor = 35;
    kleur();
}
function saddlebrown() {
    cursor = 36;
    kleur();
}
var img1 = document.getElementById("charmander");
var img2 = document.getElementById("snorlax");
var img3 = document.getElementById("snake");
function toon() {
    img1.style.opacity = 1;
    img2.style.opacity = 1;
    img3.style.opacity = 1;
}
function hide() {
    img1.style.opacity = 0;
    img2.style.opacity = 0;
    img3.style.opacity = 0;
}
var als = 0;
var als2 = 0;
function alweereenfunctie(waarde) {
    alweer = waarde.value;
    if (alweer == 1){
        if (als == 1) {
            clear();
            big();
            als2 = 1;
        } else {
            big();
            als = 1;
            als2 = 1;
        }
    }
    if (alweer == 2) {
        if (als == 1) {
            clear();
            medium();
            als2 = 2;
        } else {
            medium();
            als = 1;
            als2 = 2;
        }
    }
    if (alweer == 3) {
        if (als == 1) {
            clear();
            small();
            als2 = 3;
        } else {
            small();
            als = 1;
            als2 = 3;
        }
    }
}
function reload() {
    location.reload();
}
function opnieuw() {
    if (als == 1) {
        als = 0;
        if (als2 == 0) {
            clear();
            grootte();
            als = 1;
        }
        if (als2 == 1) {
            clear();
            big();
            als = 1;
        }
        if (als2 == 2) {
            clear();
            medium();
            als = 1;
        }
        if (als2 == 3) {
            clear();
            small();
            als = 1;
        }
    }
}
function medium() {
    var raster1 = document.getElementById("raster").value;
    raster1 = 24;
    meet = 1;
    tableCreate(raster1, raster1);
}
function small() {
    var raster2 = document.getElementById("raster").value;
    raster2 = 80;
    meet = 2;
    tableCreate(raster2, raster2);
}
function big() {
    var raster3 = document.getElementById("raster").value;
    raster3 = 10;
    meet = 3;
    tableCreate(raster3, raster3);
}
function grootte() {
    if (als == 1) {
        clear();
    }
    var raster = document.getElementById("raster").value;
    als2 = 0;
    meet = 0;
    tableCreate(raster, raster);
    als = 1;
}
function clear() {
    var tbll = document.getElementsByTagName("table");
    tbll[1].remove();
}
function tableCreate(row, cell) {
    var groot = document.getElementById("groot").value;
    var grootklein = 55;
    var grootmed = 20;
    var grootgroot = 2;
    var filler = document.getElementById("fill").value;
    let body = document.body;
    let tbl = document.createElement('table');
    tbl.style.border = '3px solid black';
    tbl.style.position = "absolute";
    tbl.style.top = "0px";
    tbl.style.left = "300px";
    for (let i = 0; i < row; i++) {
        let tr = tbl.insertRow();
        for (let j = 0; j < cell; j++) {
            let td = tr.insertCell();
            switch (meet) {
                case 0: td.style.width = groot + "px";
                    td.style.height = groot + "px";
                    break;
                case 1: td.style.width = grootmed + "px";
                    td.style.height = grootmed + "px";
                    break;
                case 2: td.style.width = grootgroot + "px";
                    td.style.height = grootgroot + "px";
                    break;
                case 3: td.style.width = grootklein + "px";
                    td.style.height = grootklein + "px";
                    break;
            }

            td.style.border = '0px solid black';
            td.style.backgroundColor = filler;
            td.onclick = function klik() {
                switch (cursor) {
                    case 0: td.style.backgroundColor = "white"; break;
                    case 1: td.style.backgroundColor = "red"; break;
                    case 2: td.style.backgroundColor = "orange"; break;
                    case 3: td.style.backgroundColor = "yellow"; break;
                    case 4: td.style.backgroundColor = "green"; break;
                    case 5: td.style.backgroundColor = "purple"; break;
                    case 6: td.style.backgroundColor = "pink"; break;
                    case 7: td.style.backgroundColor = "blue"; break;
                    case 8: td.style.backgroundColor = "gray"; break;
                    case 9: td.style.backgroundColor = "black"; break;
                    case 10: td.style.backgroundColor = "brown"; break;
                    case 11: td.style.backgroundColor = "lightblue"; break;
                    case 12: td.style.backgroundColor = "darkblue"; break;
                    case 13: td.style.backgroundColor = "darkred"; break;
                    case 14: td.style.backgroundColor = "lightsalmon"; break;
                    case 15: td.style.backgroundColor = "white"; break;
                    case 16: td.style.backgroundColor = "darkgreen"; break;
                    case 17: td.style.backgroundColor = "firebrick"; break;
                    case 18: td.style.backgroundColor = "crimson"; break;
                    case 19: td.style.backgroundColor = "orangered"; break;
                    case 20: td.style.backgroundColor = "tomato"; break;
                    case 21: td.style.backgroundColor = "darkorange"; break;
                    case 22: td.style.backgroundColor = "coral"; break;
                    case 23: td.style.backgroundColor = "gold"; break;
                    case 24: td.style.backgroundColor = "greenyellow"; break;
                    case 25: td.style.backgroundColor = "lime"; break;
                    case 26: td.style.backgroundColor = "limegreen"; break;
                    case 27: td.style.backgroundColor = "navy"; break;
                    case 28: td.style.backgroundColor = "mediumblue"; break;
                    case 29: td.style.backgroundColor = "deepskyblue"; break;
                    case 30: td.style.backgroundColor = "pink"; break;
                    case 31: td.style.backgroundColor = "deeppink"; break;
                    case 32: td.style.backgroundColor = "violet"; break;
                    case 33: td.style.backgroundColor = "magenta"; break;
                    case 34: td.style.backgroundColor = "darkgoldenrod"; break;
                    case 35: td.style.backgroundColor = "sienna"; break;
                    case 36: td.style.backgroundColor = "saddlebrown"; break;
                }
            }
            luister();
            function luister() {
                body.addEventListener("mousedown", function (event) {
                    if (event.which == 1) {
                        td.onmousemove = function klik1() {
                            switch (cursor) {
                                case 0: td.style.backgroundColor = "white"; break;
                                case 1: td.style.backgroundColor = "red"; break;
                                case 2: td.style.backgroundColor = "orange"; break;
                                case 3: td.style.backgroundColor = "yellow"; break;
                                case 4: td.style.backgroundColor = "green"; break;
                                case 5: td.style.backgroundColor = "purple"; break;
                                case 6: td.style.backgroundColor = "pink"; break;
                                case 7: td.style.backgroundColor = "blue"; break;
                                case 8: td.style.backgroundColor = "gray"; break;
                                case 9: td.style.backgroundColor = "black"; break;
                                case 10: td.style.backgroundColor = "brown"; break;
                                case 11: td.style.backgroundColor = "lightblue"; break;
                                case 12: td.style.backgroundColor = "darkblue"; break;
                                case 13: td.style.backgroundColor = "darkred"; break;
                                case 14: td.style.backgroundColor = "lightsalmon"; break;
                                case 15: td.style.backgroundColor = "white"; break;
                                case 16: td.style.backgroundColor = "darkgreen"; break;
                                case 17: td.style.backgroundColor = "firebrick"; break;
                                case 18: td.style.backgroundColor = "crimson"; break;
                                case 19: td.style.backgroundColor = "orangered"; break;
                                case 20: td.style.backgroundColor = "tomato"; break;
                                case 21: td.style.backgroundColor = "darkorange"; break;
                                case 22: td.style.backgroundColor = "coral"; break;
                                case 23: td.style.backgroundColor = "gold"; break;
                                case 24: td.style.backgroundColor = "greenyellow"; break;
                                case 25: td.style.backgroundColor = "lime"; break;
                                case 26: td.style.backgroundColor = "limegreen"; break;
                                case 27: td.style.backgroundColor = "navy"; break;
                                case 28: td.style.backgroundColor = "mediumblue"; break;
                                case 29: td.style.backgroundColor = "deepskyblue"; break;
                                case 30: td.style.backgroundColor = "pink"; break;
                                case 31: td.style.backgroundColor = "deeppink"; break;
                                case 32: td.style.backgroundColor = "violet"; break;
                                case 33: td.style.backgroundColor = "magenta"; break;
                                case 34: td.style.backgroundColor = "darkgoldenrod"; break;
                                case 35: td.style.backgroundColor = "sienna"; break;
                                case 36: td.style.backgroundColor = "saddlebrown"; break;
                            }
                        }
                    }
                });
                body.addEventListener("mouseup", function (event) {
                    if (event.which == 1) {
                        td.onmousemove = false
                        td.onclick = function klik2() {
                            switch (cursor) {
                                case 0: td.style.backgroundColor = "white"; break;
                                case 1: td.style.backgroundColor = "red"; break;
                                case 2: td.style.backgroundColor = "orange"; break;
                                case 3: td.style.backgroundColor = "yellow"; break;
                                case 4: td.style.backgroundColor = "green"; break;
                                case 5: td.style.backgroundColor = "purple"; break;
                                case 6: td.style.backgroundColor = "pink"; break;
                                case 7: td.style.backgroundColor = "blue"; break;
                                case 8: td.style.backgroundColor = "gray"; break;
                                case 9: td.style.backgroundColor = "black"; break;
                                case 10: td.style.backgroundColor = "brown"; break;
                                case 11: td.style.backgroundColor = "lightblue"; break;
                                case 12: td.style.backgroundColor = "darkblue"; break;
                                case 13: td.style.backgroundColor = "darkred"; break;
                                case 14: td.style.backgroundColor = "lightsalmon"; break;
                                case 15: td.style.backgroundColor = "white"; break;
                                case 16: td.style.backgroundColor = "darkgreen"; break;
                                case 17: td.style.backgroundColor = "firebrick"; break;
                                case 18: td.style.backgroundColor = "crimson"; break;
                                case 19: td.style.backgroundColor = "orangered"; break;
                                case 20: td.style.backgroundColor = "tomato"; break;
                                case 21: td.style.backgroundColor = "darkorange"; break;
                                case 22: td.style.backgroundColor = "coral"; break;
                                case 23: td.style.backgroundColor = "gold"; break;
                                case 24: td.style.backgroundColor = "greenyellow"; break;
                                case 25: td.style.backgroundColor = "lime"; break;
                                case 26: td.style.backgroundColor = "limegreen"; break;
                                case 27: td.style.backgroundColor = "navy"; break;
                                case 28: td.style.backgroundColor = "mediumblue"; break;
                                case 29: td.style.backgroundColor = "deepskyblue"; break;
                                case 30: td.style.backgroundColor = "pink"; break;
                                case 31: td.style.backgroundColor = "deeppink"; break;
                                case 32: td.style.backgroundColor = "violet"; break;
                                case 33: td.style.backgroundColor = "magenta"; break;
                                case 34: td.style.backgroundColor = "darkgoldenrod"; break;
                                case 35: td.style.backgroundColor = "sienna"; break;
                                case 36: td.style.backgroundColor = "saddlebrown"; break;
                            }
                        }
                    }
                });
            }
        }
    }
    body.appendChild(tbl);
}
