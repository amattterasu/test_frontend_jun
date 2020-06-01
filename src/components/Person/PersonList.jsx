import React from 'react';
import './PersonList.css'

const PersonList = props => {

  return (
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
              <div>
                <button>1</button>
                <button>2</button>
              </div>
            </div>
          )
        })
      }
      <button>Добавить сотрудника</button>
    </div>
  );
};

export default PersonList;