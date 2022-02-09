import { detectFaceClarifai } from '../services/clarifaiService.js';

const detectFace = async (req, res) => {
  const { img = null } = req.query;
  try {
    if (!img) throw new Error('No Image URL provided');
    const faceDetectResponse = await detectFaceClarifai(img);
    res.send(faceDetectResponse);
  } catch (err) {
    const errMsg = err.message || err.error || 'Unexpected Error';
    res.status(400);
    res.json({ error: errMsg });
  }
};

export { detectFace };
