// submit button event listener
document.getElementById("loan-form").addEventListener("submit", function(event) {
   // hide results 
   document.getElementById("results").style.display = "none"; 

   // show loader 
   document.getElementById("loading").style.display = "block";

   setTimeout(calculateResults, 2000); 

   event.preventDefault();
}); 

// calculate results
function calculateResults() {
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
      
      // show results
      document.getElementById("results").style.display = "block";

      // hide loader 
      document.getElementById("loading").style.display = "none";
   } else {
      showError("Please check your numbers.")
   }

}

function showError(error) {
   // hide results
   document.getElementById("results").style.display = "none";

   // hide loader 
   document.getElementById("loading").style.display = "none";

   // create a div
   const errorDiv = document.createElement("div");
   errorDiv.className = "alert alert-danger";

   errorDiv.innerText = error; 

   const card = document.querySelector(".card");
   const heading = document.querySelector(".heading"); 

   // insert error above heading 
   card.insertBefore(errorDiv, heading);

   // clear error after 3 seconds 
   setTimeout(clearError, 3000); 
}

function clearError() {
   document.querySelector(".alert").remove(); 
}


