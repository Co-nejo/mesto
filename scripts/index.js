
const popupEdit = document.querySelector('.popup_type_edit-profile');
const editButton = document.querySelector('.profile__button-edit');
const closeEditFormButton = popupEdit.querySelector('.popup__button-close');
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');
const inputName = editForm.elements['name'];
const inputActivity = editForm.elements['activity'];
const popupFormEdit = document.querySelector('.popup__form_type_edit');
const popupAdd = document.querySelector('.popup_type_add-photo');
const addButton = document.querySelector('.profile__button-add');
const closeAddFormButton = popupAdd.querySelector('.popup__button-close');
const popupOpenPhoto = document.querySelector('.popup_type_open-photo');
const closeOpenPhotoButton = popupOpenPhoto.querySelector('.popup__button-close');
const elementContainer = document.querySelector('.elements');
const formAddImage = document.querySelector('.popup__form_type_add-photo');
const popupPhoto = popupOpenPhoto.querySelector('.popup__photo');
const popupPhotoCaption = popupOpenPhoto.querySelector('.popup__caption');
const inputTitle = document.querySelector('.popup__input_type_title');
const inputLink = document.querySelector('.popup__input_type_link');
const initialCards = [{
  name: 'Архыз',
  link: 'https://images.unsplash.com/photo-1627327719320-dae8bcbc0acb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
}, {
  name: 'Домбай',
  link: 'https://images.unsplash.com/photo-1634665608381-c610e408790b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
}, {
  name: 'Эльбрус',
  link: 'https://images.unsplash.com/photo-1655302941006-d434e979cd7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
}, {
  name: 'Эльтюбю',
  link: 'https://images.unsplash.com/photo-1624280125094-f0091c660d3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
}, {
  name: 'Нальчик',
  link: 'https://images.unsplash.com/photo-1635195867433-590941c6e9c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80'
}, {
  name: 'Туманлы-Кёль',
  link: 'https://images.unsplash.com/photo-1634665609181-a0c0fc951abd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
}];

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened')
}

function editNameAbout(evt) {
  evt.preventDefault()
  profileName.textContent = inputName.value
  profileAbout.textContent = inputActivity.value
  closePopup(popupEdit);
}

function handleEditButtonClick() {
  openPopup(popupEdit);
  inputName.value = profileName.textContent;
  inputActivity.value = profileAbout.textContent;
}
closeEditFormButton.addEventListener('click', function() {
  closePopup(popupEdit)
});

function handleAddButtonClick() {
  openPopup(popupAdd);
}
closeAddFormButton.addEventListener('click', function() {
  closePopup(popupAdd)
});
const handlePhotoLikeButtonClick = (e) => {
  e.target.classList.toggle('element__button-like_active');
}
const handlePhotoDeleteButtonClick = (evt) => {
  evt.target.closest('.element').remove();
}

function handlePhotoElementClick(title, imageLink) {
  popupPhoto.src = imageLink;
  popupPhotoCaption.textContent = title;
  popupPhoto.alt = title;
  openPopup(popupOpenPhoto);
};

function addPhotoElement(title, imageLink) {
  const elementTemplate = document.querySelector('#element-template').content;
  const photoElement = elementTemplate.cloneNode(true);
  const titleElement = photoElement.querySelector('.element__title');
  const imageElement = photoElement.querySelector('.element__image');
  const likeButton = photoElement.querySelector('.element__button-like');
  const deleteButton = photoElement.querySelector('.element__button-delete');
  titleElement.textContent = title;
  imageElement.src = imageLink;
  imageElement.alt = title;
  likeButton.addEventListener('click', handlePhotoLikeButtonClick);
  deleteButton.addEventListener('click', handlePhotoDeleteButtonClick);
  imageElement.addEventListener('click', () => handlePhotoElementClick(title, imageLink));
 return photoElement;
}


function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const photoElement = addPhotoElement(inputTitle.value, inputLink.value);
  elementContainer.prepend(photoElement);
  evt.target.reset();
  closePopup(popupAdd);
}

initialCards.forEach(function(item) {
  const photoElement = addPhotoElement(item.name, item.link);
  elementContainer.prepend(photoElement);
});



closeOpenPhotoButton.addEventListener('click', function() {
  closePopup(popupOpenPhoto)
});


editButton.addEventListener('click', handleEditButtonClick);
closeEditFormButton.addEventListener('click', () => closePopup(popupEdit));
addButton.addEventListener('click', handleAddButtonClick);
closeAddFormButton.addEventListener('click', () => closePopup(popupAdd));
closeOpenPhotoButton.addEventListener('click', () => closePopup(popupOpenPhoto));
popupFormEdit.addEventListener('submit', editNameAbout);
formAddImage.addEventListener('submit', handleAddFormSubmit);














