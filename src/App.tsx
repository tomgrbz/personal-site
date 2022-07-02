import React from 'react';
import Layout from './components/layout'
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom'


function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route  path='/'  element= {<Layout/>} />



      </BrowserRouter>
  );
}

export default App;
