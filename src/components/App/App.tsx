import React from 'react';

import './App.css';
import { HeroImage } from '../HeroImage/HeroImage';
import { Palette } from '../Palette/Palette';

const image = 'https://www.itl.cat/pngfile/big/189-1897904_her-2013.jpg';

function App() {
  return (
    <div className={'grid'}>
      <header>
        <div className={'circles'}>
          <div className={'circle1'} />
          <div className={'circle2'} />
          <div className={'circle3'} />
        </div>
        <h1 className={'title'}>filmandcolor</h1>
        <p className={'subtitle'}>Inspired by <a href={'https://www.instagram.com/filmandcolor/?hl=en'} target="blank">@filmandcolor</a></p>
      </header>
      <div className={'image-wrapper'}>
        <HeroImage className={'image'} imageUrl={image} />
      </div>
        <Palette className={'palette'} image={image} />
      <footer>
        <p>Made by <a href={'https://twitter.com/david_dossett'} target="blank">me →</a></p>
      </footer>
    </div>
  );
}

export default App;
