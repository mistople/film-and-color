import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';

import './App.css';
import { TitleBar } from '../TitleBar/TitleBar';
import { useFirestore } from '../../hooks/useFirestore';
import { Palette } from '../Palette/Palette';
import { HeroImage } from '../HeroImage/HeroImage';
import { Footer } from '../Footer/Footer';

function App() {
  firebase.analytics().logEvent('app_start');

  const { documents } = useFirestore('images');
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('Film and Color');
  const [director, setDirector] = useState('Wes Anderson');
  const [cinematographer, setCinematographer] = useState('Robert D. Yeoman');
  const [artDirector, setArtDirector] = useState(
    'Stephan O. Gessler and Gerald Sullivan'
  );

  useEffect(() => {
    if (documents.length > 0) {
      setImage(documents[0].url);
    }
  }, [documents, setImage]);

  const movieInfo = (
    <>
      <p className={'info-1'}>Directed by {director}</p>
      <p className={'info-2'}>
        Cinematograpy by {cinematographer}. Art direction by {artDirector}
      </p>
    </>
  );

  return (
    <div className={'grid-container'}>
      <div className={'grid'}>
        <TitleBar className={'titlebar'} title={title} />
        <Palette className={'palette'} image={image} />
        <HeroImage className={'image'} imageUrl={image} />
        <Footer className={'footer'} />
      </div>
    </div>
  );
}

export default App;
