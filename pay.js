function toggleCardDetails() {
    const paymentMethod = document.getElementById("payment_method").value;
    const cardFields = document.querySelectorAll('.hide-card-details');
    const walletFields = document.querySelectorAll('.hide-card-details1');
    
    // Reset all fields first
    cardFields.forEach(field => field.style.display = "none");
    walletFields.forEach(field => field.style.display = "none");
    
    // Show relevant fields based on payment method
    if (paymentMethod === "credit_card" || paymentMethod === "debit_card") {
        cardFields.forEach(field => field.style.display = "block");
        if (paymentMethod === "debit_card") {
            document.getElementById("pin").required = true;
        } else {
            document.getElementById("pin").required = false;
        }
    } else if (["digital_wallet", "phonepe_upi", "google_pay"].includes(paymentMethod)) {
        walletFields.forEach(field => field.style.display = "block");
    }
}

// Form validation
document.getElementById("paymentForm").addEventListener("submit", function(event) {
    let isValid = true;
    
    // Clear previous errors
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    
    // Payment method validation
    const paymentMethod = document.getElementById("payment_method");
    if (!paymentMethod.value) {
        document.getElementById("paymentMethodError").textContent = "Please select a payment method";
        isValid = false;
    }
    
    // Card validation if card payment selected
    if (paymentMethod.value === "credit_card" || paymentMethod.value === "debit_card") {
        // Card number validation
        const cardNumber = document.getElementById("card_number");
        if (!cardNumber.value || !/^[0-9]{13,16}$/.test(cardNumber.value)) {
            document.getElementById("cardNumberError").textContent = "Please enter a valid 13-16 digit card number";
            isValid = false;
        }
        
        // Card holder name validation
        const cardHolder = document.getElementById("card_holder");
        if (!cardHolder.value || !/^[a-zA-Z ]+$/.test(cardHolder.value)) {
            document.getElementById("cardHolderError").textContent = "Please enter the name on card";
            isValid = false;
        }
        
        // Expiration date validation
        const expirationDate = document.getElementById("expiration_date");
        if (!expirationDate.value) {
            document.getElementById("expirationDateError").textContent = "Please select expiration date";
            isValid = false;
        } else {
            const today = new Date();
            const [year, month] = expirationDate.value.split('-');
            const expDate = new Date(year, month - 1);
            
            if (expDate < today) {
                document.getElementById("expirationDateError").textContent = "Card has expired";
                isValid = false;
            }
        }
        
        // CVV validation
        const cvv = document.getElementById("cvv");
        if (!cvv.value || !/^[0-9]{3,4}$/.test(cvv.value)) {
            document.getElementById("cvvError").textContent = "Please enter a valid 3 or 4 digit CVV";
            isValid = false;
        }
        
        // PIN validation for debit cards
        if (paymentMethod.value === "debit_card") {
            const pin = document.getElementById("pin");
            if (!pin.value || !/^[0-9]{4,6}$/.test(pin.value)) {
                document.getElementById("pinError").textContent = "Please enter a 4-6 digit PIN";
                isValid = false;
            }
        }
    }
    
    // Wallet validation if wallet payment selected
    if (["digital_wallet", "phonepe_upi", "google_pay"].includes(paymentMethod.value)) {
        const walletId = document.getElementById("wallet_id");
        if (!walletId.value || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+$/.test(walletId.value)) {
            document.getElementById("walletIdError").textContent = "Please enter a valid UPI ID (e.g., name@upi)";
            isValid = false;
        }
    }
    
    // Email validation
    const email = document.getElementById("email");
    if (!email.value || !/^[^@]+@[^@]+\.[^@]+$/.test(email.value)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address";
        isValid = false;
    }
    
    if (!isValid) {
        event.preventDefault();
    }
});

// Real-time validation for better UX
document.getElementById("card_number")?.addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9]/g, '');
});

document.getElementById("cvv")?.addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9]/g, '');
});

document.getElementById("pin")?.addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9]/g, '');
});

document.getElementById("card_holder")?.addEventListener("input", function() {
    this.value = this.value.replace(/[^a-zA-Z ]/g, '');
});

// Initialize form based on default selection
document.addEventListener("DOMContentLoaded", function() {
    toggleCardDetails();
});