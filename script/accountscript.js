/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

var formInput = document.querySelectorAll('form#account input');

var formInput2 = document.querySelectorAll('form#inloggen input');

var submitButton = document.querySelector('form#account button');

var submitButton2 = document.querySelector('form#inloggen button');

var foutMelding = document.querySelectorAll('div#accountpagina form#account p');

var foutMelding2 = document.querySelectorAll('div#accountpagina form#inloggen p');

var i;


submitButton.addEventListener('click', function (event) {
    if (formInput[0].value === "" ||
        formInput[1].value === "" ||
        formInput[2].value === "" ||
        formInput[3].value === "") {
        event.preventDefault();
        console.log("niks ingevuld");
        for (i = 0; i < formInput.length; i++) {
            if (formInput[i].value === "") {
                formInput[i].classList.toggle('microinter');
            }
            if (formInput[i].value === "") {
                foutMelding[i].classList.toggle('microinter2');
            }
        }

    }
});

submitButton2.addEventListener('click', function (event) {
    if (formInput2[0].value === "" ||
        formInput2[1].value === "" ||
        formInput2[2].value === "" ||
        formInput2[3].value === "") {
        event.preventDefault();
        console.log("niks ingevuld");
        for (i = 0; i < formInput2.length; i++) {
            if (formInput2[i].value === "") {
                formInput2[i].classList.toggle('microinter');
            }
            if (formInput[i].value === "") {
                foutMelding2[i].classList.toggle('microinter2');
            }
        }

    }
});