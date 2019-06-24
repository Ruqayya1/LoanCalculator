document.getElementById("loan-form").addEventListener("submit", calculateResults);

// calculate results
function calculateResults(e){
//  Ui variables
const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const years = document.getElementById('years');
const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');

const principal = parseFloat(amount.value);

const calculatedInterest = parseFloat(interest.value)/100/12;

const calculatedPayments = parseFloat(years.value)*12;

// compute monthly payment
const x = Math.pow(1+ calculatedInterest , calculatedPayments);
const monthly = (principal* x * calculatedInterest)/(x-1);
if (isFinite(monthly)){
    monthlyPayment.value =monthly.toFixed(2);
    totalPayment.value =(monthly*calculatedPayments).toFixed(2);
    totalInterest.value =((monthly*calculatedPayments)-principal).toFixed(2);
}
else{
    showError("please check your numbers");
}

    e.preventDefault();
}
function showError(error){
    const errorDiv = document.createElement('div');
    errorDiv.className ="alert alert-danger";
    // create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // get elements for printing the message above the heading
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    card.insertBefore(errorDiv,heading);

    // clear error after 3 sec
 setTimeout(clearError, 3000);
}
 function clearError(){
     document.querySelector('.alert').remove();
 }
