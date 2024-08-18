// Game starts off with number 1 button being selected
var num_selected = 1;
var num_btn_selected = document.getElementById("one");
console.log(num_btn_selected);
// #1 button needs to be disabled


function num_select(id) {
    num_selected = parseInt(id);
    console.log(num_selected);
}