import {
  ImageLinkForm,
  Logo,
  Navigation,
  Rank,
  FaceRecognition,
} from './components';
import * as clarifaiService from './services/clarifaiService';
import particlesOptions from './configs/particlesConfig';
import { useState } from 'react';
import Particles from 'react-tsparticles';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleInputChange = (value) => {
    setInput(value);
  };

  const handleSubmit = async () => {
    setImageUrl(input);
    try {
      const res = await clarifaiService.detectFace(input);
      console.log('Opa deu certo');
      console.log(res.outputs[0].data.regions[0].region_info.bounding_box);
    } catch (error) {
      console.log('Deu errado');
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Particles options={particlesOptions} className="particles" />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm
        onInputChange={handleInputChange}
        onButtonSubmit={handleSubmit}
      />
      <FaceRecognition imageUrl={imageUrl} />
    </div>
  );
}

export default App;
