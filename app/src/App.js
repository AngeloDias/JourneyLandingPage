import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import EntirePageComponent from './components/EntirePageComponent';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={EntirePageComponent} />
      </div>
    </BrowserRouter>
  );
}

export default App;
