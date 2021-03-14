import React from "react";
import ProfileStatus from "./ProfileStatus";


class ProfileStatusComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            statusText: this.props.profileStatus
        }
    }

    componentDidMount() {
        this.setState({
            statusTest: this.props.profileStatus
        })
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

export default ProfileStatusComponent;