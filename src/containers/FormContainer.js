import React from 'react'
import Form from '../components/Form'

class FormContainer extends React.Component {

  state = {
    name: '',
    message: '',
  }

  submitHandler = event => {
    event.preventDefault()
    console.log(this.state)
  }

  // https://facebook.github.io/react/docs/forms.html
  inputChangeHandler = event => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  render () {
    return (
      <Form
        nameValue={this.state.name}
        messageValue={this.state.message}
        inputHandler={this.inputChangeHandler}
        onSubmit={this.submitHandler}
      />
    )
  }
}

export default FormContainer
