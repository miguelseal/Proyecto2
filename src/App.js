import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import Portal from './Components/Portal/Portal.js';
import Catalog from './Components/Catalog/Catalog.js';
import Contact from './Components/Contact/Contact.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useFirebaseApp} from 'reactfire';


const App = () => {
  let firebase = useFirebaseApp();

  console.log(firebase);
  
  return (
    <Router className="h-100">
      <Header/>
      <Switch>
        <Route path="/Catalog" exact><Catalog /></Route>
        <Route path="/Contact" exact component={Contact}></Route>
        <Route path="/Home" exact component={Portal}></Route>
        <Route path="/" exact component={Portal}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

