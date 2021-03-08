import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUser} from "../../redux/authReducer";



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
        userData: state.auth.data,
    }
}

export default connect(mapStateToProps, {getAuthUser})(HeaderContainer);