import React from 'react'
import Form from '../components/Form'
import 'whatwg-fetch'

const endPoint = process.env.REACT_APP_BOT_ENDPOINT

class FormContainer extends React.Component {

  state = {
    name: '',
    message: '',
  }

  submitHandler = event => {
    event.preventDefault()
    let request = fetch(`https://api.telegram.org/bot${endPoint}/getMe`)
    request.then( response => response.json() )
    .then( result => console.log(result) )
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
