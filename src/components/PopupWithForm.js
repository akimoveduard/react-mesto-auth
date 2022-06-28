import React from 'react';

function PopupWithForm({isOpen, onClose, onSubmit, name, title, buttonCaption='Сохранить', children}) {

  return (
    <section className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <div className="popup__wrapper">
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form
          className="form popup__form"
          name={name}
          method="get"
          onSubmit={onSubmit}
          noValidate
        >
          {children}
          <button
            type="submit"
            className="button button_type_submit popup__button"
            name={`${name}-submit`}
          >
            {buttonCaption}
          </button>
        </form>
        <div>
    </div>
      </div>
    </section>
  );
}

export default PopupWithForm;
