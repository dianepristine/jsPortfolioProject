// Pet will become hungry over time. Implement feeding function to address the need.

// function feedPet() {
    
// }

var health = 10;
var elem = document.getElementById('Timer');
var timerId = setInterval(countdown, 1000);


function countdown() {

    if (health < 0) {
        clearInterval(timerId);
        alert("Your Tomagotchi has died :(")

    } else {
        elem.innerHTML = health + ' health status';
        health--;
    }

    if (health == 5) {
        alert("Don't forget to feed your Tomagotchi!")
    }

}

function addHealth() {

    if (health >= 100) {
        alert("Your Tomagotchi is full");
    }
    else {
        health = health + 5;
    }
}
