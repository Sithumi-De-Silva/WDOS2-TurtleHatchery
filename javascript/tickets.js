// Get references to the input elements
const dateInput = document.querySelector('.date');
const timeSelect = document.querySelector('.time');
const slAdultInput = document.getElementById('sladult');
const slChildInput = document.getElementById('slchild');
const fAdultInput = document.getElementById('fadult');
const fChildInput = document.getElementById('fchild');
const infantInput = document.getElementById('infant');
const summaryTable = document.getElementById('summary');
const totalPayableCell = document.getElementById('totalpayableSummary');

// Event listeners for input changes
dateInput.addEventListener('change', updateSummary);
timeSelect.addEventListener('change', updateSummary);
slAdultInput.addEventListener('input', updateSummary);
slChildInput.addEventListener('input', updateSummary);
fAdultInput.addEventListener('input', updateSummary);
fChildInput.addEventListener('input', updateSummary);
infantInput.addEventListener('input', updateSummary);

// Function to update the summary table
function updateSummary() {
    // Get selected time slots and calculate duration
    const selectedSlots = Array.from(timeSelect.selectedOptions, option => option.value);
    const totalHours = selectedSlots.reduce((sum, slot) => {
        return sum + (slot.includes("PEAK") ? 2 : 1);
    }, 0);
    const duration = `${totalHours} hrs (${selectedSlots.filter(slot => slot.includes("PEAK")).length} Peak)`;

    // Calculate charges
    const slAdultPrice = 6 * parseInt(slAdultInput.value);
    const slChildPrice = 3 * parseInt(slChildInput.value);
    const fAdultPrice = 10 * parseInt(fAdultInput.value);
    const fChildPrice = 5 * parseInt(fChildInput.value);
    const infantPrice = 0;

    // Calculate total payable
    const totalPayable = slAdultPrice + slChildPrice + fAdultPrice + fChildPrice + infantPrice;

    // Update summary table cells
    document.getElementById('date').textContent = dateInput.value;
    document.getElementById('thours').textContent = selectedSlots.join(", ");
    document.getElementById('duration').textContent = duration;
    document.getElementById('sladultSummaryPrice').textContent = `$${slAdultPrice}`;
    document.getElementById('slchildSummaryPrice').textContent = `$${slChildPrice}`;
    document.getElementById('fadultSummaryPrice').textContent = `$${fAdultPrice}`;
    document.getElementById('fchildSummaryPrice').textContent = `$${fChildPrice}`;
    document.getElementById('infantSummaryPrice').textContent = `$${infantPrice}`;
    totalPayableCell.textContent = `$${totalPayable.toFixed(2)}`;

    // Enable the purchase button if at least one ticket is selected
    const purchaseButton = document.getElementById('purchase-button');
    if (totalPayable > 0) {
        purchaseButton.innerHTML = '<button><a href="details.html">Continue with Purchase</a></button>';
    } else {
        purchaseButton.innerHTML = '<button type="button" disabled>Continue with Purchase</button>';
    }
// Store the summary table HTML in local storage
localStorage.setItem('ticketSummary', summaryTable.innerHTML);
}

// Initialize summary on page load
updateSummary();