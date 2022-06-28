function ImagePopup({isOpen, onClose, card}) {

  return (
    <section className={`popup popup_type_mesto ${isOpen && 'popup_opened'}`} aria-label="Фото места">
      <div className="mesto">
        <button className="popup__close" type="button" onClick={onClose}></button>
        <figure className="mesto__figure">
          <img className="mesto__image" src={card.link} alt={card.name} />
          <figcaption className="mesto__caption">{card.name}</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default ImagePopup;