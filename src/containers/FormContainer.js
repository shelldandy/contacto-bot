import React from 'react'
import Form from '../components/Form'
import 'whatwg-fetch'
import MessageComposer from '../lib/MessageComposer'

const endPoint = process.env.REACT_APP_BOT_ENDPOINT
const destinataryID = process.env.REACT_APP_TG_USER
const url = `https://api.telegram.org/bot${endPoint}/sendMessage`

class FormContainer extends React.Component {

  state = {
    name: '',
    message: '',
  }

  submitHandler = event => {
    event.preventDefault()
    let request = fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        chat_id: destinataryID,
        text: MessageComposer(this.state.name, this.state.message)
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    request.then( response => response.json() )
    .then( result => {
      this.setState({
        name: '',
        message: ''
      })
    })
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
