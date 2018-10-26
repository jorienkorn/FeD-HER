/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

var formInput = document.querySelectorAll('form#account input');

var submitButton = document.querySelector('form#account button');

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
        }

    }
});