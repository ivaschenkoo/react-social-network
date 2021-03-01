import React from 'react';
import {addMessageActionCreator, updateValueActionCreator} from '../../../redux/messageReducer'
import DialogWindow from "./DialogWindow";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        messages: state.messagesPage.messages,
        defaultValue: state.messagesPage.defaultMessageValue,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateState: () => {
            dispatch(addMessageActionCreator());
        },
        changeState: (ev) => {
            let message = ev.target.value;
            dispatch(updateValueActionCreator(message));
        },
    }
}

const DialogWindowContainer = connect(mapStateToProps, mapDispatchToProps)(DialogWindow);

export default DialogWindowContainer;