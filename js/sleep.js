// Pet will become tired over time. Pet will need to be put to bed and rest.



// Function to put the pet to bed
function putToBed() {
    // Perform sleep actions here
    // You can increase health and happiness during sleep:
    health += 5;
    happiness += 3;

    // Ensure health and happiness don't exceed 100
    if (health > 100) health = 100;
    if (happiness > 100) happiness = 100;

    // Update the UI
    updateStatus();


}