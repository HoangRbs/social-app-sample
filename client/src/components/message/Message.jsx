
import { format } from "timeago.js";
import { VideocamOffRounded, VideocamRounded } from '@material-ui/icons';

export default function Message({ message, messageType, own, senderUsername, senderProfilePicture, messageTime, messageTimeTotal, isLastMessSent, isLastMessDelivered }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      {
        message === 'calling' || message === 'In a call' ? 
        <></>
        :
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
          <div className ="message-content" style = {messageType === 'call' ? {backgroundColor: '#ebebeb', color: 'black'}:{} }>
            {
              messageType === 'string' ? message : 
              messageType === 'image_url' ? 
                <img src={message} 
                    style = {{
                      height: '250px',
                      width: '100%',
                      objectFit: 'cover'
                    }} 
                /> : 
              messageType === 'call' ? 
                message === 'Missed Call' ? 
                  <>
                    <VideocamOffRounded color='error'/>
                    <span style = {{ marginLeft: '10px' }}>{message}</span> 
                  </>
                :
                message === 'Call Ended' ?  
                  <>
                    <VideocamRounded />
                    <span style = {{ marginLeft: '10px' }}>{message}</span> 
                    <p>{messageTimeTotal / 1000} s</p>
                  </>
                : 
                <>
                  {message}
                </>
              : <></>
            }
          </div>
          {
            isLastMessSent && isLastMessDelivered ? <p style = {{ color: '#ababab', fontSize: '14px', fontStyle: 'italic' }}>Delivered</p> : 
            isLastMessSent ? <p style = {{ color: '#ababab', fontSize: '14px',  fontStyle: 'italic'}}>Sent</p> : <></>
          }
        </div>
      }
    </>
  );
}
