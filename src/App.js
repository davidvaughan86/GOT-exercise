
import './App.css';
import GotButton from './gotbutton'
import CharDisplay from './gotCharacter'
import React, {useState} from 'react'

function App() {
  const [gotName, setName] = useState('')
  const [gotGender, setGender] = useState('')
  const [gotAlias, setAlias] = useState('')
  async function getGot() {
    const randomNumber = Math.floor(Math.random()* 583)
    const gotPromise = fetch(`https://anapioficeandfire.com/api/characters/${randomNumber}`, {
      headers: {
        Accept: 'application/json'
      }
    });
    const response = await gotPromise;
    const gotData = await response.json();

    console.log(gotData.name + '  ' + gotData.gender + '   ' + gotData.playedBy)
    setName(gotData.name)
    setGender(gotData.gender)
    setAlias(gotData.aliases)
  }
  
  return (
    <div className="App">
      <header className="App-header">
      <GotButton getGot={getGot}/>
      <CharDisplay name={gotName} gender={gotGender} alias ={gotAlias} />
      </header>
    </div>
  )
};


export default App;
