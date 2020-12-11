import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import Portal from './Components/Portal/Portal.js';
import Catalog from './Components/Catalog/Catalog.js';
import Contact from './Components/Contact/Contact.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const app = () => {
  return (
    <Router className="h-100">
      <div>
        <Header/>
        <Switch>
          <Route path="/Catalog" exact component={Catalog}></Route>
          <Route path="/Contact" exact component={Contact}></Route>
          <Route path="/Home" exact component={Portal}></Route>
          <Route path="/" exact component={Portal}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default app;

