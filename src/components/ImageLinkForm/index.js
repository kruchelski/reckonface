import './style.css';

function ImageLinkForm () {
    return(
        <div className='image-link-container'>
            <p className='image-link-container__info'>
                The Reckonface neural engines will detect faces in your picture. Give it a try!
            </p>
            <div className='input-container'>
                <input
                    type="text"
                    className='input-container__input'
                />
                <button
                    role='button'
                    type='button'
                    className='input-container__button'
                >
                    Detect
                </button>
            </div>
        </div>
    )
}

export default ImageLinkForm;