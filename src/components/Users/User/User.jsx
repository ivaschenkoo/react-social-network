import React from 'react';
import {NavLink} from "react-router-dom";


const User = (props) => {
    return (
        <li>
            <NavLink to={`/users/${props.id}`}>
                <img src={props.photoUrl} alt="#" width='50px' />
            </NavLink>
            <div>
                <NavLink to={`/users/${props.id}`}>
                    <h3>{props.fullName}</h3>
                </NavLink>
            </div>
            <button onClick={() => props.followToggle(props.id) }>{props.isFriend ? 'Unfriend': 'Add Friend'}</button>
        </li>
    )
}

export default User;