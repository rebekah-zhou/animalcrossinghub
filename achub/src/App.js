import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components';

import Critters from './components/Critters';
import Villagers from './components/Villagers';
import Fossils from './components/Fossils';
import NavBar from './components/NavBar';
import Home from './components/Home';

const StyledH2 = styled.h2`
  background-color: #f1ebdc;
  width: 250px;
  margin: auto;
  margin-bottom: 6px;
  margin-top: 6px;
  border-style: dotted;
  border-radius: 10%;
  padding: 3px;
`

function App() {
  const [villagers, setVillagers] = useState([])
  const [votedVillagers, setVotedVillagers] = useState([])

  useEffect(() => {
    fetch('https://acnhapi.com/v1a/villagers')
    .then(r => r.json())
    .then(data => setVillagers(() => data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/villager-likes/')
    .then(r => r.json())
    .then(fetchedVotedVilagers => {
      setVotedVillagers(fetchedVotedVilagers.sort((a, b) => b.likes - a.likes))
    })
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path='/villagers'>
          {villagers[1] && votedVillagers[1] ? 
            <Villagers
              villagers={villagers} 
              votedVillagers={votedVillagers}
              StyledH2={StyledH2}
            /> 
            : <h2> Loading...</h2>}
        </Route>
        <Route path='/fossils'>
          <Fossils />
        </Route>
        <Route path='/critters'>
          <Critters />
        </Route>
        <Route exact path='/'>
          {villagers[1] && votedVillagers[1] ? 
          <Home
            villagers={villagers} 
            votedVillagers={votedVillagers}
            StyledH2={StyledH2}
          />
            : <h2>Loading...</h2>}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
