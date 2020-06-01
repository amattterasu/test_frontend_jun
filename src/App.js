import React, {useEffect, useState} from 'react';
import './App.css'
import PersonList from "./components/Person/PersonList";

const App = () => {

  const [persons, setPersons] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/persons')
      .then(res => res.json())
      .then(persons => {
        setPersons(persons)
      })
  }, [])

  return (
    <div className="App">
      <PersonList persons={persons}  setPersons={setPersons}/>
    </div>
  );
}

export default App;
