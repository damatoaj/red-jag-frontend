import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import HeaderPortal from './Components/Header/HeaderPortal';
import Content from './Components/Content/Content';


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuth = () => {
      console.log('handleAuth');
      setIsAuthenticated(true);
  }

  return (    
    <Router>
      <HeaderPortal 
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        handleAuth={handleAuth}
      />
      <Content />
    </Router>
  );
}

export default App;
