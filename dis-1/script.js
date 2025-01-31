function checkAge() {
    const ageInput = document.getElementById("age-input").value;

    const age = Number(ageInput);

    let errorMessage = "";

    if (age = isNaN) {
        let errorMessage = "Invalid Input!";
    } else if (age % 1 != 0) {
        let errorMessage = "Invalid Input!";
    } else if (age < 0) {
        let errorMessage = "Invalid Input!";
    } else if (age < 18) {
        let errorMessage = "Invalid Input!";
    } else if (age > 120) {
        let errorMessage = "Invalid Input!";
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