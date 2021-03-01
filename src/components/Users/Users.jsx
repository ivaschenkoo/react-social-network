import React from 'react';
import styles from './Users.module.css'
import FilterUsers from "./UsersFilter/FilterUsers";
import User from "./User/User";
import userPhoto from '../../images/ffa09aec412db3f54deadf1b3781de2a.png'
import * as axios from "axios";

const Users = (props) => {


    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items);
        })
    }
    return (
        <div className={styles.wrapper}>
            <div>
                <ul>
                    {props.users.map(el => <User id={el.id}
                                                 key={el.id}
                                                 fullName={`${el.name}`}
                                                 photoUrl={el.photos.small ? el.photos.small : userPhoto}
                                                 isFriend={el.followed}
                                                 followToggle={props.followToggle} />)}
                </ul>
                <button onClick={() => props.setUsers([]) }>Test</button>
            </div>
            <FilterUsers />
        </div>
    )
}

export default Users;