import clarifaiApp from '../clients/clarifaiClient';

const detectFace = async (imageUrl) => {
  const response = await clarifaiApp.app.models.predict(
    clarifaiApp.faceDetectModel,
    imageUrl
  );

  return response;
};

export { detectFace };
