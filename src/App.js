import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Feed from './components/Feed/Feed';
import Sidebar from './components/Sidebar/Sidebar';
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Sidebar />
            <div className='contentWrapper'>
                <HeaderContainer />
                <Route path="/profile/:userId?" render={() => <ProfileContainer /> } />
                <Route path="/feed" render={() => <Feed/>}/>
                <Route path="/messages"
                       render={() => <MessagesContainer/>}/>

                <Route path="/users" render={() => <UsersContainer />} />
            </div>
        </div>
    )
}

export default App;