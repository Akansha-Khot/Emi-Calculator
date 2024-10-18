
function calculateEMI() {
    let loanAmount = document.getElementById("loanAmount").value;
    let annualInterestRate = document.getElementById("interestRate").value;
    let loanTenure = document.getElementById("loanTenure").value;

    if (loanAmount === '' || annualInterestRate === '' || loanTenure === '') {
        alert("Please fill all fields");
        return;
    }

    loanAmount = parseFloat(loanAmount);
    annualInterestRate = parseFloat(annualInterestRate);
    loanTenure = parseFloat(loanTenure);

    let monthlyInterestRate = (annualInterestRate / 100) / 12;
    let numberOfMonths = loanTenure * 12;

    let emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
              (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

    emi = emi.toFixed(2); 

    document.getElementById("emiResult").innerHTML = "Your EMI is: ₹" + emi;
    
}


