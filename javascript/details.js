document.addEventListener('DOMContentLoaded', function() {
    const fnameInput = document.getElementById('fname');
    const emailInput = document.getElementById('email');
    const cemailInput = document.getElementById('cemail');
    const genderSelect = document.getElementById('gender');
    const saveDetailsButton = document.getElementById('saveDetailsButton');

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validateForm() {
        let isValid = true;

        // Validate Full Name
        const fullName = fnameInput.value.trim();
        const nameParts = fullName.split(' ');
        if (nameParts.length !== 2) {
            document.getElementById('fnameError').textContent = 'Enter two names';
            isValid = false;
        } else {
            document.getElementById('fnameError').textContent = '';
        }

        // Validate Email
        const email = emailInput.value.trim();
        if (!validateEmail(email)) {
            document.getElementById('emailError').textContent = 'Enter a valid email';
            isValid = false;
        } else {
            document.getElementById('emailError').textContent = '';
        }

        // Validate Confirm Email
        const confirmEmail = cemailInput.value.trim();
        if (email !== confirmEmail) {
            document.getElementById('cemailError').textContent = 'Emails do not match';
            isValid = false;
        } else {
            document.getElementById('cemailError').textContent = '';
        }

        

        return isValid;
    }

     // Retrieve stored summary table HTML from local storage
     const storedSummary = localStorage.getItem('ticketSummary');

     // Populate the summary table on the details page with stored values
     if (storedSummary) {
         const summaryTable = document.querySelector('#summary-details table');
         summaryTable.innerHTML = storedSummary;
     }

     function enableContinueButton() {
        const isValid = validateForm();
        if (isValid) {
            saveDetailsButton.disabled = false;
        } else {
            saveDetailsButton.disabled = true;
        }
    }

    // Attach event listeners to input fields
    fnameInput.addEventListener('input', enableContinueButton);
    emailInput.addEventListener('input', enableContinueButton);
    cemailInput.addEventListener('input', enableContinueButton);
    mobileInput.addEventListener('input', enableContinueButton);
    genderSelect.addEventListener('input', enableContinueButton);

    // Load stored user details from local storage
    const storedFullName = localStorage.getItem('fullName') || '';
    const storedEmail = localStorage.getItem('email') || '';
    const storedMobile = localStorage.getItem('mobile') || '';
    const storedGender = localStorage.getItem('gender') || ''; 

    fnameInput.value = storedFullName;
    emailInput.value = storedEmail;
    mobileInput.value = storedMobile;
    genderSelect.value = storedGender;

    // Attach event listener to the Continue with Purchase button
    saveDetailsButton.addEventListener('click', function() {
    // Save user details and summary table values to local storage
    localStorage.setItem('fullName', fnameInput.value);
    localStorage.setItem('date', selectedDate); 
    localStorage.setItem('time', selectedTime); 
    localStorage.setItem('duration', selectedDuration); 
    localStorage.setItem('mobile', mobileInput.value);
    localStorage.setItem('email', emailInput.value);
    localStorage.setItem('confirmEmail', cemailInput.value);
    localStorage.setItem('gender', genderSelect.value);
    localStorage.setItem('slAdult', slAdultQuantity); 
    localStorage.setItem('slChild', slChildQuantity); 
    localStorage.setItem('fAdult', fAdultQuantity); 
    localStorage.setItem('fChild', fChildQuantity); 
    localStorage.setItem('infant', infantQuantity); 
    localStorage.setItem('totalplayable', totalPlayableAmount);

    // Update summary table values
    const summaryTable = document.querySelector('#summary-details table');
    const updatedSummary = summaryTable.innerHTML;
    localStorage.setItem('ticketSummary', updatedSummary);

});

    // Initial form validation
    enableContinueButton();
});