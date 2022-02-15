import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'

import Critters from './components/Critters';
import Villagers from './components/Villagers';
import Fossils from './components/Fossils';
import NavBar from './components/NavBar';
import Home from './components/Home';


function App() {
  const [villagers, setVillagers] = useState([])

  useEffect(() => {
    fetch('https://acnhapi.com/v1a/villagers')
    .then(r => r.json())
    .then(data => setVillagers(() => data))
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path='/villagers'>
          {villagers[0] ? <Villagers villagers={villagers}/> : <h2> Loading...</h2>}
        </Route>
        <Route path='/fossils'>
          <Fossils />
        </Route>
        <Route path='/critters'>
          <Critters />
        </Route>
        <Route exact path='/'>
          <Home villagers={villagers}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
