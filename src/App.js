import React, {useEffect, useState} from 'react';

import {toast} from 'react-toastify';
import './App.css'
import PersonList from "./components/Person/PersonList";

toast.configure();

const App = () => {

  const [persons, setPersons] = useState([]);

  const notify = (method, text) => {
    toast[method](`${text}`, {autoClose: 1500});
  };

  async function refreshState() {
    try {
      const response = await fetch('http://localhost:4000/persons');
      const persons = await response.json();
      await setPersons(persons)
      if (response.status === 200) {
        notify('success', 'Успешно');
      }
    } catch (e) {
      notify('warning', 'Неверный запрос');
    }
  }

  useEffect(() => {
    refreshState()
  }, [])

  return (
    <div className="App">
      <PersonList persons={persons} setPersons={setPersons} refreshState={refreshState} notify={notify}/>
    </div>
  );
}

export default App;
