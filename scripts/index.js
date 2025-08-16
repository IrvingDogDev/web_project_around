let popup = document.querySelector(".popup");
let butClose = document.querySelector(".popup__button_close");
let form = document.querySelector(".popup__container");
let inpName = document.querySelector(".popup__input_name");
let inpAbout = document.querySelector(".popup__input_about");
let butEdit = document.querySelector(".main__button-edit");
let inName = document.querySelector(".main__profile-name");
let inAbout = document.querySelector(".main__profile-about");

function openEdit() {
  inpName.value = inName.textContent;
  inpAbout.value = inAbout.textContent;
  popup.classList.toggle("popup_opened");
}

butEdit.addEventListener("click", openEdit);
butClose.addEventListener("click", openEdit);

function saveChange(e) {
  e.preventDefault();
  inName.textContent = inpName.value;
  inAbout.textContent = inpAbout.value;
  openEdit();
}

form.addEventListener("submit", saveChange);
