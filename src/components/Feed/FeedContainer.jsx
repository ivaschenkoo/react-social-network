import React from 'react';
import Feed from "./Feed";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class FeedContainer extends React.Component {
    render() {
        return <Feed />;
    }

}

let mapStateToProps = (state) => {
    return {

    }
}

export default compose(withAuthRedirect, connect(mapStateToProps, {}))(FeedContainer)