import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserInformation from './components/UserInformation';
import ProductSelection from './components/ProductSelection';

const App: React.FC = () => {
  return (
    <Router>
     

        <Routes>
          <Route path="/" Component={UserInformation} />
          <Route path="/product-selection" Component={ProductSelection} />
        </Routes>
    </Router>
  );
};

export default App;
