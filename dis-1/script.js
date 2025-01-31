function checkAge() {
    console.log("hello");
    const ageInput = document.getElementById("age-input").value;

    const age = Number(ageInput);

    let errorMessage = "";

    if (isNaN(age)) {
        errorMessage = "Not a number!";
    } else if (age % 1 != 0) {
        errorMessage = "No decimal points";
    } else if (age < 0) {
        errorMessage = "No negatives!";
    } else if (age < 18) {
        errorMessage = "Too Young!";
    } else if (age > 120) {
        errorMessage = "Too Old!";
    }

    if (errorMessage === "") {
        document.getElementById("main-content").style.visibility = "visible";
        document.getElementById("error-content").style.visibility = "hidden";
    } else {
        document.getElementById("error-message").innerHTML = errorMessage;
        document.getElementById("main-content").style.visibility = "hidden";
        document.getElementById("error-content").style.visibility = "visible";
    }


}