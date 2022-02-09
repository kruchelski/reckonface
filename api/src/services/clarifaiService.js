import clarifaiApp from '../clients/clarifaiClient.js';

const detectFaceClarifai = async (imageUrl) => {
  const response = await clarifaiApp.app.models.predict(
    clarifaiApp.faceDetectModel,
    imageUrl
  );

  return response;
};

export { detectFaceClarifai };
