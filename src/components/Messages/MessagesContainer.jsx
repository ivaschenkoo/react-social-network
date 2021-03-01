import React from 'react';
import {connect} from "react-redux";
import Dialog from './Dialog/Dialog';
import Messages from "./Messages";


let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs.map(el => <Dialog key={el.userId} userId={el.userId} userName={el.name} message={el.message} /> )
    }
}

let mapDispatchToProps = () => {
    return {}
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;