/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/


/* Micro interactie 1 */

var buttonLijst = document.querySelector('section#verhaal-detail button');

var navigatieLijst = document.querySelector('header nav ul li:nth-of-type(3) a img');

var listAdded = document.querySelector('img.addlist');

buttonLijst.addEventListener('click', function () {
    navigatieLijst.classList.toggle('micro');
    if (listAdded.src.includes("toegevoegdlijst-09.png")) {
        listAdded.src = "afbeeldingen/toevoegenlijst-05-05.png";
    } else {
        listAdded.src = "afbeeldingen/toegevoegdlijst-09.png";
    }

});
