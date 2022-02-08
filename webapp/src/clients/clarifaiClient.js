import Clarifai from "clarifai";

const getClarifaiApp = () => {
  try {
    if (!process.env.REACT_APP_CLARIFAI_API_KEY) {
      throw new Error("No Carifai API Key provided");
    }
    const clarifaiApp = {
      app: new Clarifai.App({
        apiKey: process.env.REACT_APP_CLARIFAI_API_KEY,
      }),
      faceDetectModel: Clarifai.FACE_DETECT_MODEL,
    };

    return clarifaiApp;
  } catch {
    return null;
  }
};

const clarifaiApp = getClarifaiApp();

export default clarifaiApp;
