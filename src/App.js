import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { ImpulseSpinner } from 'react-spinners-kit';

import Home from './layout/HomePage';
import Platform from './layout/PlatformPage';
import NotFound from './layout/NotFoundPage'

function App() {
  const [cpgList, setCpgList] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (cpgList.length === 0 ) {
      axios.get('/')
      .then( res => {
        setLoading(false);
        setCpgList(res.data);
      })
      .catch( error => {
        console.log('Error Fetching data...', error);
      })
    }
  })


  return (
    <Router>
      <div className="container relative h-screen w-full mx-auto bg-gray-200">
        <div className="absolute z-50" style={{top:"140px", left:"120px"}}>
          <ImpulseSpinner size={30} color="#686769" loading={loading} />
        </div>
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
