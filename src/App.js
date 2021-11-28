import React, { useRef, useEffect } from 'react';

import './App.scss';

// C O M P O N E N T S 
import Main from './components/main/Main';
import Gallery from './components/gallery/Gallery';
import Overlay, { overlayOpen, overlayClose } from './components/overlay/Overlay';

function App() {

  useEffect(async () => {
    overlayClose();
  }, []);

  return (
    <>
      {/* <Loading /> */}
      <div className="panel">
        <Gallery />
        <div className="panel-top">
          <span>London 2022</span>
        </div>
        <nav>
          <ul>
            <li><a href="">home</a></li>
            <li><a href="">about</a></li>
            <li><a href="">work</a></li>
            <li><a href="">contact</a></li>
          </ul>
        </nav>
        <div className="panel-bottom">
          Copyright 2021. All rights reserved.
        </div>
      </div>
      <Overlay defaultOpen={true} />
    </>
  );
}

export default App;
