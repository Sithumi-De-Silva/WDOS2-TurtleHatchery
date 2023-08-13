document.addEventListener("DOMContentLoaded", function() {
    const cardNumberInput = document.getElementById("cnumber");
    const expDateInput = document.getElementById("expdate");
    const cvvInput = document.getElementById("cvv");
    const nameInput = document.getElementById("cname");
    const payButton = document.getElementById("payButton");

    const cnumberError = document.getElementById("cnumberError");
    const expdateError = document.getElementById("expdateError");
    const cvvError = document.getElementById("cvvError");
    const cnameError = document.getElementById("cnameError");

    // Retrieve stored summary table HTML from local storage
    const storedSummary = localStorage.getItem('ticketSummary');

    // Populate the summary table on the payment page with stored values
    if (storedSummary) {
        const summaryTable = document.querySelector('#summary-details table');
        summaryTable.innerHTML = storedSummary;
    }

    function enablePayButton() {
        if (
            cardNumberInput.value.length === 16 &&
            validateExpiryDate() &&
            (cvvInput.value.length === 3 || cvvInput.value.length === 4) &&
            /^[a-zA-Z\s]+$/.test(nameInput.value)
        ) {
            payButton.disabled = false;
        } else {
            payButton.disabled = true;
        }
    }

    function validateExpiryDate() {
        const parts = expDateInput.value.split("-");
        const year = parseInt(parts[0]);
        const month = parseInt(parts[1]);

        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1;

        return (
            !isNaN(year) && !isNaN(month) &&
            (year > currentYear || (year === currentYear && month >= currentMonth))
        );
    }

    cardNumberInput.addEventListener("input", function() {
        if (cardNumberInput.value.length !== 16) {
            cnumberError.textContent = "Card Number should have 16 digits";
        } else {
            cnumberError.textContent = "";
        }
        enablePayButton();
    });

    expDateInput.addEventListener("input", function() {
        if (validateExpiryDate()) {
            expdateError.textContent = "";
        } else {
            expdateError.textContent = "Card is too old";
        }
        enablePayButton();
    });

    cvvInput.addEventListener("input", function() {
        if (cvvInput.value.length >= 3 && cvvInput.value.length <= 4) {
            cvvError.textContent = "";
        } else {
            cvvError.textContent = "Invalid CVV";
        }
        enablePayButton();
    });

    nameInput.addEventListener("input", function() {
        if (/^[a-zA-Z\s]+$/.test(nameInput.value)) {
            cnameError.textContent = "";
        } else {
            cnameError.textContent = "Name contains invalid characters";
        }
        enablePayButton();
    });

    enablePayButton(); // Initial call to set the Pay button state
});