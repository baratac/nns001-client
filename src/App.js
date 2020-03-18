import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Home from './layout/HomePage';
import Platform from './layout/PlatformPage';
import NotFound from './layout/NotFoundPage'

function App() {
  const [cpgList, setCpgList] = useState([])

  useEffect(() => {
    if (cpgList.length === 0 ) {
      axios.get('/')
      .then( res => {
        setCpgList(res.data);
      })
      .catch( error => {
        console.log('Error Fetching data...', error);
      })
    }
  })


  return (
    <Router>
      <div className="container h-screen w-full mx-auto bg-gray-200">
        <Switch>
          <Route exact path="/">
            <Home theList={ cpgList }/>
          </Route>
          <Route path="/campaign">
            <Platform theList={ cpgList }/>
          </Route>
          <Route component={NotFound}/>
        </Switch>
      </div> 
    </Router>
  );
}

export default App;
