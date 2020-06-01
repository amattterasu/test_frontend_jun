import React from 'react';
import './PersonList.css'

const PersonList = props => {

  return (
    <div>
      <table>
        <tr>
          <th>Имя</th>
          <th>Фамилия</th>
        </tr>
        {
          props.persons.map(person => {
            return (
              <tr>
                <td key={person.id}>
                  {
                    person.firstName
                  }
                </td>
                <td key={person.id}>
                  {
                    person.lastName
                  }
                </td>
                <div>
                  <button>1</button>
                  <button>2</button>
                </div>
              </tr>
            )
          })
        }
      </table>
      <button>Добавить сотрудника</button>
    </div>
  );
};

export default PersonList;