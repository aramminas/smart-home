import React, { Component } from 'react';
import { Chat, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-popup';
import Support from '../support.png';
import fire from '../firebase';


class ChatForm extends Component {
  _initial = true;

  componentDidMount() {
    addResponseMessage("Hi how can we help you?");
    this.getMessages()
  }

  handleNewUserMessage = (message) => {
    fire
      .database()
      .ref("messages/")
      .push({
        sender: "user",
        text: message
      });
  }

  getMessages = () => {
    var messagesDB = fire
      .database()
      .ref("messages/")
      .limitToLast(500);
    messagesDB.on('value', snapshot => {
      if (initial) {
        snapshot.forEach(child => {
          let message = child.val();
          if (message.sender === "user") {
            addUserMessage(message.text);
          } else {
            addResponseMessage(message.text);
          }
        })
        this._initial = false;
      } else {
        let [message, ...messages] = Object.values(snapshot.val()).reverse();
          if (message.sender !== "user") {
            addResponseMessage(message.text);
          }
      }
    })
  }


  render() {
    return (
      <div className="App">
        <Chat
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={Support}
          title="Smart Home Support"
          subtitle="And my cool subtitle"
        />
      </div>
    );
  }
}

export default ChatForm;

