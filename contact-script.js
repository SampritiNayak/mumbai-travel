function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function showThankYou(event) {
  event.preventDefault(); // prevent form from submitting
  document.getElementById("thankYouPopup").style.display = "block";
}

function closePopup() {
  document.getElementById("thankYouPopup").style.display = "none";
}
