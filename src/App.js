import React, { useRef, useEffect } from 'react';

import './App.scss';

// C O M P O N E N T S 
import Main from './components/main/Main';
import Overlay, { overlayOpen, overlayClose } from './components/overlay/Overlay';
import Panel from './components/Panel/Panel.jsx';

function App() {

  useEffect(async () => {
    overlayClose();
  }, []);

  return (
    <>
      {/* <Loading /> */}
      <Panel />
      <Overlay defaultOpen={true} />
    </>
  );
}

export default App;
