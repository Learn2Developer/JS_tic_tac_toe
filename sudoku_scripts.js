// Get array of num_select class:
var btn_select = document.getElementsByClassName("num_select");

// Set first number to be 1.
var num_selected = 1;

var prev_selected = 0;


function first_num() {
    // Disables button 1 by default
    btn_select[0].setAttribute('disabled', '');
    // Selects 0 as the first number
    index_selected = 0;
}

function num_select(id) {
    // Re-enable last button that was pressed.
    btn_select[prev_selected].removeAttribute('disabled');
    // Reset prev_selected button to nothing
    prev_selected = null;
    // Grab the currently selected number from button id
    index_selected = parseInt(id - 1);
    // Set button that was pressed to be disabled.
    btn_select[index_selected].setAttribute('disabled', '');
    // Set prev_selected number to most recently pressed button, aka num_selected
    prev_selected = index_selected;
    num_selected = index_selected + 1;
}

function enter_num(id) {
    var square_selected = document.getElementById(id);
    square_selected.innerHTML = square_selected.innerText = num_selected;
}