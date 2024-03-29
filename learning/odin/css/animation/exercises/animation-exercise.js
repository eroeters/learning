const openButton = document.querySelector(".trigger-modal");
const closeButton = document.querySelector(".close-modal");
const menuBtn = document.querySelector(".menu-title");
const dropdownMenu = document.querySelector(".dropdown-menu");

function toggleModal() {
  const modalDiv = document.querySelector(".popup-modal");
  const backdrop = document.querySelector(".backdrop");
  modalDiv.classList.toggle("show");
  backdrop.classList.toggle("show");
}

menuBtn.addEventListener("click", () => {
  if (dropdownMenu.style.display == "none") {
    dropdownMenu.style.display = "block";
  } else {
    dropdownMenu.style.display = "none";
  }
});

openButton.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
// menuBtn.addEventListener("click", toggleDropdown);
