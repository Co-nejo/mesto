let popup = document.querySelector(".popup")
let editButton = document.querySelector(".profile__button-edit")
let editForm = document.forms["editForm"]
let closeEditFormButton = document.querySelector(".popup__button-close")
let profileName = document.querySelector(".profile__title")
let profileAbout = document.querySelector(".profile__subtitle")
let inputName = editForm.elements["name"]
let inputActivity = editForm.elements["activity"]


function openPopup() { 
  popup.classList.add("popup_opened")
  inputName.value = profileName.textContent;
  inputActivity.value = profileAbout.textContent;
}

function editNameAbout(evt) {
  evt.preventDefault()
  profileName.textContent = inputName.value
  profileAbout.textContent = inputActivity.value
  closePopup();
}


function closePopup() {
  popup.classList.remove("popup_opened")
}


editButton.addEventListener('click', openPopup);

editForm.addEventListener('submit', editNameAbout);

closeEditFormButton.addEventListener('click', closePopup);
  