import logo from './logo.svg';
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
  background-color: #feed9b;
  width: 250px;
  margin: auto;
  margin-bottom: 6px;
  margin-top: 6px;
  border-radius: 30% 30% 20% 20% / 100% 100% 100% 100%;
  padding: 3px;
  border: 5px dotted darkGoldenRod;
`
const StyledImg = styled.img`
  object-fit: cover;
`
function App() {
  const [villagers, setVillagers] = useState([])
  const [votedVillagers, setVotedVillagers] = useState([])
  const [randomVillager, setRandomVillager] = useState()
  const [isPatched, setIsPatched] = useState() 

  useEffect(() => {
    fetch('https://acnhapi.com/v1a/villagers')
    .then(r => r.json())
    .then(data => {
      setVillagers(() => data)
      setRandomVillager(data[Math.floor(Math.random() * 391)])
    })
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/villager-likes/')
    .then(r => r.json())
    .then(fetchedVotedVilagers => {
      setVotedVillagers(fetchedVotedVilagers.sort((a, b) => b.likes - a.likes))
    })
  }, [isPatched])

  function handlePatch(data) {
    setIsPatched(data)
  }

  function renderAppComponents() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/villagers'>
            <Villagers
              villagers={villagers} 
              votedVillagers={votedVillagers}
              StyledH2={StyledH2}
              onPatch={handlePatch}
            />
          </Route>
          <Route path='/fossils'>
            <Fossils />
          </Route>
          <Route path='/critters'>
            <Critters />
          </Route>
          <Route exact path='/'>
            <Home
              randomVillager={randomVillager}
              votedVillagers={votedVillagers}
              StyledH2={StyledH2}
              onPatch={handlePatch}
            />
          </Route>
        </Switch>
      </div>
    )
  }

  function renderLoadingImage() {
    return (
      <StyledImg
        src='https://cdn.dribbble.com/users/635907/screenshots/13905159/media/69d498ca8a58d890459cb69e2e0a01eb.gif'
        alt='loading mini island'
      />
    )
  }

  return (
    <div>{villagers[0] && votedVillagers[1] ? renderAppComponents() : renderLoadingImage()}</div>
  );
}

export default App;
