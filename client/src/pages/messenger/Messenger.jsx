import Navigation from "../../components/navigation/Navigation";
import CurrentChatBox from "../../components/currentChatBox/CurrentChatBox";
import FriendsSidebar from "../../components/friendsSidebar/FriendsSidebar";
import ProfileBar from "../../components/profileBar/ProfileBar";
import ConversationSidebar from "../../components/conversationsSidebar/ConversationSidebar";

import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { apiRoutes, axiosHeadersObject, navigations, socketEvents } from '../../utils-contants';
// import { io } from "socket.io-client";

import socketIOClient  from "socket.io-client";
import * as sailsIOClient from 'sails.io.js'

let ioClient;
delete socketIOClient.sails;
ioClient = sailsIOClient(socketIOClient);

ioClient.sails.url = "http://localhost:6002";
ioClient.sails.useCORSRouteToGetCookie = false;
ioClient.sails.query = `token=${localStorage.getItem('token')}`;

ioClient.socket.get('/subscribe', function (res) {
  console.log('connect socket successfully !');
})

export default function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);   // store online users' ids
  const [currentNavigation, setCurrentNavigation] = useState(navigations.conversations);
  const [isProfileBarActive, setProfileBarActive] = useState(false);

  // const socket = useRef();
  const { user } = useContext(AuthContext);
  const scrollRef = useRef();

  // test useEffect
  // useEffect(() => {
  //   console.log('test:  ', isProfileBarActive);
  // }, [isProfileBarActive]);

  useEffect(() => {
    // socket.current = io("ws://localhost:8900"); // local socket server address 

    // socket.current.on(socketEvents.getMessage, (data) => { // socket server sends message from others to current user

    //   setArrivalMessage({
    //     sender: data.senderId,
    //     text: data.text,
    //     createdAt: Date.now(),
    //   });
    // });

    ioClient.socket.on('getMessage', function (data) {
      console.log('get message: ', data);  
    })
  

  }, []);

  useEffect(() => {
    // check for arrival message (real time) and does that message is sent by the user in that conversation
    // arrivalMessage &&
    //   currentChat?.members.includes(arrivalMessage.sender) &&
    //   setMessages((prev) => [...prev, arrivalMessage]);   // add arrival message to the current conversation
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    // socket.current.emit(socketEvents.addUser, user._id);   // add current user id to the socket server
    // socket.current.on(socketEvents.getUsers, (users) => {  // get online users currently on socket server
    //   const currentOnlineUsersId =  users.filter(u => u.userId !== user._id).map(u => u.userId);
    //   setOnlineUsers(
    //     currentOnlineUsersId
    //   );
    // });
  }, [user]);

  useEffect(() => {

    const getConversations = async () => {
      try {
        // const res = await axios.get("/conversations/" + user._id);
        const res = await axios.get(apiRoutes.getConversations, axiosHeadersObject());

        // console.log('conversations: ', res.data);

        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();

  
  }, [user.id, arrivalMessage, currentChat]);


  // after setting a current chat, set messages of that current chat
  useEffect(() => {
    const getMessages = async () => {
      try {
        // const res = await axios.get("/messages/" + currentChat?._id);
        // const res = await axios.get(apiRoutes.getMessages(currentChat?.id));
        setMessages(currentChat.chats);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(currentChat);

    const sendMessage = {
      message: newMessage,
      recvId: currentChat.userReceiveId,
      msg_type: "string" 
    };
    
    // current logged in user send message (in text as newMessage to the other though socker server)
    // socket.current.emit(socketEvents.sendMessage, {
    //   senderId: user._id,
    //   receiverId,
    //   text: newMessage,
    // });

    // send private chat message
    ioClient.socket.get('/send', { ...sendMessage }, function (res){
      console.log(res);
    })

    setNewMessage("");

    // try {
    //   // const res = await axios.post("/messages", message); // create that new message on api server, no need cuz sail js do it in the backend

    //   // added the newly created message (one message)
    //   // const res = await axios.post(apiRoutes.createAMessage, message);
    //   // setMessages([...messages, res.data]);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    
    <body>
      {/* <!-- layout --> */}
      <div class="layout">

          {/* <!-- navigation --> */}
          <Navigation user = {user} setCurrentNavigation = {setCurrentNavigation} setProfileBarActive = {setProfileBarActive}/>
          {/* <!-- ./ navigation --> */}

          {/* <!-- content --> */}
          <div class="content">
            {/* <!-- sidebar group --> */}
            <div class="sidebar-group">
              {
                currentNavigation === navigations.conversations ? 
                // <!-- Conversations sidebar --> 
                <ConversationSidebar 
                  conversations={conversations} 
                  currentUser = {user} 
                  setCurrentChat = {setCurrentChat} 
                  onlineUsersId = {onlineUsers} 
                  setCurrentNavigation = {setCurrentNavigation}  
                />
                /* <!-- ./ Conversations sidebar --> */
                : <></>
              }
              {
                currentNavigation === navigations.onlineFriends ? 
                /* <!-- Friends sidebar --> */
                <FriendsSidebar 
                  onlineUsersId={onlineUsers}
                  currentId={user.id}
                  setCurrentChat={setCurrentChat}
                />
                /* <!-- ./ Friends sidebar --> */
                : <></>
              }
            </div>
            {/* <!-- ./ sidebar group --> */}

            {/* <!-- chat --> */}
            {currentChat ? (
              <CurrentChatBox 
                messages={messages}
                user = {user}
                setNewMessage = {setNewMessage}
                newMessage = {newMessage}
                handleSubmit = {handleSubmit}
                scrollRef = {scrollRef}
                membersId = {[]}
                currentChat = {currentChat}
              />
            ) : (
              <span style = {{ margin: 'auto', textAlign: 'center', fontSize: '25px' }}>
                Open a conversation to start a chat or click on a friend.
              </span>
            )}
            {/* <!-- ./ chat --> */}

            {/* <!-- profile bar --> */}
            <ProfileBar 
              user={user} 
              isProfileBarActive = {isProfileBarActive} 
              setProfileBarActive = {setProfileBarActive} 
            />
            {/* <!-- ./ profile bar --> */}
          </div>
          {/* <!-- ./ content --> */}

      </div>
      {/* <!-- ./ layout --> */}

    </body>
  );
}
