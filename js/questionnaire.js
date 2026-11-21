// Check the answers before showing the thank-you message.
function checkQuestionnaire() {
    var name = document.getElementById("reader-name");
    var id = document.getElementById("reader-id");
    var phone = document.getElementById("reader-phone");
    var email = document.getElementById("reader-email");
    var comments = document.getElementById("reader-comments");
    var message = document.getElementById("questionnaire-message");

    document.getElementById("questionnaire-form").setAttribute(
        "class", "row g-3 was-validated");

    // A full name needs two or more words. A word can contain ' or -.
    // ^ and $ check the whole entry; + means one or more characters.
    var namePattern = /^[A-Za-z]+(['-][A-Za-z]+)*( +[A-Za-z]+(['-][A-Za-z]+)*)+$/;
    if (name.value.search(namePattern) == -1) {
        message.innerText = "Please enter at least two names in English.";
        name.focus();
        return false;
    }

    // MB must be followed by exactly three digits.
    var idPattern = /^MB[0-9]{3}$/;
    if (id.value.search(idPattern) == -1) {
        message.innerText = "Enter MB followed by three digits, such as MB001.";
        id.focus();
        return false;
    }

    // The mobile number starts with 2 or 7 or 9 and has eight digits.
    // ? makes the +968 prefix and its space or hyphen optional.
    var phonePattern = /^(\+968[ -]?)?[279][0-9]{7}$/;
    if (phone.value.search(phonePattern) == -1) {
        message.innerText = "Enter an eight-digit mobile number starting with 2 or 7 or 9.";
        phone.focus();
        return false;
    }

    // An email needs text before and after @, followed by a dot and more text.
    if (email.value.search(/^[^@\s]+@[^@\s]+\.[^@\s]+$/) == -1) {
        message.innerText = "Please check your email address.";
        email.focus();
        return false;
    }

    // Make sure the visitor has selected one of the three ratings.
    if (!document.getElementById("rating-good").checked &&
        !document.getElementById("rating-average").checked &&
        !document.getElementById("rating-poor").checked) {
        message.innerText = "Please choose a rating.";
        document.getElementById("rating-good").focus();
        return false;
    }

    // Remove spaces from the ends before checking the comment length.
    var comment = comments.value.replace(/^\s+|\s+$/g, "");
    if (comment.length < 20) {
        message.innerText = "Please write a comment of at least 20 characters.";
        comments.focus();
        return false;
    }
    if (!document.getElementById("reader-consent").checked) {
        message.innerText = "Please tick the checkbox before submitting.";
        document.getElementById("reader-consent").focus();
        return false;
    }

    message.innerText = "Thank you, " + name.value + ". Your answers are valid.";
    return false; // Keep the answers on this page. Nothing is sent or saved.
}

// Clear the message and validation colours when Reset is clicked.
function resetQuestionnaire() {
    document.getElementById("questionnaire-message").innerText = "";
    document.getElementById("questionnaire-form").setAttribute("class", "row g-3");
}
