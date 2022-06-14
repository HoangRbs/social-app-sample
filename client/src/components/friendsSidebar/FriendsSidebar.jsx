import axios from "axios";
import * as React from 'react';
import { useEffect, useState } from "react";

 // --------------- dropdown menu import components ----------------
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
 // ------------- ./dropdown menu import components ------------------ 

export default function FriendsSidebar ({ onlineUsersId, currentId, setCurrentChat }) {
    const [allFriends, setAllFriends] = useState([]);
    const [isNoMessage, setIsNoMessage] = useState({});  // there's no message between you and the online user
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
        const getAllFriends = async () => {
            const res = await axios.get("/users/getAll");
            const tmp = res.data.filter(f => f._id !== currentId);
            setAllFriends(tmp);
        };

        getAllFriends();
    }, [currentId]);

    // click on a online friend to go to conversation
    const handleClick = async (user) => {
        try {
            const res = await axios.get(
                `/conversations/find/${currentId}/${user._id}`
            );

            if (!res.data) setIsNoMessage({ ...isNoMessage, [user._id]: true }); 
            
            setCurrentChat(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    // create a new conversation
    const handleNewConversation = async (user) => {

        try {
            const res = await axios.post(
                `/conversations`, {
                senderId: currentId,
                receiverId: user._id 
                }
            );

            if (res.data) setIsNoMessage({ ...isNoMessage, [user._id]: false }); ; 
            
            setCurrentChat(res.data);   
        } catch (err) {
            console.log(err);
        }
    };

    // ------------- <drop down menu function> -------------
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    // ------------- </ drop down menu function> -------------

    return (
        <div id="friends" class="sidebar active">
            <header>
                <span>Friends</span>
                {/* <ul class="list-inline">
                    <li class="list-inline-item" data-toggle="tooltip" title="" data-original-title="Add friends">
                        <a class="btn btn-outline-light" href="#" data-toggle="modal" data-target="#addFriends">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                        </a>
                    </li>
                    <li class="list-inline-item d-xl-none d-inline">
                        <a href="#" class="btn btn-outline-light text-danger sidebar-close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </a>
                    </li>
                </ul> */}
            </header>
            <form>
                <input type="text" class="form-control" placeholder="Search friends" />
            </form>
            <div class="sidebar-body" tabindex="3" style = {{ overFlow: 'hidden', outline: 'none' }}>
                <ul class="list-group list-group-flush">
                    {allFriends.map((o) => (
                        <li class="list-group-item" data-navigation-target="chats" key={o._id}>
                            {
                                onlineUsersId.includes(o._id) ? 
                                <div onClick={() => handleClick(o)}>
                                    <figure class="avatar avatar-state-success">
                                        <img 
                                            src={
                                                o?.profilePicture
                                                ? o.profilePicture
                                                : PF + "person/noAvatar.png"
                                            } 
                                            class="rounded-circle" 
                                            alt="image" 
                                        />
                                    </figure>
                                </div>
                                : 
                                <div onClick={() => handleClick(o)}>
                                    <figure class="avatar">
                                        <img 
                                            src={
                                                o?.profilePicture
                                                ? o.profilePicture
                                                : PF + "person/noAvatar.png"
                                            } 
                                            class="rounded-circle" 
                                            alt="image" 
                                        />
                                    </figure>
                                </div>
                            }
                            <div class="users-list-body">
                                <div>
                                    <h5> {o?.username} </h5>
                                    {/* {isNoMessage[o._id] ? 
                                        <div>
                                            <button onClick = {() => handleNewConversation(o)}>{"start new conversation"}</button> 
                                        </div> : <></>
                                    }
                                    <p>Dental Hygienist</p> */}
                                </div>
                                <div 
                                    class="users-list-action"
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleOpenMenu}
                                >    
                                    <div class="action-toggle">   
                                        <div class="dropdown">
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    {isNoMessage[o._id] ? 
                                        <MenuItem onClick={() => {
                                            handleNewConversation(o)
                                            handleClose();
                                        }}>New Chat</MenuItem> : <></>
                                    }
                                </Menu>
                            </div>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    );
}
