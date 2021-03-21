import React from 'react';
import {addMessageActionCreator} from '../../../redux/messageReducer'
import DialogWindow from "./DialogWindow";
import {connect} from "react-redux";
import {compose} from "redux";
import {reduxForm} from "redux-form";


const DialogWindowContainer = (props) => {
    return <DialogWindow {...props} />
}

let mapStateToProps = (state) => {
    return {
        messages: state.messagesPage.messages,
        defaultValue: state.messagesPage.defaultMessageValue,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (value) => {
            dispatch(addMessageActionCreator(value.messageText))
        }
    }
}


export default compose(
    reduxForm({form: "DialogWindowForm"}),
    connect(mapStateToProps, mapDispatchToProps),
)(DialogWindowContainer);