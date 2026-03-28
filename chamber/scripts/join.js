// Timestamp
document.getElementById("timestamp").value = new Date().toISOString();

// Modal logic
document.querySelectorAll("[data-modal]").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.getElementById(link.dataset.modal).showModal();
  });
});