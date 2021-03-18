import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUser, logoutUser} from "../../redux/authReducer";



class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUser()
    }

    render() {
        return (
            <Header {...this.props} />
        );
    }

}

const mapStateToProps = (state) => {
    return {
        login: state.auth.data.login,
    }
}

export default connect(mapStateToProps, {getAuthUser, logoutUser})(HeaderContainer);