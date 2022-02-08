import './style.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
  return (
    <div className="image-container">
      {!!imageUrl && (
        <div className="image-wrapper">
          <img id="image" src={imageUrl} alt="--" className="image-detection" />
          {boxes.map((box, index) => (
            <div
              key={index}
              className="box"
              style={{
                width: box.boxWidth,
                height: box.boxHeight,
                left: box.offsetX,
                top: box.offsetY,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FaceRecognition;
