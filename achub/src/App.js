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
  const [bugs, setBugs] = useState([])
  const [seaCreatures, setSeaCreatures] = useState([])
  const [fish, setFish] = useState([])


  useEffect(() => {
    fetch('https://acnhapi.com/v1a/villagers')
    .then(r => r.json())
    .then(data => setVillagers(() => data))
  }, [])

  useEffect(() => {
    fetch('https://acnhapi.com/v1a/bugs')
    .then(r => r.json())
    .then(data => setBugs(() => data))
  }, [])

  useEffect(() => {
    fetch('https://acnhapi.com/v1a/sea')
    .then(r => r.json())
    .then(data => setSeaCreatures(() => data))
  }, [])

  useEffect(() => {
    fetch('https://acnhapi.com/v1a/fish')
    .then(r => r.json())
    .then(data => setFish(() => data))
  }, [])



  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path='/villagers'>
          <Villagers villagers={villagers}/>
        </Route>
        <Route path='/fossils'>
          <Fossils />
        </Route>
        <Route path='/critters'>
          <Critters seaCreatures={seaCreatures}
            bugs={bugs}
            fish={fish} />
        </Route>
        <Route exact path='/'>
          <Home villagers={villagers}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
