function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("show");
}

// Modal image preview
function openModal(img) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = img.src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

