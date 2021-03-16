import React from 'react';
import {connect} from "react-redux";
import Dialog from './Dialog/Dialog';
import Messages from "./Messages";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs.map(el => <Dialog key={el.userId} userId={el.userId} userName={el.name} message={el.message} /> )
    }
}


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {}),
)(Messages);