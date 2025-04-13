
//Planning to use this function to validate name input has been filled out
// and is at least 2 characters long
function validateName(name) {
    if (name.length < 2) {
        console.log("Name must be at least 2 characters long.");
        return false;
    }
    return true;
}
// Greating users to my resume
function greetUsers() {
    console.log("Welcome to my resume!");
}

// Function to calculate the current age based on a fixed birth year
function currentAge() {
    const birthYear = 1992;
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}
//Function to calculate the age in dog years
function ageDogYears() {
    const dogYears = currentAge() * 7;
    return dogYears;
}
//Greeting users Based on time of day
function greetingTimeOfDay() {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
        return "Good morning!";
    } else if (currentHour < 18) {
        return "Good afternoon!";
    } else {
        return "Good evening!";
    }
}