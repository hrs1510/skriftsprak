console.log("Facebook sign up page");

// Add event when document is fully loaded
document.addEventListener("DOMContentLoaded", onDomLoaded);

function onDomLoaded() {

}

function handleSignUpButtonClick() {
    document.getElementById("btnCreateAccount").addEventListener("click", function () {
        alert("Create new account button clicked!");
    });
}