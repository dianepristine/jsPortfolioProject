// Pet may become dirty. Implement a cleaning function to maintain cleanliness.

let isPetDirty;
let cleaningTimer;

function cleanPet() {
    if (isPetDirty) {
        // alert(`Your pet is dirty! Click the clean button to clean it.`);
    } else {
        // alert(`Your pet is now clean!`);

        // reset the cleaning timer
        clearTimeout(cleaningTimer);
        // event listener for the "clean button"
        const cleanButton = document.getElementById('cleanButton');
        cleanButton.addEventListener('click', cleanPet);
    }
}

function startCleaningTimer() {
    // timer is set for 15 min
    cleaningTimer = setTimeout(cleanPet, 1000);
    isPetDirty = false;
    console.log(cleaningTimer);
}

startCleaningTimer();
console.log(isPetDirty);
