import React, { useState, useEffect } from 'react';
import Clarifai from 'clarifai';

import { Swatch } from '../Swatch/Swatch';
import './Palette.css';

interface PaletteProps {
  image: any;
  className?: any;
}

const modelId = process.env.REACT_APP_CLARIFAI_MODEL_KEY;

const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_CLARIFAI_API_KEY,
});

export const Palette: React.FC<PaletteProps> = ({ image }) => {
  const [palette, setPalette] = useState([]);

  useEffect(() => {
    async function getPalette() {
      let response = await app.models.predict(modelId, image);
      let colors = response.outputs[0].data.colors;
      let generatedPalette = colors.map((color: any) => color.raw_hex);
      setPalette(generatedPalette);
    }
    getPalette();
  }, [image]);

  let swatches: JSX.Element[] = palette.map((color) => {
    return <Swatch color={color} />;
  });

  return <div className={'paletteRoot'}>{swatches}</div>;
};
