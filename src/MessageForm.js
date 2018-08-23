import React from "react";

export class MessageForm extends React.Component {
  state = {};
  render() {
    return (
      <form
        onSubmit={event => {
          this.props.onSendText(this.state.text);
          this.setState({ text: "" });
          event.preventDefault();
        }}
      >
        <input
          type="text"
          value={this.state.text}
          onInput={event => this.setState({ text: event.currentTarget.value })}
        />

        <button type="submit">send</button>
      </form>
    );
  }
}
