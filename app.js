"use strict";
$(document).ready(function () {



    $('.btn').click(function (e) {
        e.preventDefault();
        if (!$.trim($('input').val()) == '') {
            let k = v => {
                for (let i = 0; i < v; i++) { $('.smallbox').append(`<h2>${v}</h2>`) };
            }
            let z = e => Number(e) ? k(e) : $('.smallbox').append(`<h2>${e}</h2>`);
            z($('input').val());
        }
        $('input').val('')
    })
});


