import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({isOpen, onClose, onAddPlace}) {

  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function onChangeName(event) {
    setName(event.target.value);
  }

  function onChangeLink(event) {
    setLink(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    onAddPlace({
      name: name,
      link: link
    });
    setName('');
    setLink('');
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onAddPlace={onAddPlace}
      name="addcard"
      title="Новое место"
      buttonCaption="Создать"
    >
      <input
        onChange={onChangeName}
        value={name}
        className="popup__input"
        type="text"
        name="caption"
        required
        minLength="2"
        maxLength="30"
        autoFocus
        placeholder="Название"
        aria-label="Название места"
        autoComplete="off"
      />
      <span className="popup__error caption-input-error"></span>
      <input
        onChange={onChangeLink}
        value={link}
        className="popup__input"
        type="url"
        name="link"
        required
        placeholder="Ссылка на картинку"
        aria-label="Ссылка на картинку"
        autoComplete="off"
      />
      <span className="popup__error link-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;