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
    document.getElementById("emiResult").innerText = "Your Monthly EMI is: ₹ " + emi.toFixed(2);
}    