import React from 'react';
import styles from './Users.module.css'
import FilterUsers from "./UsersFilter/FilterUsers";
import User from "./User/User";
import userPhoto from '../../images/ffa09aec412db3f54deadf1b3781de2a.png'
import * as axios from "axios";


class Users extends React.Component {

    componentDidMount() {
        this.changeUsers()
    }

    changeUsers(currentPage=this.props.currentPage, usersCount=10) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${usersCount}&page=${currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.updateAllUsersCount(response.data['totalCount']);
            })
    }

    changePage(currentPage, action) {
        let page = 1;
        if (action === 'minus-ten') {
            page = currentPage - 10;
        } else if (action === 'minus-one') {
            page = currentPage - 1;
        } else if (action === 'plus-one') {
            page = currentPage + 1;
        } else if (action === 'plus-ten') {
            page = currentPage + 10;
        };

        this.props.setPage(page);
        this.changeUsers(page);
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
                    <ul>
                        <button disabled={this.props.currentPage <= 10 ? true : false}
                                onClick={() => {this.changePage(this.props.currentPage, 'minus-ten')}}>--</button>
                        <button disabled={this.props.currentPage <= 1 ? true : false}
                                onClick={() => {this.changePage(this.props.currentPage, 'minus-one')}}>--</button>
                        <li>{this.props.currentPage}</li>
                        <button disabled={this.props.currentPage === this.props.countOfPages ? true : false}
                                onClick={() => {this.changePage(this.props.currentPage, 'plus-one')}}>+</button>
                        <button disabled={this.props.currentPage >= this.props.countOfPages - 9 ? true : false}
                                onClick={() => {this.changePage(this.props.currentPage, 'plus-ten')}}>++</button>
                    </ul>
                </div>
                <FilterUsers />
            </div>
        );
    }

}

export default Users;