export const navigations = {
    conversations: 'conversations',
    onlineFriends: 'onlineFriends'
}

// api server address in the "proxy" in the file package.json, seems like axios auto get the proxy.
// "proxy": "http://localhost:8800/api" 
// read more here: https://create-react-app.dev/docs/proxying-api-requests-in-development/

export const apiRoutes = {
    register: '/register',
    login: '/login',
    getAllUsers: '/users/getAll',
    getUser: (id) => { return `/users/${id}` },
    createNewConversation: `/conversations`, // co the ko can
    findAConversation: (userId) => { return `/conversation/private-chat/${userId}` }, // find a conversation with the other user (id)
    getConversations: `/conversations`,  // get conversations of current user
    createAMessage: () => { return `/messages`; },      // create a message
    getMessages: (conversationId) => { return `/messages/${conversationId}`}, // get messages of a conversation
} 

export const socketEvents = {
    getMessage: 'getMessage', // socket server sends message from others to current user
    addUser: 'addUser',  // add current user id to the socket server
    getUsers: 'getUsers', // get online users currently on socket server
    sendMessage: 'sendMessage', // current logged in user send message
}

export const axiosHeadersObject = (AuthorizeToken) => {
    return {
        headers: { 
            'Authorization': `Bearer ${AuthorizeToken ? AuthorizeToken: localStorage.getItem('token')}` 
        }
    }
}

// const conversation = {
//     isPrivateChat: true,
//     userReceiveId: user.id,
    
//     ----------------------

//     conversationName: string,
//     conversationImg: string,
//     chats: [], // messages
// };
