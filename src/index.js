import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import firebaseConfig from './firebase-config.js';
import {FirebaseAppProvider} from 'reactfire';
import App from './App.js';

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>  
    <Suspense fallback={'Cargando datos...'}>
      <App/>
    </Suspense>
  </FirebaseAppProvider>,
document.getElementById("root"));