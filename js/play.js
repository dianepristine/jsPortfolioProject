// Function will monitor pet's happiness level. Play with pet will make pet happier

// // Variables for Health and Happiness
// let health = 100;
// let happiness = 100;

// // Function to update the UI
// function updateStatus() {
//     document.getElementById("health").innerText = health;
//     document.getElementById("happiness").innerText = happiness;
// }


// Function will monitor pet's happiness level. Play with pet will make pet happier

function playWithPet() {
    const activities = ["fetch", "tug-of-war", "hide-and-seek"];
    const selectedActivity = activities[Math.floor(Math.random() * activities.length)];

    switch (selectedActivity) {
        case "fetch":
            health -= 2;
            happiness += 10;
            alert("You played fetch with your pet!");
            break;
        case "tug-of-war":
            health -= 5;
            happiness += 8;
            alert("You played tug-of-war with your pet!");
            break;
        case "hide-and-seek":
            health -= 1;
            happiness += 12;
            alert("You played hide-and-seek with your pet!");
            break;
        default:
            alert("You tried to play with your pet, but it didn't work out.");
            break;
    }
    if (health < 0) health = 0;
    if (happiness > 100) happiness = 100;

    updateStatus();
}