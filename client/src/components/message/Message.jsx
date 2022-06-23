
import { format } from "timeago.js";

export default function Message({ message, messageType, own, senderUsername, senderProfilePicture, messageTime }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className = { own ? 'message-item outgoing-message' : 'message-item'}>
      <div className ="message-avatar">
          <figure className ="avatar">
              <img src={ senderProfilePicture ? senderProfilePicture : PF + "person/noAvatar.png"} className ="rounded-circle" alt="image" />
          </figure>
          <div>
              <h5>{senderUsername}</h5>
              <div className ="time"> {format(messageTime)} </div>
          </div>
      </div>
      <div className ="message-content">
        {message}
      </div>
    </div>
  );
}
