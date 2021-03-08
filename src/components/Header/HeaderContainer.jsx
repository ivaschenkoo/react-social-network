import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUser} from "../../redux/authReducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.getLoginStatus()
    }

    getLoginStatus() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true,
        }).then(response => {
            if (response.data.resultCode === 0) {
                this.props.setAuthUser(response.data.data)
            }
        })
    }

    render() {
        return (
            <Header {...this.props} />
        );
    }

}

const mapStateToProps = (state) => {
    return {
        userData: state.auth.data,
    }
}

export default connect(mapStateToProps, {setAuthUser})(HeaderContainer);