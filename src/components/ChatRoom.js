// import React, {Component} from 'react';
// import { TextField, List, ListItem, ListItemText } from "@material-ui/core"
// import fire from 'firebase';



// class ChatRoom extends Component {
//     state = { text: "", messages: [] }
      
//       componentDidMount() {
//         let config = {
//             apiKey: "AIzaSyB6z8F1miQGZeEDKvB8VU7VlUg-nuvcXjQ",
//             authDomain: "my-project-b0afe.firebaseapp.com",
//             databaseURL: "https://my-project-b0afe.firebaseio.com",
//             projectId: "my-project-b0afe",
//             storageBucket: "my-project-b0afe.appspot.com",
//             messagingSenderId: "858723963959",
//             appId: "1:858723963959:web:cb87dbae81a7b2f1a29bb2"
//         }
//         fire.initializeApp(config)
//         this.getMessages()
//       }
    
//       onSubmit = event => {
//         if (event.charCode === 13 && this.state.text.trim() !== "") {
//           this.writeMessageToDB(this.state.text)
//           this.setState({ text: "" })
//         }
//       }
    
//       writeMessageToDB = message => {
//         fire
//           .database()
//           .ref("messages/")
//           .push({
//             text: message
//           })
//       }
    
//       getMessages = () => {
//         var messagesDB = fire
//           .database()
//           .ref("messages/")
//           .limitToLast(500)
//         messagesDB.on("value", snapshot => {
//           let newMessages = [];
//           snapshot.forEach(child => {
//             var message = child.val()
//             newMessages.push({ id: child.key, text: message.text })
//           })
//           this.setState({ messages: newMessages })
//           this.bottomSpan.scrollIntoView({ behavior: "smooth" })
//         })
//       }
    
//       renderMessages = () => {
//         return this.state.messages.map(message => (
//           <ListItem>
//             <ListItemText
//               style={{ wordBreak: "break-word" }}
//               primary={message.text}
//             />
//           </ListItem>
//         ))
//       }
    
//       render() {
//         return (
//           <div className="App">
//             <List>{this.renderMessages()}</List>
//             <TextField
//               autoFocus={true}
//               right={0}
//               multiline={true}
//               rowsMax={5}
//               placeholder="Type something.."
//               onChange={event => this.setState({ text: event.target.value })}
//               value={this.state.text}
//               onKeyPress={this.onSubmit}
//               style={{ width: "200px", overflow: "hidden", left:"80%", marginBottom:"50px" }}
//             />
//             <span ref={el => (this.bottomSpan = el)} />
//           </div>
//         )
//       }
// }


// export default ChatRoom;