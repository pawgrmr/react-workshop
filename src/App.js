import React, { Component, Fragment } from "react";
import { Greeter } from "./Greeter";
import "./styles.css";
import { LoginForm } from "./LoginForm";
import { UserList } from "./UserList";
import { MessageList } from "./MessageList";
import { MessageForm } from "./MessageForm";

class App extends Component {
  state = { name: "Manasi" };

  componentWillMount() {
    //alert(Object.keys(this.props.client)); => to check what the object is inside client??
    this.props.client.stateChanges.subscribe(x => this.setState({ data: x }));
    //x is a inline function instead of typing out the whole syntax
  }

  render() {
    return (
      //have to add furhter components inside the following div
      // injecting data into the state:
      // {JSON.stringify(this.state.data)}
      <div className="app">
        {!this.state.data.chat.isAuthenticated && (
          <LoginForm onLogin={name => this.props.client.tryLogin(name)} />
        )}

        <Greeter name={this.state.name} />
        {this.state.data.chat.isAuthenticated && (
          <div className="chat-content">
            <UserList users={this.state.data.chat.users} />
            <MessageList messages={this.state.data.chat.messages} />
            <MessageForm
              onSendText={text => this.props.client.sendText(text)}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
