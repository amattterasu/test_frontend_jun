import React from 'react';

import './PersonList.scss'
import {Button} from "antd";
import {EditTwoTone, DeleteOutlined} from  '@ant-design/icons'

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
              <div className='table__btn'>
                <Button><EditTwoTone /></Button>
                <Button><DeleteOutlined style={{color: 'red'}}/></Button>
              </div>
            </div>
          )
        })
      }
      <Button className='table__btn-primary' type='primary'> Добавить сотрудника </Button>
    </div>
  );
};

export default PersonList;