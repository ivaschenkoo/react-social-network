import React from "react";
import ProfileStatus from "./ProfileStatus";
import {compose} from "redux";
import {connect} from "react-redux";
import {getUserStatus} from "../../../redux/profileReducer";


class ProfileStatusComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            statusText: this.props.profileStatus
        }
    }

    componentDidMount() {
        this.props.getUserStatus(this.props.userId)
    }

    activateEdit = () => {
        this.setState({
            editMode: true,
        })
    }

    deactivateEdit = () => {
        this.setState({
            editMode: false,
        })
    }

    changeStatusText = (ev) => {
        this.setState({
            statusText: ev.target.value,
        })
    }


    render() {
        return <>
            {!this.state.editMode ?
                <span onClick={ this.activateEdit }><ProfileStatus profileStatus={this.state.statusText} /></span>
                :
                <input autoFocus
                       onBlur={ this.deactivateEdit }
                       onChange={(ev) => this.changeStatusText(ev)}
                       value={this.state.statusText}/>
            }
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        profileStatus: state.profilePage.profileStatus,
    }
}

export default compose(
    connect(mapStateToProps, {getUserStatus})
)(ProfileStatusComponent)