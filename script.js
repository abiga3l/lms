document.addEventListener("DOMContentLoaded", function () {
    const forgotPasswordForm = document.getElementById("forgotPasswordForm");
    const resetPasswordForm = document.getElementById("resetPasswordForm");

    forgotPasswordForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        // Simulate sending email and receiving code
        const code = "12345"; // Dummy code, replace with actual code retrieval logic
        displayResetPasswordForm(code);
    });

    function displayResetPasswordForm(code) {
        resetPasswordForm.style.display = "block";
        document.getElementById("code").value = code;
    }

    resetPasswordForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const newPassword = document.getElementById("newPassword").value;
        // Reset password logic here
        console.log("New password:", newPassword);
        // You can add code to submit the new password to your server for resetting
    });
});