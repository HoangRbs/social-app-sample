import axios from "axios";
import { useEffect, useState } from "react";
import { apiRoutes } from "../../utils-contants";
import { format } from 'timeago.js';

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Conversation({ conversation, currentUser, onlineUsersId }) {
  const [user, setUser] = useState(null);
  const [isConversationOnline, setIsOnline] = useState(false);

  // check if a member in the conversation is online then show online status (for both group and private chat, but disable for now :(( )))
  useEffect(() => {
    // setIsOnline(false);

    // for (let i = 0; i < conversation.members.length; i++) {
    //   if (onlineUsersId.includes(conversation.members[i])) {
    //     setIsOnline(true);  
    //     break;
    //   }
    // }

  }, [onlineUsersId]);

  // set current user for a box of conversation, just to show info (conv img, conv name), but no need for now
  // useEffect(() => {
  //   // const friendId = conversation.members.find((m) => m !== currentUser.id);

  //   // const getUser = async () => {
  //   //   try {
  //   //     // const res = await axios("/users?userId=" + friendId);
  //   //     const res = await axios(apiRoutes.getUser(friendId));
  //   //     setUser(res.data);
  //   //   } catch (err) {
  //   //     console.log(err);
  //   //   }
  //   // };
  //   // getUser();
  // }, [currentUser, conversation]);

  return (
      <div class="list-group-item">
        <figure class = {isConversationOnline ? "avatar avatar-state-success" : "avatar"}>
            <img src={
              user?.profilePicture
                ? user.profilePicture
                : PF + "person/noAvatar.png"
            } class="rounded-circle" alt="image" />
        </figure>
        <div class="users-list-body">
          <div>
              <h5 class="text-primary">{conversation.conversation_name}</h5>
              <p>{conversation.last_message}</p>
          </div>
          <div class="users-list-action">
              {/* new message count later using notification service */}
              {/* <div class="new-message-count">3</div>  */}
              {/* last message created time using notification server */}
              {/* using timeago.js module ... later */}
              <small class="text-primary">{new Date(conversation.message_time).toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
                day: 'numeric',
                month: 'numeric',
                year: '2-digit'
              })}</small>
          </div>
        </div>
      </div>
  );
}
