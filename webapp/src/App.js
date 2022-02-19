import { useState, useEffect } from 'react';
import {
  ImageLinkForm,
  Logo,
  Navigation,
  Rank,
  FaceRecognition,
  SignIn,
  Register,
} from './components';
import {
  detectFace,
  updateImageCount,
  getUserData,
} from './services/httpService';
import { setDefaultHeaders, removeDefaultHeaders } from './clients/httpClient';
import particlesOptions from './configs/particlesConfig';
import Particles from 'react-tsparticles';
import { getItem, clearStorage } from './utils/storage';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [boxes, setBoxes] = useState([]);
  const [route, setRoute] = useState('signin');
  const [isSigned, setIsSigned] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    getUserState();
  }, []);

  const getUserState = async () => {
    const user = getItem('user');
    const token = getItem('token');
    if (!user) return;
    if (token) setDefaultHeaders('Authorization', token);
    const parsedUser = JSON.parse(user);
    const res = await getUserData(parsedUser.id);
    setUser(res);
    setIsSigned(parsedUser && parsedUser.id);
    setRoute('home');
  };

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

  const checkResponse = (response) => {
    if (
      !response ||
      !response.outputs ||
      !response.outputs[0] ||
      !response.outputs[0].data ||
      !response.outputs[0].data.regions
    ) {
      return false;
    }
    return true;
  };

  const handleInputChange = (value) => {
    setInput(value);
  };

  const handleSubmit = async () => {
    if (!input) return;
    setImageUrl(input);
    setBoxes([]);
    try {
      const detectFacerResponse = await detectFace(input);
      if (!checkResponse(detectFacerResponse)) return;
      const boxes = calculateFaceLocation(detectFacerResponse);
      setBoxes(boxes);
      const res = await updateImageCount(user.id);
      setUser(res.user);
    } catch (err) {
      const msg =
        err.message || err.error || 'Unexpected error while detecting face';
      console.log(msg);
    }
  };

  const handleRouteChange = (event, route) => {
    setIsSigned(route === 'home' && user && user.id === undefined);
    setRoute(route);
  };

  const signOut = () => {
    clearStorage();
    removeDefaultHeaders('Authorization');
    setUser({});
    setBoxes([]);
    setImageUrl('');
    setInput('');
  };

  return (
    <div className="App">
      <Particles options={particlesOptions} className="particles" />
      <Navigation
        onRouteChange={handleRouteChange}
        isSigned={isSigned}
        signOut={signOut}
      />
      {route === 'signin' && (
        <SignIn onRouteChange={handleRouteChange} setUser={setUser} />
      )}
      {route === 'register' && (
        <Register onRouteChange={handleRouteChange} setUser={setUser} />
      )}
      {route === 'home' && (
        <>
          <Logo />
          <Rank user={user} />
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
