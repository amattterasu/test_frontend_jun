import React, {useState} from 'react';

import './PersonList.scss'
import {Button} from "antd";
import {EditTwoTone, DeleteOutlined} from '@ant-design/icons'

import Modal from "../Modal/Modal";

const PersonList = props => {

  const [isOpen, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const [values, setValues] = useState({});

  const addPerson = () => {
    setOpen(true);
    setTitle('Создание сотрудника');
    setPlaceholder({
      firstName: 'Введите имя сотрудника',
      lastName: 'Введите фамилию сотрудника'
    })
    setValues({});
  }

  const editPerson = person => {
    setOpen(true);
    setTitle('Редактирование сотрудника');
    setValues({
      firstName: person.firstName,
      lastName: person.lastName
    });
  }

  const deletePerson = personId => {
   fetch(`http://localhost:3000/persons/${personId}`, {method: 'DELETE'})
     .then(props.setPersons(props.persons.filter(o => o.id !== personId)))
  }

  return (
    <>
      <Modal isOpen={isOpen}
             setOpen={setOpen}
             title={title}
             values={values}
             placeholder={placeholder}
             refreshState={props.refreshState}
      />

      <div className='table'>
        <div className='table__title'>
          <div className='table__item'>Имя</div>
          <div className='table__item'>Фамилия</div>
        </div>
        {
          props.persons.map(person => {

            return (
              <div className='table__row' key={person.id}>

                <div className='table__item'>
                  {
                    person.firstName
                  }
                </div>
                <div className='table__item'>
                  {
                    person.lastName
                  }
                </div>
                <div className='table__btn'>

                  <Button
                    onClick={() => editPerson(person)}
                  >
                    <EditTwoTone/>
                  </Button>

                  <Button
                    onClick={() => deletePerson(person.id)}
                  >
                    <DeleteOutlined style={{color: 'red'}}/>
                  </Button>
                </div>
              </div>
            )
          })
        }
        <Button
          className='table__btn-primary'
          type='primary'
          onClick={() => addPerson()}
        >
          Добавить сотрудника
        </Button>
      </div>
    </>
  )
}
export default PersonList;