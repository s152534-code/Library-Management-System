// Reset puts the form back on Borrow, which needs a due date.
function resetLoan() {
    document.getElementById("due_date").required = true;
    document.getElementById("loan-message").innerText = "";
}

// A due date is needed when borrowing, but not when returning a book.
function changeTransaction() {
    document.getElementById("due_date").required =
        document.getElementById("borrow-choice").checked;
    document.getElementById("loan-message").innerText = "";
}

// Check the dates before accepting the sample request.
function checkLoan() {
    var borrowing = document.getElementById("borrow-choice").checked;
    var start = document.getElementById("transaction_date").value;
    var due = document.getElementById("due_date");
    var message = document.getElementById("loan-message");

    // Date inputs use year-month-day, so their strings can be compared.
    if (borrowing && due.value <= start) {
        message.innerText = "Choose a due date after the borrowing date.";
        due.focus();
        return false;
    }

    message.innerText = "The sample request is valid. No loan has been saved.";
    return false;
}
