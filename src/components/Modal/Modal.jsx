import React from 'react';

import {Button} from 'antd'
import './Modal.scss'

class Modal extends React.Component {

  state = {
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

  onSubmit = event => {
    event.preventDefault();
  }

  onClickHandler = (method, id = '') => {
    if (this.state.person.firstName && this.state.person.lastName) {

      fetch(`http://localhost:3000/persons/${id}`,
        {
          method: method,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: null,
            firstName: this.state.person.firstName,
            lastName: this.state.person.lastName
          })
        }
      )
        .then(() => this.props.refreshState())
      this.props.setOpen(false);
    }
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
              <form onSubmit={this.onSubmit} className='modal__content'>
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
                <Button className='modal__btn-primary'
                        type='primary'
                        onClick={() => this.onClickHandler(this.props.method, this.props.id)}
                        htmlType='submit'
                >
                  Сохранить</Button>
              </form>
            </div>
          </div>
        }
      </>
    );
  }
}

export default Modal;