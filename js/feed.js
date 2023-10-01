// Pet will become hungry over time. Implement feeding function to address the need.

// function feedPet() {
    
// }

// var health = 10;
// var elem = document.getElementById('Timer');
// var timerId = setInterval(countdown, 1000);


// function countdown() {

//     if (health < 0) {
//         clearInterval(timerId);
//         alert("Your Tomagotchi has died :(")

//     } else {
//         elem.innerHTML = health + ' health status';
//         health--;
//     }

//     if (health == 5) {
//         alert("Don't forget to feed your Tomagotchi!")
//     }

// }

// function addHealth() {

//     if (health >= 100) {
//         alert("Your Tomagotchi is full");
//     }
//     else {
//         health = health + 5;
//     }
// }


// Function to increase pet's health and happiness level.
function feedPet() {
    health += 10;
    happiness += 5;
    if (health > 100) health = 100;
    if (happiness > 100) happiness = 100;
    updateStatus();
}

// Function to check if the Tamagotchi needs to be fed and display alerts
function checkFeedAlert() {
    if (health < 50) {
        alert("Your Tamagotchi is hungry! Please feed it.");
    } else if (happiness < 50) {
        alert("Your Tamagotchi is unhappy! Spend some time playing with it.");
    }
}

// Add an event listener to call checkFeedAlert every 2 seconds
setInterval(checkFeedAlert, 2000);