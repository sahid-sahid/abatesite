// Example of a simple form submission handler (no backend involved here)
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out. We'll get back to you soon!");
    document.getElementById("contact-form").reset(); // Reset the form after submission
});
