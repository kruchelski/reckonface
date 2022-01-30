import {
  ImageLinkForm,
  Logo,
  Navigation,
  Rank,
  FaceRecognition,
  SignIn,
  Register,
} from './components';
import * as clarifaiService from './services/clarifaiService';
import particlesOptions from './configs/particlesConfig';
import { useState } from 'react';
import Particles from 'react-tsparticles';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [boxes, setBoxes] = useState([]);
  const [route, setRoute] = useState('signin');

  const calculateFaceLocation = (data) => {
    const image = document.querySelector('#image');
    const width = Number(image.width);
    const height = Number(image.height);

    const rawBoxes = data.outputs[0].data.regions.map(
      (region) => region.region_info.bounding_box
    );

    const boxes = rawBoxes.map((box) => {
      const boxWidth = `${width * box.right_col - width * box.left_col}px`;
      const boxHeight = `${height * box.bottom_row - height * box.top_row}px`;
      const offsetX = `${width * box.left_col}px`;
      const offsetY = `${height * box.top_row}px`;
      return {
        boxWidth,
        boxHeight,
        offsetX,
        offsetY,
      };
    });

    return boxes;
  };

  const handleInputChange = (value) => {
    setInput(value);
  };

  const handleSubmit = async () => {
    if (!input) return;
    setImageUrl(input);
    setBoxes([]);
    try {
      const res = await clarifaiService.detectFace(input);
      const boxes = calculateFaceLocation(res);
      setBoxes(boxes);
    } catch (error) {
      console.log('Deu errado');
      console.log(error);
    }
  };

  const handleRouteChange = (event, route) => {
    console.log(event);
    setRoute(route);
  };

  return (
    <div className="App">
      <Particles options={particlesOptions} className="particles" />
      <Navigation onRouteChange={handleRouteChange} />
      {route === 'signin' && <SignIn onRouteChange={handleRouteChange} />}
      {route === 'register' && <Register onRouteChange={handleRouteChange} />}
      {route === 'home' && (
        <>
          <Logo />
          <Rank />
          <ImageLinkForm
            onInputChange={handleInputChange}
            onButtonSubmit={handleSubmit}
          />
          <FaceRecognition imageUrl={imageUrl} boxes={boxes} />
        </>
      )}
    </div>
  );
}

export default App;
