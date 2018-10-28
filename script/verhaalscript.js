/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/


/* Micro interactie 1 */

var buttonSneller = document.querySelector('body#verhaal button');

var achtergrondGIF = document.querySelector('body#verhaal');

buttonSneller.addEventListener('click', function () {
    achtergrondGIF.classList.toggle('zes');
}
);
