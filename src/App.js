import React, {useEffect, useState} from 'react';
import './App.css'
import PersonList from "./components/Person/PersonList";

const App = () => {

  const [persons, setPersons] = useState([])

  const refreshState = () => {
    return (
      fetch('http://localhost:3000/persons')
        .then(res => res.json())
        .then(persons => {
          setPersons(persons)
        })
    )
  }

  useEffect(() => {
    refreshState()
  }, [])

  return (
    <div className="App">
      <PersonList persons={persons} setPersons={setPersons} refreshState={refreshState}/>
    </div>
  );
}

export default App;
