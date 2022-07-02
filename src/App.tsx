import React from 'react';
import Layout from './components/layout'
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom'


function App() {
  return (

        <Route  path='/'  element= {<Layout/>} />




  );
}

export default App;
