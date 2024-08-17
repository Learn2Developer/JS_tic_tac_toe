// Keeps track of turn number for execution of X's turn.
var turn_num = 0;

// Strings
var already_clicked = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var o_array = ["O"];
var x_array = ["X"];

document.addEventListener("button")

// Function runs when any button element is clicked
function btn_press(clicked_id) {
    var button = document.getElementById(clicked_id);

    // Checks if the button's text is already taken up by X or O
    if (button.textContent == "O" || button.textContent == "X") {
        alert("That square is taken.");


        // If not, then it runs code to change button to an O
    } else {
        var intro_para = document.getElementById("intro");
        intro_para.innerHTML = intro_para.innerText = "&nbsp; \n &nbsp;"
        button.innerText = "O";

        // It checks the index of the button you pressed, and removes it from the already_clicked array
        var index = already_clicked.indexOf(clicked_id);

        // Push the btn_id to the o_array.
        o_array.push(already_clicked[index]);
        console.log(o_array);

        // Remove that btn_id from the already_clicked array.
        already_clicked.splice(index, 1);

        if (check_win(o_array) == true) {
            intro_para.innerText = "Game over \n" + o_array[0] + " Wins!!!"
        } else {
            if (check_tie() == true) {
                intro_para.innerText = "Game Over \n Tie Game."
            }
        }

        // Selecting a random number between 0 and the length of the already_clicked array.
        var index_rand = Math.floor(Math.random() * (already_clicked.length));
        var x_button = document.getElementById(already_clicked[index_rand]);

        // Changes button to an O.
        console.log(x_button);
        x_button.innerText = "X";

        // Push the btn_id to the x_array.
        x_array.push(already_clicked[index_rand]);
        console.log(x_array);

        // Remove the btn_id from already_clicked array.
        already_clicked.splice(index_rand, 1);
        if (check_win(x_array) == true) {
            intro_para.innerText = "Game over \n" + x_array[0] + " Wins!!!"
        } else {
            return false;
        }
    }
}


function check_win(array) {
    if (array.length <= 3) {
        return false;
    }

    if (array.includes("1") && array.includes("2") && array.includes("3")) {
        return true;
    } else if (array.includes("4") && array.includes("5") && array.includes("6")) {
        return true;
    } else if (array.includes("7") && array.includes("8") && array.includes("9")) {
        return true;
    } else if (array.includes("1") && array.includes("4") && array.includes("7")) {
        return true;
    } else if (array.includes("2") && array.includes("5") && array.includes("8")) {
        return true;
    } else if (array.includes("3") && array.includes("6") && array.includes("9")) {
        return true;
    } else if (array.includes("1") && array.includes("5") && array.includes("9")) {
        return true;
    } else if (array.includes("3") && array.includes("5") && array.includes("7")) {
        return true;
    }
}

function check_tie() {
    if (already_clicked.length == 0) {
        return true;
    }
}