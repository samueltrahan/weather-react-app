import React, { Component } from 'react'

export default class SendMessage extends Component {

  state = {
    text: {
      recipient: '',
      textmessage: ''
    }
  }
  
  sendText = () => {
    const { text } = this.state;
    //pass text message GET variables via query string
    fetch(`http://127.0.0.1:4000/send-text?recipient=${text.recipient}&textmessage=${text.textmessage}`)
    .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <div style={{ marginTop: 10 }} >
          <h2> Send Text Message </h2>
          <label> Your Phone Number </label>
          <br />
          <input value={this.state.text.recipient}
            onChange={e => this.setState({ text: { ...this.state.text, recipient: e.target.value } })} />
          <div/>
          <br />
          <div/>
          <button onClick={this.sendText}> Send Text </button>
        </div>
      </div>
    )
  }
}
