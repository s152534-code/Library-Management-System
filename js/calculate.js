// Work out the fine and printing cost from the form values.
function calculateFees() {
    var books = Number(document.getElementById("late-books").value);
    var days = Number(document.getElementById("late-days").value);
    var pages = Number(document.getElementById("print-pages").value);
    var type = document.getElementById("fee-member").value;
    var active = document.getElementById("active-member").checked;

    // The daily fine is 0.200 OMR per book, up to 5 OMR per book.
    var fine = books * days * 0.200;
    var maximum = books * 5;
    if (fine > maximum) {
        fine = maximum;
    }

    // Only active students get 25% off the fine.
    var discount = 0;
    if (type == "Student" && active && fine > 0) {
        discount = fine * 25 / 100;
    }

    // Add printing after taking the discount off the fine.
    var printing = pages * 0.025;
    var total = fine - discount + printing;

    // Round to the nearest baisa before showing the result.
    fine = Math.round(fine * 1000) / 1000;
    discount = Math.round(discount * 1000) / 1000;
    printing = Math.round(printing * 1000) / 1000;
    total = Math.round(total * 1000) / 1000;

    var result = document.getElementById("fee-result");
    result.setAttribute("class", "border rounded bg-white p-3 mt-3");
    var answer = '<h2 class="h5">Estimated total: OMR ' + total + "</h2>";
    answer += "<p>Overdue fine: OMR " + fine + "<br>";
    answer += "Student discount: OMR " + discount + "<br>";
    answer += "Printing: OMR " + printing + "</p>";
    result.innerHTML = answer;
    return false; // Show the result without opening another page.
}

// Remove the previous answer if the inputs are changed or reset.
function clearResult() {
    document.getElementById("fee-result").innerHTML = "";
    document.getElementById("fee-result").setAttribute("class", "d-none");
}
