// Pet may become dirty. Implement a cleaning function to maintain cleanliness.

function cleanPet() {
    const activities = ["bathe", "groom", "pamper"];
    const selectedActivity = activities[Math.floor(Math.random() * activities.length)];
    
    // Perform cleaning actions here
    // For example, you can increase health and happiness:
    switch (selectedActivity) {
        case "bathe":
            health += 8;
            happiness += 3;
            alert("You gave your pet a bath!");
            break;
        case "groom":
            health += 3;
            happiness += 2;
            alert("You brushed your pet!");
            break;
        case "pamper":
            health += 5;
            happiness += 5;
            alert("It's spa day! You've pampered your pet!")
            break;
        default:
            alert("You've tried to clean you pet, but it didn't work out.");
            break;
    }

    // Ensure health and happiness don't exceed 100
    if (health > 100) health = 100;
    if (happiness > 100) happiness = 100;

    // Update the UI
    updateStatus();
}



// let isPetDirty = true;
// let cleaningTimer;

// function cleanPet() {
//     if (isPetDirty) {
//         alert(`Your pet is dirty! Click the clean button to clean it.`);
//     } else {
//         alert(`Your pet is now clean!`);
//     }
// }

// function startCleaningTimer() {
//     // timer is set for 15 min
//     cleaningTimer = setTimeout(() => {
//         isPetDirty = false;
//         cleanPet();
//     }, 1000);
// }

// const cleanButton = document.getElementById('cleanButton');
// cleanButton.addEventListener('click', () => {
//     clearTimeout(cleaningTimer); // reset cleaning timer
//     isPetDirty = false; // pet is clean
//     startCleaningTimer(); // restart timer
// });
