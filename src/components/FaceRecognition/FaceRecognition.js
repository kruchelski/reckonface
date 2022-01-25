import './style.css';

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="image-container">
      {!!imageUrl && (
        <img
          src={imageUrl}
          alt="Random sample to be sent to the face detection API"
          className="image-detection"
        />
      )}
    </div>
  );
};

export default FaceRecognition;
