document.addEventListener('DOMContentLoaded', function() {
    const summaryFullName = document.getElementById('summaryFullName');
    const summaryDate = document.getElementById('summaryDate');
    const summaryTime = document.getElementById('summaryTime');
    const summaryDuration = document.getElementById('summaryDuration');
    const summaryMobile = document.getElementById('summaryMobile');
    const summaryEmail = document.getElementById('summaryEmail');
    const summaryGender = document.getElementById('summaryGender');
    const summarySLAdult = document.getElementById('summarySLAdult');
    const summarySLChild = document.getElementById('summarySLChild');
    const summaryForeignerAdult = document.getElementById('summaryForeignerAdult');
    const summaryForeignerChild = document.getElementById('summaryForeignerChild');
    const summaryInfant = document.getElementById('summaryInfant');
    const summaryTotalPlayable = document.getElementById('summaryTotalPlayable');

    // Load stored user details and summary table values from local storage
    const storedFullName = localStorage.getItem('fullName') || '';
    const storedDate = localStorage.getItem('date') || '';
    const storedTime = localStorage.getItem('time') || '';
    const storedDuration = localStorage.getItem('duration') || '';
    const storedMobile = localStorage.getItem('mobile') || '';
    const storedEmail = localStorage.getItem('email') || '';
    const storedGender = localStorage.getItem('gender') || '';
    const storedSLAdult = localStorage.getItem('slAdult') || '';
    const storedSLChild = localStorage.getItem('slChild') || '';
    const storedForeignerAdult = localStorage.getItem('fAdult') || '';
    const storedForeignerChild = localStorage.getItem('fChild') || '';
    const storedInfant = localStorage.getItem('infant') || '';
    const storedTotalPlayable = localStorage.getItem('totalplayable') || '$0';

    // Set the values in the summary table
    summaryFullName.textContent = storedFullName;
    summaryDate.textContent = storedDate;
    summaryTime.textContent = storedTime;
    summaryDuration.textContent = storedDuration;
    summaryMobile.textContent = storedMobile;
    summaryEmail.textContent = storedEmail;
    summaryGender.textContent = storedGender;
    summarySLAdult.textContent = storedSLAdult;
    summarySLChild.textContent = storedSLChild;
    summaryForeignerAdult.textContent = storedForeignerAdult;
    summaryForeignerChild.textContent = storedForeignerChild;
    summaryInfant.textContent = storedInfant;
    summaryTotalPlayable.textContent = storedTotalPlayable;

     // Retrieve stored summary table HTML from local storage
     const storedSummary = localStorage.getItem('ticketSummary');

     // Populate the summary table on the confirmation page with stored values
     if (storedSummary) {
        const summaryTable = document.querySelector('#summary-details table');
        summaryTable.innerHTML = storedSummary;
    }

});
