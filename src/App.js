import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import FeedContainer from "./components/Feed/FeedContainer";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Sidebar />
            <div className='contentWrapper'>
                <HeaderContainer />
                <Route path="/profile/:userId?" render={() => <ProfileContainer /> } />
                <Route path="/feed" render={() => <FeedContainer />}/>
                <Route path="/messages"
                       render={() => <MessagesContainer/>}/>

                <Route path="/users" render={() => <UsersContainer />} />
                <Route path='/login' render={() => <LoginContainer />} />
            </div>
        </div>
    )
}

export default App;