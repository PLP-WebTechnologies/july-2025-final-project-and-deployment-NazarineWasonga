// Mobile menu toggle (future enhancement)
console.log("JS loaded");

// Simple form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Message sent successfully!");
    });
  }
});
