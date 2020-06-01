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
  const [method, setMethod] = useState('');
  const [id, setId] = useState('');

  const addPerson = () => {
    setOpen(true);
    setTitle('Создание сотрудника');
    setPlaceholder({
      firstName: 'Введите имя сотрудника',
      lastName: 'Введите фамилию сотрудника'
    })
    setValues({});
    setMethod('POST');
  }

  const editPerson = person => {
    setOpen(true);
    setTitle('Редактирование сотрудника');
    setValues({
      firstName: person.firstName,
      lastName: person.lastName
    });
    setMethod('PUT');
    setId(person.id);
  }

  async function deletePerson(personId) {
    try {
      await fetch(`http://localhost:4000/persons/${personId}`,
        {method: 'DELETE'});
      await props.setPersons(props.persons.filter(o => o.id !== personId));

    } catch (e) {
      props.notify('warning', 'Неверный запрос')
    }

  }

  return (
    <>
      <Modal isOpen={isOpen}
             setOpen={setOpen}
             title={title}
             values={values}
             placeholder={placeholder}
             refreshState={props.refreshState}
             method={method}
             id={id}
             notify={props.notify}
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