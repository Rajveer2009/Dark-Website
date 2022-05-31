let choice = null
let nam = null

function done() {
    choice = document.getElementById("choice").value;
    nam = document.getElementById("name").value;

    if (choice == "y") {
        console.log("VERY GOOD")
        window.alert("VERY GOOD " + nam + " YOU ARE OFFICALY DARK IN THE DARKSIDE")
    }
    else {
        while (1 == 1) {
            window.alert("YOU SHALL SWITCH OR DIE SOON")
        }
    }
}
