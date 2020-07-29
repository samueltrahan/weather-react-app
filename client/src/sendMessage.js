import React, { Component } from 'react';

export default class SendMessage extends Component {
  state = {
    text: {
      recipient: '',
      textMessage: '',
    },
  };

  sendText = () => {
    const { text } = this.state;
    fetch(
      `/send-text?recipient=${text.recipient}&textMessage=${text.textMessage}`,
    ).catch(err => console.error(err));
  };

  render() {
    const { text } = this.state;
    return (
      <div>
        <div style={{ marginTop: 10 }}>
          <h2> Send Text Message </h2>
          <label> Your Phone Number </label>
          <br />
          <input
            value={text.recipient}
            onChange={e =>
              this.setState({ text: { ...text, recipient: e.target.value } })
            }
          />
          <div />
          <br />
          <label> Message </label>
          <br />
          <textarea
            rows={3}
            value={text.textMessage}
            onChange={e =>
              this.setState({ text: { ...text, textMessage: e.target.value } })
            }
          />
          <div />
          <button onClick={this.sendText}> Send Text </button>
        </div>
      </div>
    );
  }
}
