// The login form is a sample; it does not check a real account.
function checkLogin() {
    document.getElementById("login-message").innerText =
        "The sample details are valid. This form does not sign you in.";
    return false;
}

// Required fields are checked by the browser. Also reject an empty message.
function checkContact() {
    var message = document.getElementById("message");
    if (message.value.search(/\S/) == -1) {
        alert("Please write a message.");
        message.focus();
        return false;
    }
    return true; // The form's mailto action opens the email application.
}
