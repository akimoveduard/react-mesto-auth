import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {

  const currentUser = React.useContext(CurrentUserContext);

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');

  React.useEffect(() => {
    setUserName(currentUser.name);
    setUserDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(event) {
    setUserName(event.target.value);
  }

  function handleChangeDescription(event) {
    setUserDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    onUpdateUser({
      name: userName,
      about: userDescription,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onUpdateUser={onUpdateUser}
      name="profile"
      title="Редактировать профиль"
    >
      <input
        value={userName}
        onChange={handleChangeName}
        className="popup__input"
        type="text"
        name="username"
        required
        autoFocus
        placeholder="Имя"
        aria-label="Имя"
        minLength="2"
        maxLength="40"
        autoComplete="off"
      />
      <span className="popup__error username-input-error"></span>
      <input
        value={userDescription}
        onChange={handleChangeDescription}
        className="popup__input"
        type="text"
        name="about"
        required
        placeholder="О себе"
        aria-label="О себе"
        minLength="2"
        maxLength="200"
        autoComplete="off"
      />
      <span className="popup__error about-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;