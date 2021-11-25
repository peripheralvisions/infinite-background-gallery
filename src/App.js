import React, { useRef, useEffect } from 'react';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import logo from './logo.svg';
import './App.scss';

// C O M P O N E N T S 
import Main from './components/main/Main';
import Gallery from './components/gallery/Gallery';
import Overlay, { overlayOpen, overlayClose } from './components/overlay/Overlay';

function App() {

  return (
    <Gallery />
  );
}

export default App;
