/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/


/* Micro interactie 1 */

var buttonLijst = document.querySelector('section#verhaal-detail button');

var navigatieLijst = document.querySelector('nav ul li:nth-child(3) a');

var listAdded = document.querySelector('img.addlist');

buttonLijst.addEventListener('click', function () {
    navigatieLijst.classList.toggle('micro');
    if (listAdded.src.includes("toegevoegdlijst-09.png")) {
        listAdded.src = "styles/afbeeldingen/toevoegenlijst-05-05.png";
        navigatieLijst.src ="styles/afbeeldingen/testlijst2";
    } else {
        listAdded.src = "styles/afbeeldingen/toegevoegdlijst-09.png";
        navigatieLijst.src ="styles/afbeeldingen/testlijstitem2";
    }

});
