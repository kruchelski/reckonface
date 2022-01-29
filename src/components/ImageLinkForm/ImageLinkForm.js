import './style.css';

function ImageLinkForm({ onInputChange, onButtonSubmit }) {
  return (
    <div className="image-link-container">
      <p className="image-link-container__info">
        The Reckonface neural engines will detect faces in your picture. Give it
        a try!
      </p>
      <div className="input-container">
        <input
          type="text"
          className="input-container__input"
          placeholder="Paste an image url here..."
          onChange={(event) => {
            onInputChange(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter') onButtonSubmit();
          }}
        />
        <button
          type="button"
          className="input-container__button"
          onClick={onButtonSubmit}
        >
          Detect
        </button>
      </div>
    </div>
  );
}

export default ImageLinkForm;
