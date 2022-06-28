import React from 'react';
import iconSuccess from '../images/icon-success.svg';
import iconError from '../images/icon-error.svg';

function InfoTooltip({
  isOpen,
  onClose,
  isSuccess,
}) {

  return (
    <section className={`popup popup_type_infotooltip ${isOpen && 'popup_opened'}`}>
      <div className="popup__wrapper">
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        <img className="popup__icon" src={isSuccess ? iconSuccess : iconError} alt={isSuccess ? 'Успешная регистрация' : 'Неудачная регистрация'} />
        <p className="popup__message">{isSuccess ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте еще раз.'}</p>
      </div>
    </section>
  );

}

export default InfoTooltip;