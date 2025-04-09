function toggleCardDetails() {
    var paymentMethod = document.getElementById("payment_method").value;
    var cardFields = document.querySelectorAll('.hide-card-details'); 
    var carFields = document.querySelectorAll('.hide-card-details1'); 
    if (paymentMethod === "phonepe_upi" || paymentMethod === "google_pay" || paymentMethod === "digital_wallet") {
        cardFields.forEach(function(element) {
            element.style.display = "none";
        });
    } 
     else if(paymentMethod === "credit_card" || paymentMethod === "debit_card"){
        carFields.forEach(function(element) {
            element.style.display = "none";
        });
    }
    else {
        cardFields.forEach(function(element) {
            element.style.display = "block";
        });
    }
}