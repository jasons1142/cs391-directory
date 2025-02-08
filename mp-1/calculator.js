function addition() {
    const firstInput = document.getElementById("first-number").value;
    const secondInput = document.getElementById("second-number").value;
    
    const a = Number(firstInput);
    const b = Number(secondInput);

    let output = a + b;

    showOutput(output);
}

function subtraction() {
    const firstInput = document.getElementById("first-number").value;
    const secondInput = document.getElementById("second-number").value;
    
    const a = Number(firstInput);
    const b = Number(secondInput);

    let output = a - b;
    
    showOutput(output);
}

function multiplication() {
    const firstInput = document.getElementById("first-number").value;
    const secondInput = document.getElementById("second-number").value;
    
    const a = Number(firstInput);
    const b = Number(secondInput);

    let output = a * b;
    
    showOutput(output);
}

function division() {
    const firstInput = document.getElementById("first-number").value;
    const secondInput = document.getElementById("second-number").value;
    
    const a = Number(firstInput);
    const b = Number(secondInput);

    if (b === 0) {
        showOutput("Cannot dividide by 0")
        return;
    }

    let output = a / b;

    showOutput(output);
}

function power() {
    const firstInput = document.getElementById("first-number").value;
    const secondInput = document.getElementById("second-number").value;
    
    const a = Number(firstInput);
    const b = Number(secondInput);

    let output = 1;
    for (let i = 0; i < b; i++) {
        output *= a;
    }

    showOutput(output);
}

function clearInputs() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
}

function showOutput(output) {
    let result = document.getElementById("output");
    result.innerHTML = `${output}`

    if (output < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }
}