import React from 'react';

import {Button} from 'antd'
import './Modal.scss'

class Modal extends React.Component {

  state = {
    isOpen: false,
    person: {
      firstName: '',
      lastName: ''
    }
  }

  changeHandler = (value, controlName) => {

    const copy = this.props.values;
    copy[controlName] = value

    this.setState({
      person: copy
    })
  }

  render() {
    return (
      <>
        {
          this.props.isOpen &&
          <div className='modal'>
            <div className='modal__body'>
              <div className='modal__title'>
                {this.props.title}
              </div>
              <div className='modal__content'>
                <button className='modal__btn' onClick={() => this.props.setOpen(false)}>Назад к списку</button>

                <input type={this.props.type}
                       value={this.props.values.firstName}
                       onChange={event => this.changeHandler(event.target.value, 'firstName')}
                       placeholder={this.props.placeholder.firstName}
                />
                <input type={this.props.type}
                       value={this.props.values.lastName}
                       onChange={event => this.changeHandler(event.target.value, 'lastName')}
                       placeholder={this.props.placeholder.lastName}
                />
                <Button className='modal__btn-primary' type='primary'>Сохранить</Button>
              </div>
            </div>
          </div>
        }
      </>
    );
  }
}

export default Modal;