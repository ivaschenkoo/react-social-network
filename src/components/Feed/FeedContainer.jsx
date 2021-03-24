import React from 'react';
import Feed from "./Feed";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const FeedContainer = (props) => {
    return <Feed />;
}


let mapStateToProps = (state) => ({

})

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {})
)(FeedContainer)