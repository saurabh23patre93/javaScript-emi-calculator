function AmountChange() {
    document.getElementById("txtAmount").value = document.getElementById("rangeAmount").value;
}

function YearsChange() {
    document.getElementById("txtYears").value = document.getElementById("rangeYears").value;
}

function InterestRateChange() {
    document.getElementById("txtInterestRate").value = document.getElementById("rangeInterestRate").value;
}

function calculateEMI() {
    var principalAmount = parseInt(document.getElementById("txtAmount").value);
    var years = parseInt(document.getElementById("txtYears").value) * 12; // Convert years to months
    var interestRate = parseFloat(document.getElementById("txtInterestRate").value)/12/100; // Convert annual interest rate to monthly and percentage to decimal

    // EMI calculation formula
    var emi = (principalAmount * interestRate * Math.pow(1 + interestRate, years)) / (Math.pow(1 + interestRate, years) - 1);

    // Display the result
    document.getElementById("emiResult").innerHTML = "Your Monthly EMI is: <span class='badge bg-primary'>₹ " + emi.toFixed(2) + "</span></b> For a loan amount of <span class='badge bg-secondary'>₹ " + principalAmount + "</span> over <span class='badge bg-success'>" + (years/12) + " years</span> at an interest rate of <span class='badge bg-danger'>" + (interestRate*12*100).toFixed(2) + "%</span>.";
}    

function AmountTextBoxChange() {
    document.getElementById("rangeAmount").value = document.getElementById("txtAmount").value;
}

function YearsTextBoxChange() {
    document.getElementById("rangeYears").value = document.getElementById("txtYears").value;
}   

function InterestRateTextBoxChange() {
    document.getElementById("rangeInterestRate").value = document.getElementById("txtInterestRate").value;
}
