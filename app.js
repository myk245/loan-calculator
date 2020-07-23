// submit button event listener
document.getElementById("loan-form").addEventListener("submit", calculateResults); 

// calculate results
function calculateResults(event) {
   console.log("Calculating...");
   // UI variables
   const amount = document.getElementById("amount");
   const interest = document.getElementById("interest");
   const years = document.getElementById("years");
   const monthlyPayment = document.getElementById("monthly-payment");
   const totalPayment = document.getElementById("total-payment");
   const totalInterest = document.getElementById("total-interest");

   // we need these variables as a decimal amount, so we need to parseFloat()
   const principal = parseFloat(amount.value); 
   const calculatedInterested = parseFloat(interest.value) / 100 / 12; 
   const calculatedPayments = parseFloat(years.value) * 12; 

   // calculate monthly payment 
   const x = Math.pow(1 + calculatedInterested, calculatedPayments);
   const monthly = (principal * x * calculatedInterested) / (x - 1);  

   if (isFinite(monthly)) {
      monthlyPayment.value = monthly.toFixed(2);
      totalPayment.value = (monthly * calculatedPayments).toFixed(2); 
      totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
   } else {
      console.log("Please check your numbers.")
   }

   event.preventDefault();
}



