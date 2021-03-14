import React from "react";
import ProfileStatus from "./ProfileStatus";


class ProfileStatusComponent extends React.Component {
    constructor(props) {
        super(props);
        debugger
        this.state = {
            editMode: false,
            statusText: this.props.profileStatus
        }
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
        this.props.changeUserStatus(this.state.statusText)
    }

    changeStatusText = (ev) => {
        this.setState({
            statusText: ev.target.value,
        })
    }


    render() {
        return <>
            {!this.state.editMode ?
                <span onClick={ this.activateEdit }><ProfileStatus profileStatus={this.props.profileStatus} /></span>
                :
                <input autoFocus
                       onBlur={ this.deactivateEdit }
                       onChange={(ev) => this.changeStatusText(ev)}
                       value={this.state.statusText}/>
            }
        </>
    }
}

export default ProfileStatusComponent;