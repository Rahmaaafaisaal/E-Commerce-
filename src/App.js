import React from 'react';
import './App.css';
import Main from './components/Main/Main'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../src/Store/Store'
import nabvar from '../src/components/navbar/navbar'
import Cart  from '../src/components/Cart/Cart'
/**
 * entry point to my project
 */
function App() {
  return (
     <BrowserRouter>
     <Provider store={store}>
    <div className="App">
    <Route  path='/' component={nabvar}/>
    <Route  path='/Main' component={Main}/> 
    <Route  path='/Cart' component={Cart}/> 
    </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
