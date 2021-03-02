import React from 'react';
import styles from './Users.module.css'
import FilterUsers from "./UsersFilter/FilterUsers";
import User from "./User/User";
import userPhoto from '../../images/ffa09aec412db3f54deadf1b3781de2a.png'
import * as axios from "axios";


class Users extends React.Component {

    componentWillMount() {
        this.addNewUsers()
    }

    addNewUsers() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <div>
                    <ul>
                        {this.props.users.map(el => <User id={el.id}
                                                     key={el.id}
                                                     fullName={`${el.name}`}
                                                     photoUrl={el.photos.small ? el.photos.small : userPhoto}
                                                     isFriend={el.followed}
                                                     followToggle={this.props.followToggle} />)}
                    </ul>
                    <button onClick={() => this.addNewUsers() }>Test</button>
                </div>
                <FilterUsers />
            </div>
        );
    }

}

export default Users;