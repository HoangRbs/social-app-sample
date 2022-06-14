
import { format } from "timeago.js";

export default function Message({ message, own, senderUsername, senderProfilePicture }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div class= { own ? 'message-item outgoing-message' : 'message-item'}>
      <div class="message-avatar">
          <figure class="avatar">
              <img src={ senderProfilePicture ? senderProfilePicture : PF + "person/noAvatar.png"} class="rounded-circle" alt="image" />
          </figure>
          <div>
              <h5>{senderUsername}</h5>
              <div class="time"> {format(message.createdAt)} </div>
          </div>
      </div>
      <div class="message-content">
      {message.text}
      </div>
    </div>
  );
}
